import { it, expect } from "vitest";
import { firstName } from "./user";

it("should return the first name from a full name", () => {
  const fullName = "John Doe";
  const result = firstName(fullName);
  expect(result).toBe("John");
});
