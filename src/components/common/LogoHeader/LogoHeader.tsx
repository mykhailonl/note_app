import cn from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/IconsType.ts';

/*
 * TODO add link on logo, change to Link etc,
 *  fix on other pages
 *
 */

type Props = {
  styles?: {
    containerStyles?: string;
    iconStyles?: string;
  };
};

export const LogoHeader: React.FC<Props> = ({ styles }) => {
  const Icon = iconComponents['logo'];
  const navigate = useNavigate();

  return (
    <div className={cn(styles?.containerStyles, 'col-span-full flex shrink-0 items-center')}>
      <Icon className={cn(styles?.iconStyles, '')} onClick={() => navigate('/')} />
    </div>
  );
};
