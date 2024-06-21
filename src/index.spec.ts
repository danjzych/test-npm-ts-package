import { describe, expect, it } from "vitest";
import { add } from ".";

describe("add", () => {
  it("should add correctly", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("should fail CI", () => {
    expect(1).toBe(2);
  });
});
