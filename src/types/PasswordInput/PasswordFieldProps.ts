import React from 'react';

import { ValidationError, ValidationOptions } from './ValidationOptions.ts';
import { StyleOptions } from './StyleOptions.ts';
import { UIOptions } from './UIOptions.ts';

export interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;

  validationError?: ValidationError;
  validation?: ValidationOptions;
  styles?: StyleOptions;
  uiOptions?: UIOptions;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
