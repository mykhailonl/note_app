import React from 'react';
import cn from 'classnames';

import { Button } from '../../../types/Buttons/Button.ts';

export const PrimaryButton: React.FC<Button> = ({
  buttonText,
  type = 'button',
  onClick,
  disabled = false,
  buttonStyles = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'rounded-8 focus:shadow-primarybutton-focus bg-blue-500 px-200 py-150 hover:bg-blue-700 focus:bg-blue-500',
        buttonStyles,
      )}
      disabled={disabled}
    >
      <span className={cn('text-neutral-0 text-preset-3', buttonText.styles)}>
        {buttonText.textValue}
      </span>
    </button>
  );
};
