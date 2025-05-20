import cn from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';

import { NoteType } from '../../../types/Notes/NotesType.ts';
import { Divider } from '../Divider';
import { Note } from '../Note';

type Props = {
  userNotes: NoteType[];
  styles?: {
    containerStyles?: string;
  };
};

export const NoteList = ({ userNotes, styles }: Props) => {
  const { noteId } = useParams();

  return (
    <div className={cn('flex flex-col self-stretch gap-1', styles?.containerStyles)}>
      {userNotes.map((note, index) => {
        const isActive = noteId ? +noteId === note.id : false;
        const isNextActive = noteId ? +noteId === note.id + 1 : false;
        const showDivider = index < userNotes.length - 1 && !isActive && !isNextActive;

        return (
          <React.Fragment key={note.id}>
            <Note note={note} isActive={isActive} />

            {showDivider ? <Divider /> : <Divider styles={'bg-transparent'} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
