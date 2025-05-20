import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents, SideBarIconName } from '../../../types/Icons/IconsType.ts';

type Props = {
  href: string;
  iconName: SideBarIconName;
  altText?: string;
  styles?: {
    linkStyles?: string;
    ingStyles?: string;
  };
};

export const SideBarLink: React.FC<Props> = ({ href, iconName, altText = '', styles }) => {
  const renderLink = React.useCallback(
    ({ isActive }: { isActive: boolean; isPending: boolean }) => {
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
      {renderLink}
    </NavLink>
  );
};

export default SideBarLink;
