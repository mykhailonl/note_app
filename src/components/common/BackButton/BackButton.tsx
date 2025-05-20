import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { BackButtonProps } from '../../../types/Buttons/Button.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';

export const BackButton = ({ styles, buttonText, href }: BackButtonProps) => {
  const Icon = iconComponents['leftArrow'];

  return (
    <NavLink to={href} className={cn(styles?.containerStyle, 'flex items-center gap-100')}>
      <Icon className={cn(styles?.iconStyle, '')} />
      <span className={cn(styles?.textStyle, 'text-preset-4')}>{buttonText}</span>
    </NavLink>
  );
};
