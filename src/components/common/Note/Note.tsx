import cn from 'classnames';
import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ExtendedNoteProps } from '../../../types/Notes/Notes.ts';
import formatDate from '../../../utils/formatDate.ts';
import { NoteTags } from '../NoteTags';

export const Note = ({ note, isActive, fromArchive }: ExtendedNoteProps) => {
  const formattedDate = useMemo(() => formatDate(note.lastEdited), [note]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleNoteClick = () => {
    navigate(`/notes/${note.id}?${searchParams}`, {
      state: { from: fromArchive ? 'archive' : 'all' },
    });
  };

  return (
    <div
      className={cn(
        isActive && 'bg-bg-secondary rounded-6',
        'text-text-primary flex shrink-0 flex-col items-start gap-150 self-stretch p-100',
      )}
      onClick={handleNoteClick}
    >
      <div className="focus-visible:shadow-defaultFocus rounded-8 outline-none">
        <h1 className="text-preset-3 w-full">{note.title}</h1>
      </div>

      <NoteTags tags={note.tags} />

      <span className="text-preset-6">{formattedDate}</span>
    </div>
  );
};
