import { z } from "zod";
import { adminProcedure, router } from "../_core/trpc";
import { storagePut } from "../storage";

/**
 * Storage router – handles file uploads to S3 via presigned URLs.
 * Only authenticated users (admin) can upload files.
 */
export const storageRouter = router({
  /**
   * Upload a file (base64-encoded) to S3.
   * Returns the storage key and the public URL path.
   */
  upload: adminProcedure
    .input(
      z.object({
        fileName: z.string().min(1),
        fileData: z.string().min(1), // base64-encoded file content
        contentType: z.string().default("application/octet-stream"),
        folder: z.string().default("uploads"), // logical folder prefix
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { fileName, fileData, contentType, folder } = input;

      // Decode base64 to buffer
      const buffer = Buffer.from(fileData, "base64");

      // Build a storage key with folder prefix and user context
      const relKey = `${folder}/${fileName}`;

      const { key, url } = await storagePut(relKey, buffer, contentType);

      return { key, url, fileName, contentType, size: buffer.length };
    }),

  /**
   * Upload multiple files at once (batch upload).
   */
  uploadBatch: adminProcedure
    .input(
      z.object({
        files: z.array(
          z.object({
            fileName: z.string().min(1),
            fileData: z.string().min(1),
            contentType: z.string().default("application/octet-stream"),
          })
        ),
        folder: z.string().default("uploads"),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const results = await Promise.all(
        input.files.map(async (file) => {
          const buffer = Buffer.from(file.fileData, "base64");
          const relKey = `${input.folder}/${file.fileName}`;
          const { key, url } = await storagePut(relKey, buffer, file.contentType);
          return { key, url, fileName: file.fileName, contentType: file.contentType, size: buffer.length };
        })
      );

      return results;
    }),
});
