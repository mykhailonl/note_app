import cn from 'classnames';
import React from 'react';

import { Button } from '../../../types/Buttons/Button.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';

// TODO check all colors on hover/active etc light and dark theme
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
        'hover:border-secondaryButton-hoverBorder hover:text-text-primary cursor-pointer',
        buttonStyles,
        'rounded-8 focus-visible:shadow-button-focus border-secondaryButton-bg bg-secondaryButton-bg outline-none',
        disabled
          ? 'border-secondaryButton-disabledBorder bg-input-disabled text-input-textDisabled border'
          : 'focus-visible:shadow-button-focus hover:bg-bg-primary text-secondaryButton-text border focus-visible:border-neutral-950',
      )}
      disabled={disabled}
    >
      {Icon && <Icon className={cn(icon.styles, '')} />}

      <span className={cn('flex', buttonText.styles, '')}>{buttonText.textValue}</span>
    </button>
  );
};
