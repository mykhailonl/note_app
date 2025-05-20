import { useLocation } from 'react-router-dom';

import { useDevice } from '../../../hooks/useDevice.ts';
import {
  GlobalSettingType,
  HeaderTextMapType,
  ParagraphTextMapType,
  SettingPathType,
} from '../../../types/Settings/Settings.ts';
import { BackButton } from '../BackButton';

export const SettingsHeaderBlock = () => {
  const { isDesktop } = useDevice();
  const location = useLocation();
  const pathSegments = location.pathname.split('/settings/');
  const currentSetting = (pathSegments[1] || '') as SettingPathType;
  const globalSetting = (pathSegments[1] || '') as GlobalSettingType;

  const header_text_map: HeaderTextMapType = {
    'change-password': 'Change Password',
    'color-theme': 'Color Theme',
    'font-theme': 'Font Theme',
  };

  const headerText = currentSetting ? header_text_map[currentSetting] : '';

  const paragraph_text_map: ParagraphTextMapType = {
    'color-theme': 'Choose your color theme:',
    'font-theme': 'Choose your font theme:',
  };

  const pText = globalSetting ? paragraph_text_map[globalSetting] : '';

  return (
    <div className="flex w-full flex-col gap-150">
      {!isDesktop && (
        <BackButton
          styles={{
            iconStyle: 'w-250 h-250',
          }}
          buttonText={'Settings'}
          href={'/settings'}
        />
      )}

      <div className="flex flex-col gap-100">
        <h1 className="text-preset-1 text-text-primary">{headerText}</h1>

        {pText && <p className="text-preset-5 text-tag-text">{pText}</p>}
      </div>
    </div>
  );
};
