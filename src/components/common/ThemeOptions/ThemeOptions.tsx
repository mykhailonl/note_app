import React from 'react';

import {
  ThemeOptionsType,
  ThemeOptionType,
  ThemeValueType,
} from '../../../types/Theme/ThemeType.ts';
import { ThemeOption } from '../ThemeOption';

/*
 * todo
 *  check system theme styles
 * store them at the backend as well?
 * */

export const ThemeOptions = ({
  themeType,
  currentThemeValue,
  setNewThemeValue,
}: ThemeOptionsType) => {
  const isThemeSelected = (themeName: ThemeValueType) => {
    return themeName === currentThemeValue;
  };

  // todo should I store it inside or outside of component? or memo it?
  const fontThemeContent: ThemeOptionType[] = [
    {
      iconName: 'fontSansSerif',
      themeName: 'Sans-serif ',
      themeDescription: 'Clean and modern, easy to read.',
    },
    {
      iconName: 'fontSerif',
      themeName: 'Serif',
      themeDescription: 'Classic and elegant for a timeless feel.',
    },
    {
      iconName: 'fontMonospace',
      themeName: 'Monospace',
      themeDescription: 'Code-like, great for a technical vibe.',
    },
  ];

  // todo should I store it inside or outside of component? or memo it?
  const colorThemeContent: ThemeOptionType[] = [
    {
      iconName: 'lightTheme',
      themeName: 'Light Mode',
      themeDescription: 'Pick a clean and classic light theme',
    },
    {
      iconName: 'darkTheme',
      themeName: 'Dark Mode',
      themeDescription: 'Select a sleek and modern dark theme',
    },
    {
      iconName: 'systemTheme',
      themeName: 'System',
      themeDescription: 'Adapts to your device’s theme',
    },
  ];

  const themeContent = themeType === 'font' ? fontThemeContent : colorThemeContent;

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form id="theme-form" className="flex flex-col gap-200" onSubmit={handleFormSubmit}>
      {themeContent.map((option) => (
        <ThemeOption
          key={option.iconName}
          themeOption={option}
          isChecked={isThemeSelected(option.iconName as ThemeValueType)}
          onChange={() => setNewThemeValue(option.iconName as ThemeValueType)}
        />
      ))}
    </form>
  );
};
