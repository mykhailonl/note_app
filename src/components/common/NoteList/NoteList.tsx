import React from 'react';

import { Note } from '../Note';

import { NoteType } from '../../../types/Notes/NotesType.ts';

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
