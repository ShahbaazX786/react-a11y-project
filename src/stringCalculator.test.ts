import { describe, expect, it } from "vitest";
import evalExpression from "./stringCalculator";

describe("String Calculator", () => {
  it("should return a single number", () => {
    expect(evalExpression("5")).toBe(5);
  });
  it("should not return empty string", () => {
    expect(evalExpression("")).not.toBe("");
  });
});
