import React from 'react';

import { IconName } from '../Icons/IconsType.ts';

export interface Button {
  buttonText: {
    textValue: string;
    styles?: string;
  };
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyles?: string;
  disabled?: boolean;
  extraSymbol?: boolean;
  icon?: {
    name: IconName;
    styles?: string;
  };
}
