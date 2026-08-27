import { it, expect } from "vitest";
import { formatKwh, formatAmount } from "./format";

it("should format kWh values correctly", () => {
  const value = "730";
  const result = formatKwh(value);
  expect(result).toBe("730 kWh");
});

it("should formatAmount (kr)", () => {
    const value= "1204";
    const result = formatAmount(value);
    expect(result).toBe("1 204 kr");
}
