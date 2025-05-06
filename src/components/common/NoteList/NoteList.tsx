import React from 'react';

import { NoteType } from '../../../types/Notes/NotesType.ts';
import { Note } from '../Note';


type Props = {
  userNotes: NoteType[];
};

export const NoteList: React.FC<Props> = ({ userNotes }) => {
  return (
    <div className="flex flex-col gap-1 self-stretch">
      {userNotes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
