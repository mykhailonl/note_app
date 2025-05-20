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
        'rounded-8 flex w-[240px] items-center gap-100 self-stretch px-150 py-125 outline-none focus-visible:shadow-defaultFocus',
        isActive ? 'bg-tag-bg-active' : 'bg-tag-bg',
        styles?.containerStyles,
      )}
    >
      <div className={cn(isActive ? 'text-tag-icon-bg-active' : 'text-tag-icon-bg')}>
        <Icon className={cn('flex h-250 w-250', styles?.iconStyles)} />
      </div>

      <div className="grow self-end">
        <span className={cn(
          isActive ? 'text-tag-text-active' : 'text-tag-text',
          'text-preset-4 flex text-sidebar-text', styles?.textStyles)}>
          {tag.tagName}
        </span>
      </div>

      {isActive && (
        <div className="text-sidebar-text">
          <IconChevron className="flex h-250 w-250" />
        </div>
      )}
    </button>
  );
};

export default SideBarTag;
