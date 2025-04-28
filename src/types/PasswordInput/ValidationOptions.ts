export interface ValidationOptions {
  minLength?: number;
  requireUppercase?: boolean;
  requireLowercase?: boolean;
  requireNumber?: boolean;
  requireSpecialChar?: boolean;
  customValidator?: (value: string) => boolean;
}

export type ValidationError = string | null;
