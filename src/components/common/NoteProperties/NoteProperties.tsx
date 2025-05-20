import React, { useMemo } from 'react';

import { NotePropertiesProps } from '../../../types/Notes/Notes.ts';
import formatDate from '../../../utils/formatDate.ts';
import { NoteProperty } from '../NoteProperty';

// TODO check if memo is right

export const NoteProperties: React.FC<NotePropertiesProps> = ({ tags, lastEdited }) => {
  const formattedTags = useMemo(() => tags.join(', '), [tags]);
  const formattedDate = useMemo(() => formatDate(lastEdited), [lastEdited]);

  return (
    <div className="gap-050 tablet:gap-100 flex flex-col items-start self-stretch">
      <NoteProperty tags={formattedTags} iconName={'tag'} />

      <NoteProperty lastEdited={formattedDate} iconName={'clock'} />
    </div>
  );
};
