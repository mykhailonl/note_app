import React from 'react';

export interface EmailInputType {
  styles?: {
    container?: string;
    label?: string;
    input?: string;
  };

  label: {
    labelText: string;
    labelFor?: string;
  };

  input: {
    type?: 'email';
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
