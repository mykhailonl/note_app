import { Divider } from '../Divider';
import { LogoHeader } from '../LogoHeader';
import SideBarPages from '../SideBarPages/SideBarPages.tsx';
import { TagList } from '../TagList';

export const SideBar = () => {
  return (
    <div className="border-divider-color flex flex-col gap-200 border-r px-200 py-150">
      <LogoHeader styles={{ containerStyles: 'py-150' }} />

      <div className="flex flex-col gap-100">
        <SideBarPages />

        <Divider />

        <TagList mode="sidebar"  />
      </div>
    </div>
  );
};
