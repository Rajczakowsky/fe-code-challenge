/**
 * Formats a number as a price in USD.
 *
 * @param {number} num - The number to format.
 * @param {number} [minimumIntegerDigits=1] - The minimum number of integer digits.
 * @param {number} [minimumFractionDigits=0] - The minimum number of fraction digits.
 * @param {number} [maximumFractionDigits=1] - The maximum number of fraction digits.
 * @returns {string} The formatted price string.
 */

export function formatPrice(
  num: number,
  minimumIntegerDigits: number = 1,
  minimumFractionDigits: number = 0,
  maximumFractionDigits: number = 1
): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumIntegerDigits,
    maximumFractionDigits,
    minimumFractionDigits,
    currency: 'USD'
  });

  return formatter.format(num);
}
