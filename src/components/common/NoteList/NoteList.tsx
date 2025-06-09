import cn from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ExtendedNoteListProps } from '../../../types/Notes/Notes.ts';
import { Divider } from '../Divider';
import { Note } from '../Note';

export const NoteList = ({ userNotes, styles, fromArchive }: ExtendedNoteListProps) => {
  const { noteId } = useParams();

  return (
    <div className={cn('flex grow flex-col gap-1 self-stretch', styles?.containerStyles)}>
      {userNotes.map((note, index) => {
        const isActive = noteId ? +noteId === note.id : false;
        const isNextActive = noteId ? +noteId === note.id + 1 : false;
        const showDivider = index < userNotes.length - 1 && !isActive && !isNextActive;

        return (
          <React.Fragment key={note.id}>
            <Note note={note} isActive={isActive} fromArchive={fromArchive} />

            {showDivider ? <Divider /> : <Divider styles={'bg-transparent'} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
