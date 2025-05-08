import React from 'react';

type Props = {
  children: React.ReactNode;
};

// TODO change tag from div to smth else?

export const DesktopLayout: React.FC<Props> = ({ children }) => {
  return <div className="bg-neutral-0 flex h-screen w-screen overflow-hidden">{children}</div>;
};

export default DesktopLayout;
