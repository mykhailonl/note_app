import React from 'react';

import { MenuBarLink } from '../MenuBarLink';

const NAV_ITEMS = [
  { href: '/', iconName: 'home' },
  { href: '/search', iconName: 'search' },
  { href: '/archive', iconName: 'archive' },
  { href: '/tags', iconName: 'tag' },
  { href: '/settings', iconName: 'settings' },
] as const;

export const HomeMenuBar = React.memo(() => {
  return (
    <nav className="mobile-grid shadow-menubar bg-neutral-0 fixed bottom-0 left-0 z-2 border-t border-neutral-200">
      <div className="col-span-full flex w-full content-center self-stretch py-150">
        {NAV_ITEMS.map((item) => (
          <MenuBarLink key={item.href} href={item.href} iconName={item.iconName} />
        ))}
      </div>
    </nav>
  );
});

HomeMenuBar.displayName = 'HomeMenuBar';
export default HomeMenuBar;
