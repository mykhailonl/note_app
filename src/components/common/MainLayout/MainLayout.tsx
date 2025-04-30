import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <main className="h-screen w-screen bg-neutral-100">{children}</main>;
};

export default MainLayout;
