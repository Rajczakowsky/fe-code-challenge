import Loading from '@/components/Loading';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const SymbolsView = lazy(() => import('@/components/SymbolsView'));
const StatementsView = lazy(() => import('@/components/StatementsView'));
const ProfileView = lazy(() => import('@/components/ProfileView'));

const Router = () => {
  const renderWithSuspense = (Component: React.ComponentType): JSX.Element => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );

  return (
    <Routes>
      <Route index element={renderWithSuspense(SymbolsView)} />
      <Route path="profile" element={renderWithSuspense(ProfileView)} />
      <Route path="statements" element={renderWithSuspense(StatementsView)} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
