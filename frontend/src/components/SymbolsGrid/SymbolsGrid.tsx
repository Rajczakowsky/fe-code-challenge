import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import { useEffect } from 'react';
import '../SymbolsView/symbolsView.css';
import SymbolCardWithObserver from './src/SymbolCardWithObserver';
import './symbolsGrid.css';

const SymbolsGrid = () => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid">
      {stockSymbols.map((id, i) => (
        <SymbolCardWithObserver key={i} id={id} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
