import cn from 'classnames';
import React from 'react';

import { iconComponents } from '../../../types/Icons/icons.ts';
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

  return (
    <button
      onClick={() => onClick(tag.tagName)}
      className={cn(
        'rounded-8 flex w-[240px] items-center gap-100 px-150 py-125',
        isActive ? 'bg-neutral-100 text-blue-500' : 'bg-neutral-0 text-neutral-700',
        styles?.containerStyles,
      )}
    >
      <Icon className={cn('h-250 w-250', styles?.iconStyles)} />

      <span className={cn('text-preset-4 self-baseline-last', styles?.textStyles)}>
        {tag.tagName}
      </span>
    </button>
  );
};

export default SideBarTag;
