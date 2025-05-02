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
      className={cn('rounded-8', buttonStyles)}
      disabled={disabled}
    >
      <span className={cn('', buttonText.styles)}>{buttonText.textValue}</span>
    </button>
  );
};
