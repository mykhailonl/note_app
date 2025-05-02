import React from 'react';
import cn from 'classnames';

import { NoteTagType } from '../../../types/Notes/NotesType.ts';
import { iconComponents, IconName } from '../../../types/Icons/icons.ts';

type Props = {
  iconName: IconName;
  tags?: NoteTagType;
  lastEdited?: string;
};

export const NoteProperty: React.FC<Props> = ({ tags, lastEdited, iconName }) => {
  const Icon = iconComponents[iconName];

  return (
    <div className="flex grow items-center gap-100">
      <div className="gap-075 flex min-w-[115px] grow items-center text-neutral-700">
        <Icon className="h-4 w-4" />

        <span className="text-preset-6">{tags ? 'Tags' : 'Last edited'}</span>
      </div>

      <div className={cn('text-preset-6 grow', tags ? 'text-neutral-950' : 'text-neutral-700')}>
        {tags ? tags : lastEdited}
      </div>
    </div>
  );
};

export default NoteProperty;
