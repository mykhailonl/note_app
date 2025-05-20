import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents, MenuIconName } from '../../../types/Icons/IconsType.ts';

type Props = {
  href: string;
  iconName: MenuIconName;
  altText?: string;
  showText?: boolean;
  styles?: {
    linkStyles?: string;
    imgStyles?: string;
  };
};

// TODO style pending state too

export const MenuBarLink: React.FC<Props> = React.memo(
  ({ href, iconName, altText = '', showText = false, styles }) => {
    const renderLink = React.useCallback(
      ({ isActive }: { isActive: boolean; isPending: boolean }) => {
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
      },
      [iconName, altText, showText],
    );

    return (
      <NavLink
        to={href}
        className={({ isActive, isPending }) =>
          cn(
            'rounded-4 gap-050 py-050 tablet:grow-0 tablet:w-1000 focus-visible:shadow-defaultFocus flex grow flex-col items-center justify-center outline-none',
            styles?.linkStyles,
            isPending ? 'pending' : isActive ? 'bg-secondaryButton-bg-active' : '',
          )
        }
      >
        {renderLink}
      </NavLink>
    );
  },
);

MenuBarLink.displayName = 'MenuBarLink';
export default MenuBarLink;
