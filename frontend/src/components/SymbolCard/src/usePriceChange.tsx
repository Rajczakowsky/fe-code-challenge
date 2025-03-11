import { useEffect, useRef } from 'react';

/**
 * Custom hook to track price changes and determine if the price has changed by a certain threshold.
 *
 * @param {number} price - The current price.
 * @param {number} [threshold=25] - The percentage threshold for determining significant price changes.
 * @returns {Object} An object containing the change status:
 * - changedByThreshold: {boolean} - Whether the price has changed by the specified threshold.
 * - decreased: {boolean} - Whether the price has decreased.
 * - increased: {boolean} - Whether the price has increased.
 */
export const usePriceChange = (price: number, threshold = 25) => {
  const prevPriceRef = useRef<number>();
  const changeStatus = useRef({
    changedByThreshold: false,
    decreased: false,
    increased: false
  });

  useEffect(() => {
    if (prevPriceRef.current !== undefined && prevPriceRef.current !== 0) {
      const previousPrice = prevPriceRef.current;
      const changePercentage = Math.abs(((price - previousPrice) / previousPrice) * 100);

      changeStatus.current = {
        changedByThreshold: changePercentage >= threshold,
        decreased: price < prevPriceRef.current,
        increased: price > prevPriceRef.current
      };
    } else if (prevPriceRef.current === 0) {
      changeStatus.current = {
        changedByThreshold: price !== 0,
        decreased: price < 0,
        increased: price > 0
      };
    }

    prevPriceRef.current = price;
  }, [price, threshold]);

  return changeStatus.current;
};
