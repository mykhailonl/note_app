import { useNavigate } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/icons.ts';

/*
 * TODO add link on logo, change to Link etc,
 *  fix on other pages
 *
 */

export const LogoHeader = () => {
  const Icon = iconComponents['logo'];
  const navigate = useNavigate();

  return (
    <div className="col-span-full flex shrink-0 items-center">
      <Icon className={''} onClick={() => navigate('/')} />
    </div>
  );
};
