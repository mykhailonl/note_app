import { Outlet } from 'react-router-dom';

import { MainLayout } from '../components/common/MainLayout';
import { HomeHeader } from '../components/common/HomeHeader';
import { HomeMenuBar } from '../components/common/HomeMenuBar';

export const HomePageLayout = () => {
  return (
    <MainLayout>
      <HomeHeader />

      <Outlet />

      <HomeMenuBar />
    </MainLayout>
  );
};

export default HomePageLayout;
