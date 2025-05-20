import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

import { LogoHeaderProps } from '../../../types/Header/Header.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';

export const LogoHeader = ({ styles }: LogoHeaderProps) => {
  const Icon = iconComponents['logo'];
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        styles?.containerStyles,
        'col-span-full flex shrink-0 cursor-pointer items-center',
      )}
    >
      <Icon className={cn(styles?.iconStyles, '')} onClick={() => navigate('/')} />
    </div>
  );
};
