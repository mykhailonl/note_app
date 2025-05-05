import React from 'react';
import cn from 'classnames';

import { iconComponents, IconName } from '../../../types/Icons/icons.ts';

type Props = {
  iconName: IconName;
  styles?: {
    buttonStyles?: string;
    iconStyles?: string;
  };
};

export const NewNoteButton: React.FC<Props> = ({ iconName, styles }) => {
  const Icon = iconComponents[iconName];

  return (
    <button
      className={cn(
        'text-neutral-0 flex shrink-0 content-center items-center rounded-full bg-blue-500',
        styles?.buttonStyles,
      )}
    >
      <Icon className={cn('tablet:m-200 m-100 h-400 w-400', styles?.iconStyles)} />
    </button>
  );
};

export default NewNoteButton;
