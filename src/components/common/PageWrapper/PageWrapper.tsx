import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <main className="mobile-grid tablet:tablet-grid desktop:desktop-grid gap-x-4 bg-neutral-100">
        <div className="rounded-12 bg-neutral-0 tablet:col-start-2 tablet:col-end-8 tablet:px-400 desktop:px-600 tablet:py-600 desktop:col-start-4 desktop:col-end-10 col-span-full flex flex-col gap-200 self-center border border-neutral-200 px-200 py-500">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageWrapper;
