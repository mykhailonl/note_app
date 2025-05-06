import React from 'react';

type Props = {
  children: React.ReactNode;
};

// TODO move to layouts?
// TODO change tag from main to smth else?

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <main className="h-screen w-screen bg-neutral-100">{children}</main>;
};

export default MainLayout;
