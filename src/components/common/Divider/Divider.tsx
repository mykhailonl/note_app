import React from 'react';
import cn from 'classnames';

type Props = {
  styles?: string;
};

export const Divider: React.FC<Props> = ({ styles }) => {
  return <span className={cn('h-[1px] bg-neutral-200', styles)} />;
};

export default Divider;
