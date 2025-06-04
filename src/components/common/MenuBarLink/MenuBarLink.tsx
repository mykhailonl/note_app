import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useIsActiveLink } from '../../../hooks/useIsActiveLink.ts';
import { iconComponents, MenuIconName } from '../../../types/Icons/IconsType.ts';
import { LinkTypes, MenuBarLinkProps } from '../../../types/Links/Links.ts';

export const MenuBarLink = React.memo(
  ({ href, iconName, altText = '', showText = false, styles }: MenuBarLinkProps) => {
    const isActive = useIsActiveLink(href as LinkTypes);

    const renderLink = React.useCallback(() => {
      const Icon = iconComponents[iconName];

      const linkTextMap: Record<MenuIconName, string> = {
        home: 'Home',
        search: 'Search',
        archive: 'Archived',
        tag: 'Tags',
        settings: 'Settings',
      };

      const displayText = linkTextMap[iconName];

      return (
        <div
          className={cn(
            'gap-050 flex flex-col items-center',
            isActive ? 'text-blue-500' : 'text-secondaryButton-text',
          )}
        >
          <Icon className="h-6 w-6" aria-label={altText} />
          {showText && <span className="text-preset-6">{displayText}</span>}
        </div>
      );
    }, [iconName, altText, showText, isActive]);

    return (
      <NavLink
        to={href}
        className={cn(
          'rounded-4 gap-050 py-050 tablet:grow-0 tablet:w-1000 focus-visible:shadow-defaultFocus flex grow flex-col items-center justify-center outline-none',
          styles?.linkStyles,
          isActive ? 'bg-secondaryButton-bg-active' : '',
        )}
      >
        {renderLink}
      </NavLink>
    );
  },
);

MenuBarLink.displayName = 'MenuBarLink';
