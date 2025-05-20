import React, { createContext, useEffect, useState } from 'react';

import { ColorThemeType, FontThemeType } from '../types/Theme/ThemeType.ts';

const DEFAULT_COLOR_THEME: ColorThemeType = 'lightTheme';
const DEFAULT_FONT_THEME: FontThemeType = 'fontSansSerif';

export interface ThemeContextType {
  colorTheme: ColorThemeType;
  fontTheme: FontThemeType;
  updateColorTheme: (theme: ColorThemeType) => void;
  updateFontTheme: (font: FontThemeType) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  colorTheme: DEFAULT_COLOR_THEME,
  fontTheme: DEFAULT_FONT_THEME,
  updateColorTheme: () => {},
  updateFontTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  //#region colorTheme
  const [colorTheme, setColorTheme] = useState<ColorThemeType>(() => {
    const saved = localStorage.getItem('colorTheme');

    if (saved && ['lightTheme', 'darkTheme', 'systemTheme'].includes(saved)) {
      return saved as ColorThemeType;
    }

    return DEFAULT_COLOR_THEME;
  });

  const updateColorTheme = (theme: ColorThemeType) => {
    if (!['lightTheme', 'darkTheme', 'systemTheme'].includes(theme)) {
      console.error(`Invalid theme: ${theme}`);
      return;
    }

    setColorTheme(theme);
  };
  //#endregion

  //#region fontTheme
  const [fontTheme, setFontTheme] = useState<FontThemeType>(() => {
    const saved = localStorage.getItem('fontTheme');

    if (saved && ['fontMonospace', 'fontSansSerif', 'fontSerif'].includes(saved)) {
      return saved as FontThemeType;
    }

    return DEFAULT_FONT_THEME;
  });

  const updateFontTheme = (font: FontThemeType) => {
    if (!['fontSansSerif', 'fontSerif', 'fontMonospace'].includes(font)) {
      console.error(`Invalid font: ${font}`);
      return;
    }

    setFontTheme(font);
  };
  //#endregion

  //#region useEffects
  // Effects are rewriting data attributes on html tag, after it applies on body based on data attribute value
  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme);
    document.documentElement.setAttribute('data-theme', colorTheme);
    // todo update on backend in the future
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem('fontTheme', fontTheme);
    document.documentElement.setAttribute('data-font', fontTheme);
    // todo update on backend in the future
  }, [fontTheme]);
  //#endregion

  const value = {
    colorTheme,
    fontTheme,
    updateColorTheme,
    updateFontTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
