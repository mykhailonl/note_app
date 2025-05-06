import { SideBarLink } from '../SideBarLink';

export const SideBarPages = () => {
  return (
    <div className="gap-050 flex flex-col">
      <SideBarLink href={'/'} iconName={'home'} altText={'All notes link'} />
      <SideBarLink href={'/archived'} iconName={'archive'} altText={'Archived notes link'} />
    </div>
  );
};

export default SideBarPages;
