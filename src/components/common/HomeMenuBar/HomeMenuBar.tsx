import React from 'react';

import { useDevice } from '../../../hooks/useDevice.ts';
import { Divider } from '../Divider';
import { MenuBarLink } from '../MenuBarLink';

const NAV_ITEMS = [
  { href: '/', iconName: 'home' },
  { href: '/?mode=search', iconName: 'search' },
  { href: '/?mode=archive', iconName: 'archive' },
  { href: '/?mode=tags', iconName: 'tag' },
  { href: '/settings', iconName: 'settings' },
] as const;

// todo create shadow

export const HomeMenuBar = React.memo(() => {
  const { isTablet } = useDevice();
  const showText = isTablet;

  return (
    <nav className="tablet:tablet-grid mobile-grid shadow-menubar bg-bg-primary border-divider-color fixed bottom-0 left-0 z-2 border-t">
      <div className="tablet:justify-between col-span-full flex w-full content-center self-stretch py-150">
        {NAV_ITEMS.map((item, index) => (
          <React.Fragment key={item.href}>
            <MenuBarLink href={item.href} iconName={item.iconName} showText={showText} />

            {index < NAV_ITEMS.length - 1 && showText && <Divider styles={'h-full w-[1px]'} />}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
});

HomeMenuBar.displayName = 'HomeMenuBar';
