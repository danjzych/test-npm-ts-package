import { describe, expect, it } from "vitest";
import { add } from ".";

describe("add", () => {
  it("should add correctly", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
