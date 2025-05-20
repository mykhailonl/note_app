import { SettingsList } from '../../components/common/SettingsList';
import { SETTINGS } from '../../types/Settings/SettingsType.ts';

export const SettingsPage = () => {
  return (
    <div className="bg-primary flex h-full flex-col gap-200 rounded-t-xl px-200 py-300">
      <h1 className="text-preset-1">Settings</h1>

      <div className="flex flex-col gap-100">
        <SettingsList settings={SETTINGS} />
      </div>
    </div>
  );
};

export default SettingsPage;
