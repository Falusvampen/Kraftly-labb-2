/**
 * Gets the first name from a full name.
 *
 * @param {string} fullName - The full name.
 * @returns {string} The first name.
 */
export const firstName = (fullName) => {
  if (!fullName) return "";
  return fullName.split(" ")[0];
};
