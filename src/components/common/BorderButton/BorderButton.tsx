import cn from 'classnames';

import { useDevice } from '../../../hooks/useDevice.ts';
import { BorderButtonProps } from '../../../types/Buttons/Button.ts';
import { iconComponents, RightSideBarIconName } from '../../../types/Icons/IconsType.ts';

export const BorderButton = ({
  type = 'button',
  onClick,
  buttonStyles,
  disabled,
  icon,
}: BorderButtonProps) => {
  const { isDesktop } = useDevice();
  const Icon = icon && iconComponents[icon.name];

  const linkTextMap: Record<RightSideBarIconName, string> = {
    archive: 'Archive Note',
    delete: 'Delete Note',
  };

  const displayText = linkTextMap[icon.name];

  return (
    <button
      type={type}
      className={cn(
        buttonStyles,
        'rounded-8 border-borderButton-borderBg flex shrink-0 items-center border outline-none',
        isDesktop ? 'justify-left px-200 py-150' : 'justify-center',
        disabled
          ? 'border-neutral-50 bg-neutral-50'
          : 'focus-visible:shadow-button-focus hover:bg-borderButton-borderBg focus-visible:border-borderButton-focusBorder',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && (
        <Icon className={cn(icon.styles, isDesktop ? 'h-[20px] w-[20px]' : 'h-[18px] w-[18px]')} />
      )}

      {isDesktop && <span className={cn('text-text-primary flex')}>{displayText}</span>}
    </button>
  );
};
