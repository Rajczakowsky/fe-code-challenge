import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import ListItem from '@/components/ListItem';
import { formatCurrencyCompact } from '@/lib';
import type { Stock } from '@/store/stocksSlice';
import { memo } from 'react';

type SymbolCardInfoProps = {
  companyName: Stock['companyName'];
  industry: Stock['industry'];
  marketCap: Stock['marketCap'];
};

const SymbolCardInfo = ({ companyName, industry, marketCap }: SymbolCardInfoProps) => {
  return (
    <>
      <ListItem Icon={<CompanyIcon />} spacing={'space-between'} label={companyName} />
      <ListItem Icon={<IndustryIcon />} spacing={'space-between'} label={industry} />
      <ListItem
        Icon={<MarketCapIcon />}
        spacing={'space-between'}
        label={formatCurrencyCompact(marketCap)}
      />
    </>
  );
};

export default memo(SymbolCardInfo);
