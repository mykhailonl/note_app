import cn from 'classnames';

export const Divider = ({ styles }: { styles?: string }) => {
  return <span className={cn('bg-divider-color h-[1px] shrink-0', styles)} />;
};
