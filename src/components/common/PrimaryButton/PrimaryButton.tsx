import cn from 'classnames';

import { Button } from '../../../types/Buttons/Button.ts';

export const PrimaryButton = ({
  buttonText,
  type = 'button',
  onClick,
  disabled = false,
  buttonStyles = '',
  extraSymbol,
  form,
}: Button) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'rounded-8 border outline-none',
        disabled
          ? 'bg-primaryButton-disabled border-primaryButton-disabled cursor-not-allowed'
          : 'focus-visible:shadow-defaultFocus cursor-pointer border-blue-500 hover:bg-blue-700',
        buttonStyles,
      )}
      disabled={disabled}
      form={form}
    >
      <span
        className={cn(disabled && 'text-primaryButton-disabledText', 'flex', buttonText.styles)}
      >
        {extraSymbol && <span className="align-text-top">+ </span>}
        {buttonText.textValue}
      </span>
    </button>
  );
};
