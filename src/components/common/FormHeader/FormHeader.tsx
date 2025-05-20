import cn from 'classnames';

import { FormHeaderType } from '../../../types/Forms/Form.ts';
import { LogoHeader } from '../LogoHeader';

export const FormHeader = ({ styles = '', textBlock }: FormHeaderType) => {
  return (
    <header className={cn('flex flex-col gap-y-4', styles)}>
      <LogoHeader styles={{ containerStyles: 'justify-center pb-100 text-text-primary' }} />

      <div className={cn('flex flex-col gap-y-2 text-center', textBlock.styles)}>
        <h1 className={cn('text-preset-1 text-text-primary', textBlock.headerStyles)}>
          {textBlock.headerText}
        </h1>

        <p className={cn('text-preset-5 text-text-secondary font-normal', textBlock.pStyles)}>
          {textBlock.pText}
        </p>
      </div>
    </header>
  );
};
