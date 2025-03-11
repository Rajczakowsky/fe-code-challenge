import downTrendIcon from '@/assets/down.png';
import upTrendIcon from '@/assets/up.png';
import type { Stock } from '@/store/stocksSlice';
import { memo } from 'react';
import './SymbolCardHeading.css';

const SymbolCardHeading = ({ id, trend }: { id: string; trend: Stock['trend'] }) => {
  return (
    <div className="symbolCard__heading">
      {id}
      {trend && ` - ${trend}`}
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
  );
};

export default memo(SymbolCardHeading);
