import cn from 'classnames';
import React from 'react';

import { useTheme } from '../hooks/useTheme.ts';

// TODO change tag from div to smth else?
// todo remove theme button

export const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const { updateColorTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('colorTheme') || 'lightTheme';

    if (currentTheme === 'lightTheme') {
      updateColorTheme('darkTheme');
    }

    if (currentTheme === 'darkTheme') {
      updateColorTheme('lightTheme');
    }
  };

  return (
    <div className={cn('flex h-screen w-screen overflow-hidden')}>
      <button onClick={toggleTheme} className="absolute top-4 right-4">
        ☀️
      </button>
      {children}
    </div>
  );
};

export default DesktopLayout;
