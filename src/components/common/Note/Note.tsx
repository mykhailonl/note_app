import React from 'react';

import { NoteTags } from '../NoteTags';
import { Divider } from '../Divider';

import formatDate from '../../../utils/formatDate.ts';

import { NoteType } from '../../../types/Notes/NotesType.ts';

type Props = {
  note: NoteType;
};

// TODO move Divider from Note to map in NoteList
export const Note: React.FC<Props> = ({ note }) => {
  // TODO memo formatted date
  const formattedDate = formatDate(note.lastEdited);

  return (
    <>
      <div className="flex flex-col items-start gap-150 self-stretch p-100">
        <h1 className="text-preset-3 font-sans text-neutral-950">{note.title}</h1>

        <NoteTags tags={note.tags} />

        <span className="text-preset-6 text-neutral-950">{formattedDate}</span>
      </div>

      <Divider />
    </>
  );
};

export default Note;
