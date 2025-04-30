import React from 'react';

import { NoteTagType } from '../../../types/Notes/NotesType.ts';

type Props = {
  tag: NoteTagType;
};

export const NoteTag: React.FC<Props> = ({ tag }) => {
  return (
    <div className="text-preset-6 rounded-4 flex content-center items-center bg-neutral-200 px-[6px] py-[2px] font-sans text-neutral-950">
      {tag}
    </div>
  );
};

export default NoteTag;
