import { PageFormWrapperProps } from '../../../types/Pages/Page';

// TODO check formAction TYPE

export const PageFormWrapper = ({ children, formAction }: PageFormWrapperProps) => {
  return (
    <form action={formAction} className="flex flex-col gap-200 pt-300">
      {children}
    </form>
  );
};
