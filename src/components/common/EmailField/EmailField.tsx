import cn from 'classnames';
import React from 'react';


import { EmailInputType } from '../../../types/EmailInput/EmailInputType.ts';

export const EmailField: React.FC<EmailInputType> = ({ styles, label, input }) => {
  return (
    <div className={cn('gap-075 flex flex-col', styles?.container)}>
      <div className="flex items-start gap-100 self-stretch">
        <label
          htmlFor={label.labelFor}
          className={cn('text-preset-4 flex flex-1 text-neutral-950', styles?.label)}
        >
          {label.labelText}
        </label>
      </div>

      <input
        type={input.type}
        id={input.type}
        name={input.type}
        placeholder="email@example.com"
        value={input.value}
        onChange={input.onChange}
        className={cn(
          'rounded-8 text-preset-5 bg-neutral-0 focus:shadow-input-focus flex items-center border border-neutral-300 px-200 py-150 text-neutral-500 hover:bg-neutral-50',
          styles?.input,
        )}
      />
    </div>
  );
};
