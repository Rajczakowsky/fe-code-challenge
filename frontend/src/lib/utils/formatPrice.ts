export function formatPrice(num: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumIntegerDigits: 1,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    currency: 'USD'
  });

  return formatter.format(Math.floor(num));
}
