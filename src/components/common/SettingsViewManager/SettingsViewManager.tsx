import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';

export const SettingsViewManager = () => {
  const { pathname } = useLocation();

  const currentSetting = pathname.split('/settings/')[1];

  return (
    <div className="flex flex-1 grow">
      {currentSetting && (
        <div className="mt-400 ml-400 w-[528px]">
          <Outlet />
        </div>
      )}
    </div>
  );
};
