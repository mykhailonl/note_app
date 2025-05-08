import cn from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { InputFieldType } from '../../../types/Input/InputFieldType.ts';

export const InputField: React.FC<InputFieldType> = ({
  containerStyles,
  label,
  input,
  hint,
  validation,
}) => {
  //#region conditions
  const showLeftInputIcon = input.inputIconShown === 'left' || input.inputIconShown === 'both';
  const showRightInputIcon = input.inputIconShown === 'right' || input.inputIconShown === 'both';
  //#endregion

  //#region states
  const [showInput, setShowInput] = useState(false);
  //#endregion

  //#region handlers
  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };
  //#endregion

  //#region icons
  const IconShowInput = iconComponents['show'];
  const IconHideInput = iconComponents['hide'];
  const IconInfo = iconComponents['info'];
  //#endregion

  return (
    <div className={cn(containerStyles, 'gap-075 flex flex-col')}>
      <div className="flex items-center gap-100">
        <label
          htmlFor={input.type}
          className={cn(label.labelStyles, 'text-preset-4 grow text-neutral-950')}
        >
          {label.labelText}
        </label>

        {label.labelForgotShown && (
          <NavLink to={'../forgot'} className="text-preset-6 text-neutral-600 underline">
            Forgot
          </NavLink>
        )}
      </div>

      <div
        className={cn(
          input.inputContainerStyles,
          'rounded-8 focus-within:shadow-input-focus flex items-center gap-100 border px-200 py-150 focus-within:border-neutral-950 hover:bg-neutral-50',
          input.disabled ? 'bg-neutral-50 text-neutral-300' : 'bg-neutral-0',
          validation.error ? 'border-red-500' : 'border-neutral-300',
        )}
      >
        {showLeftInputIcon && (
          <div className={cn(input.inputIconStyles, 'text-neutral-500')}>
            {!showInput ? (
              <IconShowInput
                onClick={input.disabled ? undefined : toggleInputVisibility}
                className={cn(input.inputIconStyles, 'h-250 w-250')}
              />
            ) : (
              <IconHideInput
                onClick={input.disabled ? undefined : toggleInputVisibility}
                className={cn(input.inputIconStyles, 'h-250 w-250')}
              />
            )}
          </div>
        )}

        <input
          type={showInput ? 'text' : input.type}
          id={input.id ? input.id : input.type}
          name={input.id ? input.id : input.type}
          value={input.value}
          onChange={input.onChange}
          placeholder={input.placeholderText}
          className={cn(
            input.inputTextStyles,
            'text-preset-5 grow outline-none placeholder-shown:text-neutral-500',
          )}
          disabled={input.disabled}
        />

        {showRightInputIcon && (
          <div className={cn(input.inputIconStyles, 'text-neutral-500')}>
            {!showInput ? (
              <IconShowInput
                onClick={input.disabled ? undefined : toggleInputVisibility}
                className={cn(input.inputIconStyles, 'h-250 w-250')}
              />
            ) : (
              <IconHideInput
                onClick={input.disabled ? undefined : toggleInputVisibility}
                className={cn(input.inputIconStyles, 'h-250 w-250')}
              />
            )}
          </div>
        )}
      </div>

      {hint.hintShown && (
        <div
          className={cn(
            hint.hintContainerStyles,
            'flex items-center gap-100',
            input.disabled
              ? 'text-neutral-300'
              : validation.error
                ? 'text-red-500'
                : 'text-neutral-600',
          )}
        >
          <IconInfo className={cn(hint.hintIconStyles, 'h-200 w-200')} />

          <span className={cn(hint.hintTextStyles, 'text-preset-6')}>{hint.hintText}</span>
        </div>
      )}
    </div>
  );
};
