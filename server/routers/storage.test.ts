import { describe, expect, it, vi } from "vitest";
import { appRouter } from "../routers";
import type { TrpcContext } from "../_core/context";

// Mock the storagePut function
vi.mock("../storage", () => ({
  storagePut: vi.fn(async (relKey: string, _buffer: Buffer, _contentType: string) => {
    const mockKey = `${relKey}_abc12345`;
    return { key: mockKey, url: `/manus-storage/${mockKey}` };
  }),
}));

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user-storage",
    email: "marco@mpwoodworking.de",
    name: "Marco Paul",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createNonAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "non-admin-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createUnauthContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("storage.upload", () => {
  it("uploads a file and returns key, url, fileName, contentType, and size", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const testData = Buffer.from("Hello MP Woodworking!").toString("base64");

    const result = await caller.storage.upload({
      fileName: "test-holz.png",
      fileData: testData,
      contentType: "image/png",
      folder: "portfolio",
    });

    expect(result).toHaveProperty("key");
    expect(result).toHaveProperty("url");
    expect(result.fileName).toBe("test-holz.png");
    expect(result.contentType).toBe("image/png");
    expect(result.size).toBe(Buffer.from(testData, "base64").length);
    expect(result.url).toContain("/manus-storage/");
    expect(result.key).toContain("portfolio/test-holz");
  });

  it("uses default folder 'uploads' when not specified", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const testData = Buffer.from("Test file content").toString("base64");

    const result = await caller.storage.upload({
      fileName: "default-folder-test.txt",
      fileData: testData,
      contentType: "text/plain",
    });

    expect(result.key).toContain("uploads/default-folder-test");
  });

  it("rejects unauthenticated users", async () => {
    const ctx = createUnauthContext();
    const caller = appRouter.createCaller(ctx);

    const testData = Buffer.from("Unauthorized").toString("base64");

    await expect(
      caller.storage.upload({
        fileName: "hack.txt",
        fileData: testData,
        contentType: "text/plain",
        folder: "uploads",
      })
    ).rejects.toThrow();
  });

  it("rejects non-admin users", async () => {
    const ctx = createNonAdminContext();
    const caller = appRouter.createCaller(ctx);

    const testData = Buffer.from("Not admin").toString("base64");

    await expect(
      caller.storage.upload({
        fileName: "forbidden.txt",
        fileData: testData,
        contentType: "text/plain",
        folder: "uploads",
      })
    ).rejects.toThrow();
  });
});

describe("storage.uploadBatch", () => {
  it("uploads multiple files and returns an array of results", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const file1Data = Buffer.from("Eiche content").toString("base64");
    const file2Data = Buffer.from("Nussbaum content").toString("base64");

    const results = await caller.storage.uploadBatch({
      files: [
        { fileName: "eiche.jpg", fileData: file1Data, contentType: "image/jpeg" },
        { fileName: "nussbaum.jpg", fileData: file2Data, contentType: "image/jpeg" },
      ],
      folder: "holzarten",
    });

    expect(results).toHaveLength(2);
    expect(results[0]!.fileName).toBe("eiche.jpg");
    expect(results[0]!.contentType).toBe("image/jpeg");
    expect(results[0]!.key).toContain("holzarten/eiche");
    expect(results[0]!.url).toContain("/manus-storage/");
    expect(results[1]!.fileName).toBe("nussbaum.jpg");
    expect(results[1]!.key).toContain("holzarten/nussbaum");
  });

  it("handles empty files array", async () => {
    const ctx = createAuthContext();
    const caller = appRouter.createCaller(ctx);

    const results = await caller.storage.uploadBatch({
      files: [],
      folder: "empty-test",
    });

    expect(results).toHaveLength(0);
  });

  it("rejects unauthenticated users for batch upload", async () => {
    const ctx = createUnauthContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.storage.uploadBatch({
        files: [
          { fileName: "hack.txt", fileData: "dGVzdA==", contentType: "text/plain" },
        ],
        folder: "uploads",
      })
    ).rejects.toThrow();
  });

  it("rejects non-admin users for batch upload", async () => {
    const ctx = createNonAdminContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.storage.uploadBatch({
        files: [
          { fileName: "forbidden.txt", fileData: "dGVzdA==", contentType: "text/plain" },
        ],
        folder: "uploads",
      })
    ).rejects.toThrow();
  });
});
