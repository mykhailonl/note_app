import React from 'react';

import { useTheme } from '../../../hooks/useTheme.ts';

type Props = {
  children: React.ReactNode;
};

// todo remove toggle theme button

export const PageWrapper: React.FC<Props> = ({ children }) => {
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
    <div className="flex h-screen">
      <main className="mobile-grid tablet:tablet-grid desktop:desktop-grid gap-x-4 bg-page-bg">
        <div className="rounded-12 bg-bg-primary tablet:col-start-2 tablet:col-end-8 tablet:px-400 desktop:px-600 tablet:py-600 desktop:col-start-4 desktop:col-end-10 col-span-full flex flex-col gap-200 self-center border border-divider-color px-200 py-500">
          <button onClick={toggleTheme} className="absolute top-4 right-4">
            ☀️
          </button>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageWrapper;
