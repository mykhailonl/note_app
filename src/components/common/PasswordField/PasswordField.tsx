import React, { useState } from 'react';
import cn from 'classnames';

import { PasswordFieldProps } from '../../../types/PasswordInput/PasswordFieldProps.ts';

// TODO validationError styling
// TODO change a links
// TODO change img to svg

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChange,
  // validationError,
  styles = {},
  uiOptions = {},
  inputProps,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={cn('gap-075 flex flex-col font-sans', styles?.container)}>
      <div className="flex items-start gap-100 self-stretch">
        <label
          htmlFor="password"
          className={cn('text-preset-4 flex flex-1 text-neutral-950', styles?.label)}
        >
          {label}
        </label>

        {uiOptions?.showForgotLink && (
          <a className="text-preset-6 text-right text-neutral-600 underline">Forgot</a>
        )}
      </div>

      <div className="relative flex items-center gap-250">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={value}
          onChange={handlePasswordChange}
          className={cn(
            'rounded-8 text-preset-5 bg-neutral-0 focus:shadow-input-focus flex flex-1 border border-neutral-300 px-600 py-150 text-neutral-500 hover:bg-neutral-50',
            styles?.input,
          )}
          {...inputProps}
        />

        {uiOptions?.showToggle !== false && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={cn(
              'absolute top-1/2 right-3 flex -translate-y-1/2 transform',
              styles?.toggle,
            )}
          >
            <img
              src={
                showPassword
                  ? './src/assets/images/icon-hide-password.svg'
                  : './src/assets/images/icon-show-password.svg'
              }
              alt="Show/Hide password"
            />
          </button>
        )}
      </div>

      {uiOptions?.hint && (
        <div className={cn('flex flex-row items-center gap-100 self-stretch', styles?.hint)}>
          <img
            src={'./src/assets/images/icon-info.svg'}
            alt={'Password hint'}
            className={'h-200 w-200'}
          />

          <span className={'text-preset-4 font-sans text-neutral-600'}>{uiOptions.hint}</span>
        </div>
      )}
    </div>
  );
};
