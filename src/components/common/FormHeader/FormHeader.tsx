import cn from 'classnames';
import React from 'react';

import { FormHeaderType } from '../../../types/Forms/FormHeader.ts';
import { LogoHeader } from '../LogoHeader';

export const FormHeader: React.FC<FormHeaderType> = ({ styles = {}, textBlock }) => {
  return (
    <header className={cn('flex flex-col gap-y-4', styles)}>
      <LogoHeader styles={{ containerStyles: 'justify-center pb-100 text-text-primary' }} />

      <div className={cn('flex flex-col gap-y-2 text-center', textBlock.styles)}>
        <h1 className={cn('text-preset-1 text-text-primary', textBlock.headerStyles)}>
          {textBlock.headerText}
        </h1>

        <p className={cn('text-preset-5 font-normal text-text-secondary', textBlock.pStyles)}>
          {textBlock.pText}
        </p>
      </div>
    </header>
  );
};

export default FormHeader;
