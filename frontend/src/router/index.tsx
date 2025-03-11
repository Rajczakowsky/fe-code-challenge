import Loading from '@/components/Loading';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const SymbolsView = lazy(() => import('@/components/SymbolsView'));
const StatementsView = lazy(() => import('@/components/StatementsView'));
const ProfileView = lazy(() => import('@/components/ProfileView'));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<SymbolsView />} />
        <Route path="profile" element={<ProfileView />} />
        <Route path="statements" element={<StatementsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
