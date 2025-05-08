import cn from 'classnames';
import React from 'react';

type Props = {
  styles?: string;
};

export const Divider: React.FC<Props> = ({ styles }) => {
  return <span className={cn('shrink-0 h-[1px] bg-neutral-200', styles)} />;
};

export default Divider;
