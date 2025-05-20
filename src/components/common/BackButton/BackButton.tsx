import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/IconsType.ts';

type BackButtonProps = {
  styles?: {
    containerStyle?: string;
    iconStyle?: string;
    textStyle?: string;
  };
  buttonText?: string;
  href: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ styles, buttonText, href }) => {
  const Icon = iconComponents['leftArrow'];

  return (
    <NavLink
      to={href}
      className={cn(styles?.containerStyle, 'flex items-center gap-100')}
    >
      <Icon className={cn(styles?.iconStyle, '')} />
      <span className={cn(styles?.textStyle, 'text-preset-4')}>{buttonText}</span>
    </NavLink>
  );
};
