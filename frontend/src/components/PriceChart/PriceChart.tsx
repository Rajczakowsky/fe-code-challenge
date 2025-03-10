import Loading from '@/components/Loading';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPriceHistory, selectors } from '@/store/priceHistorySlice';
import { useEffect } from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import './priceChart.css';

const PriceChart = () => {
  const apiState = useAppSelector(selectors.apiState);
  const symbolId = useAppSelector((state) => state.store.activeSymbol);

  const dispatch = useAppDispatch();
  useEffect(() => {
    let fatchCall = null;
    if (symbolId) {
      fatchCall = dispatch(fetchPriceHistory(symbolId));
    }

    return () => {
      fatchCall && fatchCall.abort();
    };
  }, [dispatch, symbolId]);

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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
