import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents, SideBarIconName } from '../../../types/Icons/IconsType.ts';
import { SideBarLinkProps } from '../../../types/Links/Links.ts';

export const SideBarLink = ({ href, iconName, altText = '', styles }: SideBarLinkProps) => {
  const renderLink = React.useCallback(
    (isActive: boolean) => {
      const Icon = iconComponents[iconName];
      const IconChevron = iconComponents['chevronRight'];

      const linkTextMap: Record<SideBarIconName, string> = {
        home: 'All Notes',
        archive: 'Archived Notes',
      };

      const displayText = linkTextMap[iconName];

      return (
        <div className={cn('flex items-center justify-center gap-100 self-stretch px-150 py-125')}>
          <div className={isActive ? 'text-tag-icon-bg-active' : 'text-tag-icon-bg'}>
            <Icon className="h-250 w-250" aria-label={altText} />
          </div>

          <span className="text-preset-4 flex grow self-center">{displayText}</span>

          {isActive && <IconChevron className="h-250 w-250" />}
        </div>
      );
    },
    [iconName, altText],
  );

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          styles?.linkStyles,
          isActive ? 'bg-tag-bg-active' : 'bg-tag-bg',
          'focus-visible:shadow-defaultFocus rounded-8 outline-none',
        )
      }
    >
      {({ isActive }) => renderLink(isActive)}
    </NavLink>
  );
};
