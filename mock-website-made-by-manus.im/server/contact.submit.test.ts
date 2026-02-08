import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the db module
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue(undefined),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts valid contact form submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "山田太郎",
      email: "yamada@example.com",
      inquiryType: "products",
      message: "製品について詳しく知りたいです。",
      attendingHorseMesse: true,
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        inquiryType: "general",
        message: "Test message",
        attendingHorseMesse: false,
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        inquiryType: "general",
        message: "Test message",
        attendingHorseMesse: false,
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty inquiry type", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        inquiryType: "",
        message: "Test message",
        attendingHorseMesse: false,
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        inquiryType: "general",
        message: "",
        attendingHorseMesse: false,
      })
    ).rejects.toThrow();
  });

  it("handles Horse Messe attendance flag correctly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "佐藤花子",
      email: "sato@example.com",
      inquiryType: "horsemesse",
      message: "Horse Messeのブースについて教えてください。",
      attendingHorseMesse: true,
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts all valid inquiry types", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const inquiryTypes = [
      "general",
      "products",
      "wholesale",
      "collaboration",
      "press",
      "horsemesse",
    ];

    for (const type of inquiryTypes) {
      const result = await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        inquiryType: type,
        message: `Test message for ${type}`,
        attendingHorseMesse: false,
      });

      expect(result).toEqual({ success: true });
    }
  });
});
