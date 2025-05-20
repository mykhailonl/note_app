import React from 'react';

export type ColorThemeType = 'lightTheme' | 'darkTheme' | 'systemTheme';
export type FontThemeType = 'fontSansSerif' | 'fontSerif' | 'fontMonospace';
export type ThemeValueType = ColorThemeType | FontThemeType;

export type ThemeOptionsType = {
  themeType: 'font' | 'color';
  currentThemeValue: ThemeValueType;
  setNewThemeValue: React.Dispatch<React.SetStateAction<ThemeValueType>>;
};

export type ThemeOptionType = {
  iconName: ThemeValueType;
  themeName: string;
  themeDescription: string;
};

export type ThemeOptionComponentType = {
  themeOption: ThemeOptionType;
  isChecked: boolean;
  onChange: () => void;
};
