import { NewNoteButton } from '../../components/common/NewNoteButton';
import { NoteList } from '../../components/common/NoteList';
import { NoteStatusNotification } from '../../components/common/NoteStatusNotification';
import { useNotes } from '../../hooks/useNotes.ts';

export const HomePage = () => {
  const { notes } = useNotes();
  const noAvailableNotes = !notes.length;

  return (
    <>
      <div className="mobile-grid tablet:tablet-grid tablet:py-300 box-border h-full rounded-t-xl py-250">
        <div className="col-span-full flex flex-col items-start gap-200">
          <h1 className="text-preset-1 text-primary self-stretch">All Notes</h1>

          {noAvailableNotes ? (
            <NoteStatusNotification notificationType={'noAvailable'} />
          ) : (
            <NoteList userNotes={notes} />
          )}
        </div>
      </div>

      <NewNoteButton
        iconName={'plus'}
        styles={{
          buttonStyles:
            'fixed z-4 bottom-900 right-200 tablet:right-300 tablet:bottom-1200 outline-none focus-visible:shadow-defaultFocus',
        }}
      />
    </>
  );
};

export default HomePage;
