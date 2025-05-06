import React, { useMemo } from 'react';

import { NoteProperty } from '../NoteProperty';

import formatDate from '../../../utils/formatDate.ts';

import { NoteTagType } from '../../../types/Notes/NotesType.ts';

type Props = {
  tags: NoteTagType[];
  lastEdited: string;
};

// TODO check if memo is right

export const NoteProperties: React.FC<Props> = ({ tags, lastEdited }) => {
  const formattedTags = useMemo(() => tags.join(', '), [tags]);
  const formattedDate = useMemo(() => formatDate(lastEdited), [lastEdited]);

  return (
    <div className="gap-050 tablet:gap-100 flex flex-col items-start self-stretch">
      <NoteProperty tags={formattedTags} iconName={'tag'} />

      <NoteProperty lastEdited={formattedDate} iconName={'clock'} />
    </div>
  );
};

export default NoteProperties;
