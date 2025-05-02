import React from 'react';

import { iconComponents, IconName } from '../../../types/Icons/icons.ts';

// TODO check types, esp func
type Props = {
  iconName: IconName;
  onClick: () => void;
};

export const HeaderButton: React.FC<Props> = ({ iconName, onClick }) => {
  const Icon = iconComponents[iconName];

  return (
    <button className="flex items-center justify-center text-neutral-600" onClick={onClick}>
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
};

export default HeaderButton;
