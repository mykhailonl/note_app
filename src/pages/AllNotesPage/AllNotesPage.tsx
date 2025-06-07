import { NoteList } from '../../components/common/NoteList';
import { NoteStatusNotification } from '../../components/common/NoteStatusNotification';
import { useNotes } from '../../hooks/useNotes.ts';

export const AllNotesPage = () => {
  const { notes } = useNotes();

  const noAvailableNotes = !notes.length;

  if (noAvailableNotes) {
    return <NoteStatusNotification notificationType="noAvailable" />;
  }

  return <NoteList userNotes={notes} />;
};

export default AllNotesPage;
