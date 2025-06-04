import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useIsActiveLink } from '../../../hooks/useIsActiveLink.ts';
import { iconComponents, SideBarIconName } from '../../../types/Icons/IconsType.ts';
import { LinkTypes, SideBarLinkProps } from '../../../types/Links/Links.ts';

export const SideBarLink = ({ href, iconName, altText = '', styles }: SideBarLinkProps) => {
  const isActive = useIsActiveLink(href as LinkTypes);

  const renderLink = React.useCallback(() => {
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
  }, [iconName, altText, isActive]);

  return (
    <NavLink
      to={href}
      className={cn(
        styles?.linkStyles,
        isActive ? 'bg-tag-bg-active' : 'bg-tag-bg',
        'focus-visible:shadow-defaultFocus rounded-8 outline-none',
      )}
    >
      {renderLink}
    </NavLink>
  );
};
