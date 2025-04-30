import { MenuBarLink } from '../MenuBarLink';

// TODO set hrefs for each link
export const HomeMenuBar = () => {
  return (
    <nav className="mobile-grid shadow-menubar bg-neutral-0 fixed bottom-0 left-0 z-2 border-t border-neutral-200">
      <div className="col-span-full flex w-full content-center self-stretch py-150">
        <MenuBarLink href={'/'} iconName={'home'} />
        <MenuBarLink href={'/search'} iconName={'search'} />
        <MenuBarLink href={'/archive'} iconName={'archive'} />
        <MenuBarLink href={'/tags'} iconName={'tag'} />
        <MenuBarLink href={'/settings'} iconName={'settings'} />
      </div>
    </nav>
  );
};

export default HomeMenuBar;
