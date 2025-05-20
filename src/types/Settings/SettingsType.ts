import { SettingsIconName } from '../Icons/IconsType.ts';

export const SETTINGS: Array<{ href: string; iconName: SettingsIconName }> = [
  { href: 'color-theme', iconName: 'lightTheme' },
  { href: 'font-theme', iconName: 'font' },
  { href: 'change-password', iconName: 'lock' },
  { href: 'logout', iconName: 'logout' },
] as const;

// Union for all settings page values
export type SettingPathType = 'change-password' | 'color-theme' | 'font-theme';

export type GlobalSettingType = 'color-theme' | 'font-theme';

// Object to map headers
export type HeaderTextMapType = Record<SettingPathType, string>;

// Object to map paragraphs
export type ParagraphTextMapType = Record<GlobalSettingType, string>;
