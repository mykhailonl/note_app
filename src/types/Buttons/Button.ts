import React from 'react';

export interface Button {
  buttonText: {
    textValue: string;
    styles?: string;
  };
  type?: 'submit' | 'reset' | 'button';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyles?: string;
  disabled?: boolean;
  img?: {
    src: string;
    altText: string;
    styles?: string;
  };
}
