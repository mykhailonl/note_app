import cn from 'classnames';

import { NewNoteButtonProps } from '../../../types/Buttons/Button.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';

export const NewNoteButton = ({ iconName, styles }: NewNoteButtonProps) => {
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
