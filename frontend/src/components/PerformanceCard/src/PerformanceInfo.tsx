import formatSymbolChange from '@/components/PerformanceCard/src/formatSymbolChange';
import { memo } from 'react';
import './performanceInfo.css';

type PerformanceCardProps = {
  label: string;
  change: number;
};

const PerformanceInfo = ({ label, change }: PerformanceCardProps) => {
  return (
    <div className="performanceInfo">
      <div className="performanceInfo__label">{label}</div>
      <div
        className={`performanceInfo__value ${
          change > 1 ? 'performanceInfo__value--up' : 'performanceInfo__value--down'
        }`}
      >
        {formatSymbolChange(change, 2)}
      </div>
    </div>
  );
};
export default memo(PerformanceInfo);
