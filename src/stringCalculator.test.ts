import { describe, expect, it } from "vitest";
import evalExpression from "./stringCalculator";

describe("String Calculator", () => {
  it("should return a single number", () => {
    expect(evalExpression("5")).toBe(5);
    expect(evalExpression("5")).not.toBe(500);
    expect(evalExpression("5")).not.toBe(0);
    expect(evalExpression("5")).not.toBe(null);
  });

  it("should return 0 for nullish or falsy values", () => {
    expect(evalExpression("")).toBe(0);
    expect(evalExpression("")).toBeFalsy();
    expect(evalExpression("")).not.toBe(NaN);
    expect(evalExpression("")).not.toBe(null);
  });

  it("should sum by default and return result of two or more numbers", () => {
    expect(evalExpression("5, 10")).toBe(15);
    expect(evalExpression("5,b,10")).toBe(15);
    expect(evalExpression("a,b,10")).toBe(10);
    expect(evalExpression("a,b")).toBe(0);
    expect(evalExpression("a,5,c")).toBe(5);
    expect(evalExpression("5,10,10")).not.toBe(0);
    expect(evalExpression("5,10,10")).not.toBe(undefined);
    expect(evalExpression("5,10,10")).not.toBe(null);
    expect(evalExpression("5,10,10")).not.toBe(NaN);
  });

  it("should calculate and return result with newline delimiter", () => {
    expect(evalExpression("1\n2,3")).toBe(6);
    expect(evalExpression("1\n2,\n3")).toBe(6);
    expect(evalExpression("\n1\n2,\n3")).toBe(6);
  });

  it("should calculate and return result while ignoring spaces", () => {
    expect(evalExpression("   1 ,  2, 3 ")).toBe(6);
    expect(evalExpression(" 1 ,  2 ,4 ")).toBe(7);
    expect(evalExpression("   1 \n,         2,5       ")).toBe(8);
  });
});
