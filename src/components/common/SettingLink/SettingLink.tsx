import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents, SettingsIconName } from '../../../types/Icons/IconsType.ts';

type Props = {
  href: string;
  iconName: SettingsIconName;
};

export const SettingLink: React.FC<Props> = ({ href, iconName }) => {
  const renderLink = React.useCallback(
    ({ isActive }: { isActive: boolean; isPending: boolean }) => {
      const Icon = iconComponents[iconName];
      const IconChevron = iconComponents['chevronRight'];

      const linkTextMap: Record<SettingsIconName, string> = {
        lightTheme: 'Color theme',
        font: 'Font theme',
        lock: 'Change Password',
        logout: 'Logout',
      };

      const displayText = linkTextMap[iconName];

      return (
        <div className={cn('box-border flex items-center gap-100')}>
          <Icon className="h-5 w-5" aria-label={`${displayText} setting`} />
          <p className="text-preset-4 flex grow self-center">{displayText}</p>

          {isActive && <IconChevron className="h-250 w-250" />}
        </div>
      );
    },
    [iconName],
  );

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          isActive ? 'bg-bg-secondary text-text-primary' : 'bg-primary text-tag-text',
          'rounded-6 box-border p-100',
          'focus-visible:shadow-defaultFocus outline-none',
        )
      }
    >
      {renderLink}
    </NavLink>
  );
};

SettingLink.displayName = 'SettingLink';
export default SettingLink;
