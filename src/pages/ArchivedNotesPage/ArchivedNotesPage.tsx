import { NoteList } from '../../components/common/NoteList';
import { NoteStatusNotification } from '../../components/common/NoteStatusNotification';
import { useNotes } from '../../hooks/useNotes.ts';

export const ArchivedNotesPage = () => {
  const { filterNotes } = useNotes();

  const notesToDisplay = filterNotes({ archivedNotes: true });

  return (
    <div className="flex flex-col gap-200 self-stretch">
      <p className="text-preset-5 text-text-tertiary">
        All your archived notes are stored here. You can restore or delete them anytime.
      </p>

      {notesToDisplay.length ? (
        <NoteList userNotes={notesToDisplay} />
      ) : (
        <NoteStatusNotification notificationType="noArchived" />
      )}
    </div>
  );
};

export default ArchivedNotesPage;
