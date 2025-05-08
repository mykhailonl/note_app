import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

import { HomeHeader } from '../components/common/HomeHeader';
import { HomeMenuBar } from '../components/common/HomeMenuBar';
import { MainLayout } from '../components/common/MainLayout';
import { PageContent } from '../components/common/PageContent';
import { PageHeader } from '../components/common/PageHeader';
import { SideBar } from '../components/common/SideBar';
import { useDevice } from '../hooks/useDevice.ts';

import DesktopLayout from './DesktopLayout.tsx';

export const HomePageLayout = () => {
  const { isDesktop } = useDevice();
  const { pathname } = useLocation();

  const isNoteDetail = pathname.includes('/notes/');

  if (!isDesktop && isNoteDetail) {
    return (
      <MainLayout>
        <HomeHeader />

        <Outlet />

        <HomeMenuBar />
      </MainLayout>
    );
  }

  if (isDesktop) {
    return (
      <DesktopLayout>
        <SideBar />

        <div className="flex h-screen grow flex-col">
          <PageHeader />

          <PageContent />
        </div>
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
