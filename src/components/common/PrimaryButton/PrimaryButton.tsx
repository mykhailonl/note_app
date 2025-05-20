import cn from 'classnames';
import React from 'react';

import { Button } from '../../../types/Buttons/Button.ts';

export const PrimaryButton: React.FC<Button> = ({
  buttonText,
  type = 'button',
  onClick,
  disabled = false,
  buttonStyles = {},
  extraSymbol,
  form,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'rounded-8 border border-blue-500 outline-none cursor-pointer',
        buttonStyles,
        disabled
          ? 'border-neutral-100 bg-neutral-100'
          : 'focus-visible:shadow-defaultFocus hover:bg-blue-700',
      )}
      disabled={disabled}
      form={form}
    >
      <span className={cn(disabled && 'text-neutral-300', 'flex', buttonText.styles)}>
        {extraSymbol && <span className="align-text-top">+ </span>}
        {buttonText.textValue}
      </span>
    </button>
  );
};
