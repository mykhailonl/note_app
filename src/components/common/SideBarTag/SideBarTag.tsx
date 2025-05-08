import cn from 'classnames';
import React from 'react';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { NoteTagType } from '../../../types/Notes/NotesType.ts';

type Props = {
  tag: {
    tagName: NoteTagType;
  };
  styles?: {
    containerStyles?: string;
    iconStyles?: string;
    textStyles?: string;
  };
  onClick: (t: NoteTagType) => void;
  isActive: boolean;
};

// TOD) add hover effect, change pointer?

export const SideBarTag: React.FC<Props> = ({ tag, styles, onClick, isActive }) => {
  const Icon = iconComponents['tag'];
  const IconChevron = iconComponents['chevronRight'];

  return (
    <button
      onClick={() => onClick(tag.tagName)}
      className={cn(
        'rounded-8 flex w-[240px] items-center gap-100 self-stretch px-150 py-125',
        isActive ? 'bg-neutral-100' : 'bg-neutral-0',
        styles?.containerStyles,
      )}
    >
      <div className={cn(isActive ? 'text-blue-500' : 'text-neutral-700')}>
        <Icon className={cn('flex h-250 w-250', styles?.iconStyles)} />
      </div>

      <div className="grow self-end">
        <span className={cn('text-preset-4 flex text-neutral-700', styles?.textStyles)}>
          {tag.tagName}
        </span>
      </div>

      {isActive && (
        <div className="text-neutral-700">
          <IconChevron className="flex h-250 w-250" />
        </div>
      )}
    </button>
  );
};

export default SideBarTag;
