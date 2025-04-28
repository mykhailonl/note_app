import React from 'react';
import cn from 'classnames';

import { LogoHeader } from '../LogoHeader';

import { FormHeaderType } from '../../../types/Forms/FormHeader.ts';

export const FormHeader: React.FC<FormHeaderType> = ({ styles = {}, textBlock }) => {
  return (
    <header className={cn('flex flex-col gap-y-4', styles)}>
      <LogoHeader />

      <div className={cn('flex flex-col gap-y-2 text-center', textBlock.styles)}>
        <h1 className={cn('text-preset-1 font-sans text-neutral-950', textBlock.headerStyles)}>
          {textBlock.headerText}
        </h1>

        <p className={cn('text-preset-5 font-normal text-neutral-600', textBlock.pStyles)}>
          {textBlock.pText}
        </p>
      </div>
    </header>
  );
};
