import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PrimaryButton } from '../../components/common/PrimaryButton';
import { SettingsHeaderBlock } from '../../components/common/SettingsHeadeBlock';
import { ThemeOptions } from '../../components/common/ThemeOptions';
import { useTheme } from '../../hooks/useTheme.ts';
import { ColorThemeType, FontThemeType } from '../../types/Theme/ThemeType.ts';

export const ThemePage = () => {
  const navigate = useNavigate();

  const { themeType } = useParams<{ themeType: string }>();

  // to handle only this to pages to avoid problems with router not allowing reusing same component for different pages
  useEffect(() => {
    if (themeType !== 'font-theme' && themeType !== 'color-theme') {
      navigate('/settings', { replace: true });
    }
  }, [themeType, navigate]);

  const isFontThemePage = themeType === 'font-theme';
  const actualThemeType = isFontThemePage ? 'font' : 'color';

  const { fontTheme, updateFontTheme, colorTheme, updateColorTheme } = useTheme();

  const [temporaryThemeValue, setTemporaryThemeValue] = useState<FontThemeType | ColorThemeType>(
    isFontThemePage ? fontTheme : colorTheme
  );

  // to update temporaryState in case of changing url (color->theme and vice versa)
  useEffect(() => {
    setTemporaryThemeValue(isFontThemePage ? fontTheme : colorTheme);
  }, [themeType, isFontThemePage, fontTheme, colorTheme]);

  const handleSaveClick = () => {
    if (isFontThemePage) {
      updateFontTheme(temporaryThemeValue as FontThemeType);
    } else {
      updateColorTheme(temporaryThemeValue as ColorThemeType);
    }

    //todo style redirect? keep it or leave it?
    // navigate('/settings');
  };

  const isButtonDisabled = isFontThemePage
    ? fontTheme === temporaryThemeValue
    : colorTheme === temporaryThemeValue;

  return (
    <div className="bg-primary rounded-12 tablet:px-400 tablet:py-300 desktop:p-0 flex h-full px-200 py-300">
      <div className="flex w-full flex-col gap-250">
        <SettingsHeaderBlock />

        <ThemeOptions
          themeType={actualThemeType}
          currentThemeValue={temporaryThemeValue}
          setNewThemeValue={setTemporaryThemeValue}
        />

        <div className="flex justify-end self-stretch">
          <PrimaryButton
            buttonText={{ textValue: 'Apply Changes', styles: 'text-neutral-0 text-preset-4' }}
            onClick={handleSaveClick}
            buttonStyles={'bg-blue-500 flex items-center justify-center px-200 py-150'}
            form={'theme-form'}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemePage;