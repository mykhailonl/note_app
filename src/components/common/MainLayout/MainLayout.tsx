import cn from 'classnames';
import React from 'react';

import { useTheme } from '../../../hooks/useTheme.ts';

// TODO move to layouts?
// TODO change tag from main to smth else?

// TODO remove theme button
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
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
    <main className={cn('h-screen w-screen')}>
      <button onClick={toggleTheme} className="absolute top-4 right-4">
        ☀️
      </button>
      {children}
    </main>
  );
};

export default MainLayout;
