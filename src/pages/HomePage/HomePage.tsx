import { HomeContent } from '../../components/common/HomeContent';
import { NewNoteButton } from '../../components/common/NewNoteButton';

export const HomePage = () => {
  return (
    <>
      <HomeContent />
      <NewNoteButton
        iconName={'plus'}
        styles={{
          buttonStyles: 'fixed z-4 bottom-900 right-200',
        }}
      />
    </>
  );
};

export default HomePage;
