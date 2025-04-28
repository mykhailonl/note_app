import React from 'react';
import cn from 'classnames';

import { Button } from '../../../types/Buttons/Button.ts';

export const SecondaryButton: React.FC<Button> = ({
  buttonText,
  type = 'button',
  onClick,
  buttonStyles = {},
  disabled = false,
  img,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'rounded-8 text-preset-3 focus:shadow-button-focus flex content-center items-center justify-center border border-neutral-300 px-200 py-150 text-neutral-950 hover:bg-neutral-100',
        buttonStyles,
      )}
      disabled={disabled}
    >
      <img src={img?.src} alt={img?.altText} className={cn('flex', img?.styles)} />

      <span className={cn('flex px-200', buttonText.styles)}>{buttonText.textValue}</span>
    </button>
  );
};
