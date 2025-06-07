import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { BackButtonProps } from '../../../types/Buttons/Button.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';

// todo reformat and maybe add one more parent div with styles to avoid wrapping inside other components

export const BackButton = ({ styles, buttonText, href }: BackButtonProps) => {
  const Icon = iconComponents['leftArrow'];

  return (
    <NavLink to={href} className={cn(styles?.containerStyle, 'flex items-center')}>
      <Icon className={cn(styles?.iconStyle, '')} />
      <span className={cn(styles?.textStyle, 'text-preset-4')}>{buttonText}</span>
    </NavLink>
  );
};
