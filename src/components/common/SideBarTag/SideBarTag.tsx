import cn from 'classnames';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { SideBarTagProps } from '../../../types/SideBar/SideBar.ts';

// TODO add hover effect

export const SideBarTag = ({ tag, styles, onClick, isActive }: SideBarTagProps) => {
  const Icon = iconComponents['tag'];
  const IconChevron = iconComponents['chevronRight'];

  return (
    <button
      onClick={() => onClick(tag.tagName)}
      className={cn(
        'rounded-8 focus-visible:shadow-defaultFocus flex  cursor-pointer items-center gap-100 self-stretch py-125 outline-none',
        isActive ? 'bg-tag-bg-active' : 'bg-tag-bg',
        styles?.containerStyles,
      )}
    >
      <div className={cn(isActive ? 'text-tag-icon-bg-active' : 'text-tag-icon-bg')}>
        <Icon className={cn('flex h-250 w-250', styles?.iconStyles)} />
      </div>

      <div className="grow self-end">
        <span
          className={cn(
            isActive ? 'text-tag-text-active' : 'text-tag-text',
            'text-preset-4 text-sidebar-text flex',
            styles?.textStyles,
          )}
        >
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
