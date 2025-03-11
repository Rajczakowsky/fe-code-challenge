import { useEffect, useState } from 'react';
import { usePriceChange } from './usePriceChange';

type ClassNames = {
  animate: string;
  decreased: string;
  increased: string;
};

/**
 * Custom hook to determine the CSS classes based on price changes.
 *
 * @param {number} price - The current price.
 * @param {ClassNames} [classNames] - The class names for different price change states.
 * @returns {string} The combined class names based on the price change state.
 */

const usePriceStateClasses = (
  price: number,
  classNames: ClassNames = {
    animate: 'symbolCard--shake',
    decreased: 'symbolCard__changed--decreased',
    increased: 'symbolCard__changed--increased'
  }
): string => {
  const [stateClasses, setStateClasses] = useState<string>('');
  const { changedByThreshold, decreased, increased } = usePriceChange(price);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    setStateClasses(
      `${changedByThreshold && classNames.animate} ${decreased && classNames.decreased} ${
        increased && classNames.increased
      }`
    );

    timer = setTimeout(() => {
      setStateClasses('');
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [changedByThreshold, decreased, increased, price]);

  return stateClasses;
};

export default usePriceStateClasses;
