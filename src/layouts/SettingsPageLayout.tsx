import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

import { HomeHeader } from '../components/common/HomeHeader';
import { HomeMenuBar } from '../components/common/HomeMenuBar';
import { PageContent } from '../components/common/PageContent';
import { PageHeader } from '../components/common/PageHeader';
import { SideBar } from '../components/common/SideBar';
import { ToastContainer } from '../components/common/ToastContainer';
import { useDevice } from '../hooks/useDevice.ts';

import DesktopLayout from './DesktopLayout.tsx';
import { MainLayout } from './MainLayout.tsx';

export const SettingsPageLayout = () => {
  const { isDesktop } = useDevice();
  const { pathname } = useLocation();

  const isSettingsPage = [
    '/settings/color-theme',
    '/settings/font-theme',
    '/settings/change-password',
  ].includes(pathname);

  if (!isDesktop && isSettingsPage) {
    return (
      <>
        <ToastContainer />

        <MainLayout>
          <HomeHeader />

          <Outlet />

          <HomeMenuBar />
        </MainLayout>
      </>
    );
  }

  if (isDesktop) {
    return (
      <>
        <ToastContainer />

        <DesktopLayout>
          <SideBar />

          <div className="flex h-screen grow flex-col">
            <PageHeader />

            <PageContent />
          </div>
        </DesktopLayout>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      <MainLayout>
        <HomeHeader />

        <Outlet />

        <HomeMenuBar />
      </MainLayout>
    </>
  );
};

export default SettingsPageLayout;
