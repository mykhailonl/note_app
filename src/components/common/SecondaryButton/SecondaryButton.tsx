import cn from 'classnames';
import React from 'react';

import { Button } from '../../../types/Buttons/Button.ts';
import { iconComponents } from '../../../types/Icons/icons.ts';

export const SecondaryButton: React.FC<Button> = ({
  buttonText,
  type = 'button',
  onClick,
  buttonStyles = {},
  disabled = false,
  icon,
}) => {
  const Icon = icon && iconComponents[icon.name];

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'hover:border-neutral-300 hover:text-neutral-950',
        buttonStyles,
        'rounded-8 focus:shadow-button-focus border-neutral-100 outline-none',
        disabled
          ? 'border border-neutral-50 bg-neutral-50 text-neutral-300'
          : 'focus:shadow-button-focus hover:bg-neutral-0 border text-neutral-600 focus:border-neutral-950',
      )}
      disabled={disabled}
    >
      {Icon && <Icon className={cn(icon.styles, '')} />}

      <span className={cn('flex', buttonText.styles, '')}>{buttonText.textValue}</span>
    </button>
  );
};
