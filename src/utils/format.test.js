import { it, expect } from "vitest";
import { formatKwh } from "./format";

it("should format kWh values correctly", () => {
  const value = "1204";
  const result = formatKwh(value);
  expect(result).toBe("1 204 kr");
});