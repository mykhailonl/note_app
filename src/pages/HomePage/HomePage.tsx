import { MainLayout } from '../../components/common/MainLayout';
import { HomeHeader } from '../../components/common/HomeHeader';
import { HomeContent } from '../../components/common/HomeContent';
import { HomeMenuBar } from '../../components/common/HomeMenuBar';
import { NewNoteButton } from '../../components/common/NewNoteButton';

export const HomePage = () => {
  return (
    <MainLayout>
      <HomeHeader />

      <HomeContent />

      <NewNoteButton
        iconName={'plus'}
        styles={{
          buttonStyles: 'fixed z-4 bottom-900 right-200',
        }}
      />

      <HomeMenuBar />
    </MainLayout>
  );
};

export default HomePage;
