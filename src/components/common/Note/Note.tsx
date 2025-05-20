import cn from 'classnames';
import { useMemo } from 'react';
import { NavLink } from 'react-router';

import { NoteType } from '../../../types/Notes/NotesType.ts';
import formatDate from '../../../utils/formatDate.ts';
import { NoteTags } from '../NoteTags';

export const Note = ({ note, isActive }: { note: NoteType; isActive: boolean }) => {
  const formattedDate = useMemo(() => formatDate(note.lastEdited), [note]);

  const handleNoteClick = () => {};

  return (
    <div
      className={cn(
        isActive && 'bg-bg-secondary rounded-6',
        'text-text-primary flex shrink-0 flex-col items-start gap-150 self-stretch p-100',
      )}
      onClick={handleNoteClick}
    >
      <NavLink
        to={`notes/${note.id}`}
        className="focus-visible:shadow-defaultFocus rounded-8 outline-none"
      >
        <h1 className="text-preset-3 w-full">{note.title}</h1>
      </NavLink>

      <NoteTags tags={note.tags} />

      <span className="text-preset-6">{formattedDate}</span>
    </div>
  );
};

export default Note;
