import React from 'react';

export interface TopBarSearchProps {
  value: string;
  onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
  styles?: {
    containerStyles?: string;
    inputStyles?: string;
  };
}
