import Loading from '@/components/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPriceHistory, selectors } from '@/store/priceHistorySlice';
import { Suspense, lazy, memo, useEffect } from 'react';
import './priceChart.css';

const LazyLineChart = lazy(() => import('./src/LazyLineChart'));

const PriceChart = () => {
  const apiState = useAppSelector(selectors.apiState);
  const symbolId = useAppSelector((state) => state.store.activeSymbol);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (symbolId) {
      const fatchCall = dispatch(fetchPriceHistory(symbolId));

      return () => {
        fatchCall && fatchCall.abort();
      };
    }
  }, [symbolId]);

  const data = useAppSelector(selectors.selectPriceHistory);
  const symbolInfo = useAppSelector(selectors.selectSymbolInfo);

  if (apiState.loading && symbolId !== null)
    return (
      <div className="priceChart">
        <Loading />
      </div>
    );
  if (apiState.error) return <div className="priceChart">Failed to get price history!</div>;
  if (!symbolId) return <div className="priceChart">Select stock</div>;
  return (
    <div className="priceChart">
      <div>{symbolInfo}</div>
      <Suspense fallback={<Loading />}>
        <LazyLineChart
          data={data.map((e) => ({
            ...e,
            time: new Date(e.time).toLocaleTimeString()
          }))}
        />
      </Suspense>
    </div>
  );
};

export default memo(PriceChart);
