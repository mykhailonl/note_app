import React from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';

import { iconComponents, IconName } from '../../../types/Icons/icons';

type Props = {
  href: string;
  iconName: IconName;
  altText?: string;
  styles?: {
    linkStyles?: string;
    imgStyles?: string;
  };
};

// TODO style pending state too

export const MenuBarLink: React.FC<Props> = React.memo(
  ({ href, iconName, altText = '', styles }) => {
    const renderLink = React.useCallback(
      ({ isActive }: { isActive: boolean; isPending: boolean }) => {
        const Icon = iconComponents[iconName];
        return (
          <div className={isActive ? 'text-blue-500' : 'text-neutral-600'}>
            <Icon className="h-6 w-6" aria-label={altText} />
          </div>
        );
      },
      [iconName, altText],
    );

    return (
      <NavLink
        to={href}
        className={({ isActive, isPending }) =>
          cn(
            'rounded-4 py-050 flex grow items-center justify-center',
            styles?.linkStyles,
            isPending ? 'pending' : isActive ? 'bg-blue-50' : '',
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
