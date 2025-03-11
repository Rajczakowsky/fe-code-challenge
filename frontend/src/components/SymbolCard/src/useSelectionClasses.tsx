import { useMemo } from 'react';

type ClassNames = {
  selected: string;
  deselected: string;
};

/**
 * Custom hook to determine the selection classes for a symbol card.
 *
 * @param {string | null} activeSymbol - The currently active symbol.
 * @param {string} id - The identifier for the symbol card.
 * @param {ClassNames} [classNames] - The class names for selected and deselected states.
 * @returns {string} The combined class names based on the selection state.
 */

const useSelectionClasses = (
  activeSymbol: string | null,
  id: string,
  classNames: ClassNames = {
    selected: 'symbolCard__selected',
    deselected: 'symbolCard__deselected'
  }
): string => {
  return useMemo(() => {
    const selected = activeSymbol === id ? classNames.selected : '';
    const deselected = activeSymbol && activeSymbol !== id ? classNames.deselected : '';
    return `${selected} ${deselected}`.trim();
  }, [activeSymbol, id, classNames.selected, classNames.deselected]);
};

export default useSelectionClasses;
