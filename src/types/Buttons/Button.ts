import React from 'react';

import { IconName, RightSideBarIconName } from '../Icons/IconsType.ts';

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
  form?: string;
}

export interface BackButtonProps {
  styles?: {
    containerStyle?: string;
    iconStyle?: string;
    textStyle?: string;
  };
  buttonText?: string;
  href: string;
}

export interface BorderButtonProps extends Omit<Button, 'icon' | 'buttonText'> {
  icon: {
    name: RightSideBarIconName;
    styles?: string;
  };
}

export interface NewNoteButtonProps {
  iconName: IconName;
  styles?: {
    buttonStyles?: string;
    iconStyles?: string;
  };
}
