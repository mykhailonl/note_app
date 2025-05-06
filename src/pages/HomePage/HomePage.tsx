import { HomeContent } from '../../components/common/HomeContent';
import { NewNoteButton } from '../../components/common/NewNoteButton';
import { PageContent } from '../../components/common/PageContent';
import { PageHeader } from '../../components/common/PageHeader';
import { useDevice } from '../../hooks/useDevice.ts';

export const HomePage = () => {
  const { isDesktop } = useDevice();

  if (isDesktop) {
    return (
      <div className="flex grow flex-col">
        <PageHeader text={'All Notes'} />

        <PageContent />
      </div>
    );
  }

  return (
    <>
      <HomeContent />
      <NewNoteButton
        iconName={'plus'}
        styles={{
          buttonStyles: 'fixed z-4 bottom-900 right-200 tablet:right-300 tablet:bottom-1200',
        }}
      />
    </>
  );
};

export default HomePage;
