import cn from 'classnames';
import React from 'react';

import { useDevice } from '../../../hooks/useDevice.ts';
import { Button } from '../../../types/Buttons/Button.ts';
import { iconComponents, RightSideBarIconName } from '../../../types/Icons/IconsType.ts';

interface BorderButtonProps extends Omit<Button, 'icon'> {
  icon: {
    name: RightSideBarIconName;
    styles?: string;
  };
}

export const BorderButton: React.FC<BorderButtonProps> = ({
  buttonText,
  type = 'button',
  onClick,
  buttonStyles,
  disabled,
  icon,
}) => {
  const { isDesktop } = useDevice();
  const Icon = icon && iconComponents[icon.name];

  const linkTextMap: Record<RightSideBarIconName, string> = {
    archive: 'Archive Notes',
    delete: 'Delete Note',
  };

  const displayText = linkTextMap[icon.name];

  return (
    <button
      type={type}
      className={cn(
        'rounded-8 flex shrink-0 items-center border border-neutral-300 outline-none',
        buttonStyles,
        isDesktop ? 'justify-left px-200 py-150' : 'justify-center',
        disabled
          ? 'border-neutral-50 bg-neutral-50'
          : 'focus:shadow-button-focus hover:bg-neutral-300 focus:border-neutral-950',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (
        <Icon className={cn(icon.styles, isDesktop ? 'h-[20px] w-[20px]' : 'h-[18px] w-[18px]')} />
      )}

      {isDesktop && <span className={cn('flex', buttonText?.styles)}>{displayText}</span>}
    </button>
  );
};

export default BorderButton;
