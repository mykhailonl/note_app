import React from 'react';

type Props = {
  children: React.ReactNode;
  formAction: () => void;
};

// TODO check formAction TYPE

export const PageFormWrapper: React.FC<Props> = ({ children, formAction }) => {
  return (
    <form action={formAction} className="flex flex-col gap-200 pt-300">
      {children}
    </form>
  );
};
