import { useNavigate, useParams } from 'react-router-dom';

import { NoteHeaderControl } from '../../components/common/NoteHeaderControl';
import { NoteProperties } from '../../components/common/NoteProperties';
import { Divider } from '../../components/common/Divider';

import { useNotes } from '../../hooks/useNotes.ts';

// TODO how to render note body if Ill add an edit functionality

export const NotePage = () => {
  const { noteId } = useParams();
  const { notes } = useNotes();
  const navigate = useNavigate();

  if (!noteId) {
    navigate('/');
    return;
  }

  const currentNote = notes.find((note) => note.id === +noteId);

  if (!currentNote) {
    console.log('Cant find note by ID');

    navigate('/');
    return;
  }

  return (
    <div className="bg-neutral-0 flex flex-col gap-150 px-200 py-250">
      <NoteHeaderControl />

      <h1 className="text-preset-1 font-sans text-neutral-950">{currentNote.title}</h1>

      <NoteProperties tags={currentNote.tags} lastEdited={currentNote.lastEdited} />

      <Divider />

      <div className="whitespace-pre-wrap">{currentNote.content}</div>
    </div>
  );
};

export default NotePage;
