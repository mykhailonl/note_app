import React from 'react';

import { SettingsListProps } from '../../../types/Settings/Settings.ts';
import { Divider } from '../Divider';
import { SettingLink } from '../SettingLink';

export const SettingsList = ({ settings }: SettingsListProps) => {
  return (
    <>
      {settings.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === settings.length - 1 && <Divider styles={'w-full w-[1px]'} />}

          <SettingLink href={`/settings/${item.href}`} iconName={item.iconName} />
        </React.Fragment>
      ))}
    </>
  );
};
