import React, { useCallback, useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface UploadedFile {
  key: string;
  url: string;
  fileName: string;
  size: number;
}

interface FileUploadProps {
  folder?: string;
  accept?: string;
  maxSizeMB?: number;
  multiple?: boolean;
  onUploadComplete?: (files: UploadedFile[]) => void;
  className?: string;
}

export default function FileUpload({
  folder = "uploads",
  accept = "image/*",
  maxSizeMB = 10,
  multiple = false,
  onUploadComplete,
  className = "",
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const uploadMutation = trpc.storage.upload.useMutation();

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;

      const maxBytes = maxSizeMB * 1024 * 1024;
      const files = Array.from(fileList);

      // Validate file sizes
      for (const file of files) {
        if (file.size > maxBytes) {
          toast.error(`"${file.name}" ist zu groß (max. ${maxSizeMB} MB).`);
          return;
        }
      }

      setUploading(true);
      const results: UploadedFile[] = [];

      try {
        for (const file of files) {
          // Convert file to base64
          const arrayBuffer = await file.arrayBuffer();
          const base64 = btoa(
            new Uint8Array(arrayBuffer).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );

          const result = await uploadMutation.mutateAsync({
            fileName: file.name,
            fileData: base64,
            contentType: file.type || "application/octet-stream",
            folder,
          });

          results.push(result);
        }

        setUploadedFiles((prev) => [...prev, ...results]);
        onUploadComplete?.(results);
        toast.success(
          results.length === 1
            ? `"${results[0].fileName}" erfolgreich hochgeladen.`
            : `${results.length} Dateien erfolgreich hochgeladen.`
        );
      } catch (error) {
        toast.error("Fehler beim Hochladen. Bitte erneut versuchen.");
        console.error("[FileUpload] Error:", error);
      } finally {
        setUploading(false);
      }
    },
    [folder, maxSizeMB, uploadMutation, onUploadComplete]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-none p-8 text-center cursor-pointer
          transition-all duration-200
          ${dragActive
            ? "border-[#a3e635] bg-[#a3e635]/5"
            : "border-[#2a2a28] hover:border-[#a3e635]/50 bg-[#11110f]"
          }
        `}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={uploading}
        />

        <div className="flex flex-col items-center space-y-3">
          {uploading ? (
            <Loader2 className="w-8 h-8 text-[#a3e635] animate-spin" />
          ) : (
            <Upload className="w-8 h-8 text-[#a8a8a3]" />
          )}
          <div>
            <p className="text-sm text-[#f8f8f7] font-sans">
              {uploading
                ? "Wird hochgeladen..."
                : "Datei hierher ziehen oder klicken"}
            </p>
            <p className="text-xs text-[#a8a8a3] mt-1 font-sans">
              Max. {maxSizeMB} MB pro Datei
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          {uploadedFiles.map((file, index) => (
            <div
              key={file.key}
              className="flex items-center justify-between p-3 bg-[#1a1a19] border border-[#2a2a28] rounded-none"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-[#a3e635]" />
                <div>
                  <p className="text-xs text-[#f8f8f7] font-sans">
                    {file.fileName}
                  </p>
                  <p className="text-[10px] text-[#a8a8a3] font-sans">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                className="text-[#a8a8a3] hover:text-[#d40924] p-1 h-auto"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
