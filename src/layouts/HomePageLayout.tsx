import { Outlet } from 'react-router-dom';

import { HomeHeader } from '../components/common/HomeHeader';
import { HomeMenuBar } from '../components/common/HomeMenuBar';
import { MainLayout } from '../components/common/MainLayout';
import { SideBar } from '../components/common/SideBar';
import { useDevice } from '../hooks/useDevice.ts';

import DesktopLayout from './DesktopLayout.tsx';


export const HomePageLayout = () => {
  const { isDesktop } = useDevice();

  if (isDesktop) {
    return (
      <DesktopLayout>
        <SideBar />

        <Outlet />
      </DesktopLayout>
    );
  }

  return (
    <MainLayout>
      <HomeHeader />

      <Outlet />

      <HomeMenuBar />
    </MainLayout>
  );
};

export default HomePageLayout;
