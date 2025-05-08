import cn from 'classnames';
import React from 'react';

import { NoteType } from '../../../types/Notes/NotesType.ts';
import { Note } from '../Note';

type Props = {
  userNotes: NoteType[];
  styles?: {
    containerStyles?: string;
  }
};

export const NoteList: React.FC<Props> = ({ userNotes, styles }) => {
  return (
    <div className={cn("flex flex-col gap-1 self-stretch", styles?.containerStyles)}>
      {userNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
