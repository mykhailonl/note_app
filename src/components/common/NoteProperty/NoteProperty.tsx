import cn from 'classnames';
import React from 'react';

import { useDevice } from '../../../hooks/useDevice.ts';
import { iconComponents, IconName } from '../../../types/Icons/IconsType.ts';
import { NoteTagType } from '../../../types/Notes/NotesType.ts';

type Props = {
  iconName: IconName;
  tags?: NoteTagType;
  lastEdited?: string;
};

export const NoteProperty: React.FC<Props> = ({ tags, lastEdited, iconName }) => {
  const { isMobile, isTablet } = useDevice();
  const Icon = iconComponents[iconName];

  return (
    <div
      className={cn(
        'flex grow items-center gap-100',
        isMobile && 'text-preset-6',
        isTablet && 'text-preset-5',
      )}
    >
      <div className="gap-075 py-050 text-text-secondary flex min-w-[115px] grow items-center">
        <Icon className="h-4 w-4" />

        <span className="">{tags ? 'Tags' : 'Last edited'}</span>
      </div>

      <div className={cn('grow', tags ? 'text-text-primary' : 'text-text-secondary')}>
        {tags ? tags : lastEdited}
      </div>
    </div>
  );
};

export default NoteProperty;
