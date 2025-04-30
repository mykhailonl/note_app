import React from 'react';

import { NoteTag } from '../NoteTag';

import { NoteTagType } from '../../../types/Notes/NotesType.ts';

type Props = {
  tags: NoteTagType[];
};

export const NoteTags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap content-center items-center gap-1 self-stretch">
      {tags.map((tag) => (
        <NoteTag tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default NoteTags;
