import usePriceStateClasses from '@/components/SymbolCard/src/usePriceStateClasses';
import useSymbolCardClasses from '@/components/SymbolCard/src/useSelectionClasses';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { formatPrice } from '@/lib';
import { setActiveSymbol } from '@/store/dashboardOptionsSlice';
import { memo } from 'react';
import SymbolCardHeading from './src/SymbolCardHeading';
import SymbolCardInfo from './src/SymbolCardInfo';
import './symbolCard.css';
type SymbolCardProps = {
  id: string;
};

const SymbolCard = ({ id }: SymbolCardProps) => {
  const price = useAppSelector((state) => state.prices[id]);
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const { activeSymbol } = useAppSelector((state) => state.store);
  const { showCardInfo } = useAppSelector((state) => state.store);

  const dispatch = useAppDispatch();

  const isSelected = activeSymbol === id;

  const priceStateClasses = usePriceStateClasses(price);
  const selectionStateClasses = useSymbolCardClasses(activeSymbol, id);

  const handleOnClick = () => {
    dispatch(setActiveSymbol(activeSymbol && isSelected ? undefined : id));
  };

  return (
    <div
      onClick={handleOnClick}
      className={`symbolCard ${priceStateClasses} ${selectionStateClasses}`}
    >
      <SymbolCardHeading id={id} trend={trend} />
      <div className="symbolCard__content">
        <div className="symbolCard__price">
          <div className="symbolCard__price-label">Price: </div>
          <div className="symbolCard__price-value">{price ? formatPrice(price) : '--'}</div>
        </div>
        {showCardInfo && (
          <SymbolCardInfo companyName={companyName} industry={industry} marketCap={marketCap} />
        )}
      </div>
    </div>
  );
};
export default memo(SymbolCard);
