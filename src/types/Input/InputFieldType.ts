import React from 'react';

export type InputFieldType = {
  containerStyles?: string;
  label: {
    labelText: string;
    labelStyles?: string;
    labelForgotShown?: boolean;
  };

  input: {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    type?: 'email' | 'password';
    inputContainerStyles?: string;
    inputTextStyles?: string;
    placeholderText?: string;
    disabled: boolean;

    inputIconShown: 'left' | 'right' | 'both' | 'none';
    inputIconStyles?: string;
  };

  hint: {
    hintShown: boolean;
    hintContainerStyles?: string;
    hintIconStyles?: string;
    hintTextStyles?: string;
    hintText?: string;
  };

  validation: {
    error: boolean;
  };
};
