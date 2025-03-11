import { useAppSelector } from '@/hooks/redux';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import SymbolCard from '../../SymbolCard';

const SymbolCardWithObserver = ({ id }: { id: string }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  const { showCardInfo } = useAppSelector((state) => state.store);
  const cardHeight = showCardInfo ? 'symbolsGrid__card--open' : 'symbolsGrid__card--closed';

  return (
    <div ref={ref} className={cardHeight}>
      {isIntersecting && <SymbolCard id={id} />}
    </div>
  );
};

export default SymbolCardWithObserver;
