import React from 'react';

import { SettingsIconName } from '../../../types/Icons/IconsType.ts';
import { Divider } from '../Divider';
import { SettingLink } from '../SettingLink';

type SettingsListProps = {
  settings: Array<{ href: string; iconName: SettingsIconName }>
}

export const SettingsList: React.FC<SettingsListProps> = ({ settings }) => {
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
