import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import downTrendIcon from '@/assets/down.png';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import upTrendIcon from '@/assets/up.png';
import ListItem from '@/components/ListItem';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { formatCurrencyCompact, formatPrice } from '@/lib';
import { setAtiveSymbol } from '@/store/dashboardOptionsSlice';

import './symbolCard.css';

type SymbolCardProps = {
  id: string;
  price: number;
};

const SymbolCard = ({ id, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector(
    (state) => state.stocks.entities[id]
  );
  const { showCardInfo } = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(setAtiveSymbol(id));
  };
  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div className="symbolCard__header">
        {id} - {trend}
        {trend && (
          <div className="symbolCard__marker">
            {trend === 'UP' ? (
              <img src={upTrendIcon} width={40} height={40} />
            ) : (
              <img src={downTrendIcon} width={40} height={40} />
            )}
          </div>
        )}
      </div>

      <div className="symbolCard__content">
        <div className="symbolCard__price">
          <div className="symbolCard__price-label">Price: </div>
          <div className="symbolCard__price-value">{price ? formatPrice(price) : '--'} </div>
        </div>
        {showCardInfo && (
          <>
            <ListItem Icon={<CompanyIcon />} spacing={'space-between'} label={companyName} />
            <ListItem Icon={<IndustryIcon />} spacing={'space-between'} label={industry} />
            <ListItem
              Icon={<MarketCapIcon />}
              spacing={'space-between'}
              label={formatCurrencyCompact(marketCap)}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default SymbolCard;
