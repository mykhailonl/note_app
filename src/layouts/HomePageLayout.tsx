import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

import { HomeHeader } from '../components/common/HomeHeader';
import { HomeMenuBar } from '../components/common/HomeMenuBar';
import { ModalContainer } from '../components/common/ModalContainer';
import { PageContent } from '../components/common/PageContent';
import { PageHeader } from '../components/common/PageHeader';
import { SideBar } from '../components/common/SideBar';
import { ToastContainer } from '../components/common/ToastContainer';
import { useDevice } from '../hooks/useDevice.ts';

import DesktopLayout from './DesktopLayout.tsx';
import { MainLayout } from './MainLayout.tsx';

export const HomePageLayout = () => {
  //#region hooks
  const { isDesktop } = useDevice();
  const { pathname } = useLocation();
  //#endregion

  //#region conditions
  const isNoteDetail = pathname.includes('/notes/');
  //#endregion

  if (!isDesktop && isNoteDetail) {
    return (
      <>
        <ModalContainer />

        <MainLayout>
          <HomeHeader />

          <Outlet />

          <ToastContainer />

          <HomeMenuBar />
        </MainLayout>
      </>
    );
  }

  if (isDesktop) {
    return (
      <>
        <ModalContainer />

        <DesktopLayout>
          <SideBar />

          <div className="flex h-screen grow flex-col">
            <PageHeader />

            <PageContent />
          </div>

          <ToastContainer />
        </DesktopLayout>
      </>
    );
  }

  return (
    <>
      <ModalContainer />

      <MainLayout>
        <HomeHeader />

        <Outlet />

        <ToastContainer />

        <HomeMenuBar />
      </MainLayout>
    </>
  );
};

export default HomePageLayout;
