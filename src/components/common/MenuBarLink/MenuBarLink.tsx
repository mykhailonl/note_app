import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router';

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

export const MenuBarLink: React.FC<Props> = ({ href, iconName, altText = '', styles }) => {
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
      {({ isActive }) => {
        const Icon = iconComponents[iconName];

        return (
          <div className={isActive ? 'text-blue-500' : 'text-neutral-600'}>
            <Icon className="h-6 w-6" aria-label={altText} />
          </div>
        );
      }}
    </NavLink>
  );
};

export default MenuBarLink;
