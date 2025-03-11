import PriceChart from '@/components/PriceChart';
import SymbolsGrid from '@/components/SymbolsGrid';
import DesktopInfo from './src/DesktopInfo';
import './symbolsView.css';

const SymbolsView = () => {
  return (
    <div className="symbolsView">
      <DesktopInfo />

      <div className="symbolsView__content">
        <div className="symbolsView__chart">
          <h3 className='symbolsView__chart-title'>PRICE HISTORY</h3>
          <PriceChart />
        </div>
        <div className="symbolsView__cards">
          <SymbolsGrid />
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
