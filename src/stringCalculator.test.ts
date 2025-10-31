import { describe, expect, it } from "vitest";
import evalExpression from "./stringCalculator";

describe("String Calculator", () => {
  it("should return single number", () => {
    expect(evalExpression("5")).toBe(5);
  });
});
