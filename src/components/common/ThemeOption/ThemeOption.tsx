import cn from 'classnames';
import React from 'react';

import { useTheme } from '../../../hooks/useTheme.ts';
import { iconComponents, RadioButtonsIconName } from '../../../types/Icons/IconsType.ts';
import { ThemeOptionComponentType } from '../../../types/Theme/ThemeType.ts';

//todo find a way to style radio buttons in tw

export const ThemeOption: React.FC<ThemeOptionComponentType> = ({
  themeOption,
  isChecked,
  onChange,
}) => {
  const { colorTheme } = useTheme();
  const isDarkTheme = colorTheme === 'darkTheme';

  //#region Icons
  const radioIconName: RadioButtonsIconName = isDarkTheme
    ? isChecked
      ? 'radioDarkChecked'
      : 'radioDark'
    : isChecked
      ? 'radioLightChecked'
      : 'radioLight';

  const RadioIcon = iconComponents[radioIconName];
  const Icon = iconComponents[themeOption.iconName];
  //#endregion
  const inputId = `theme-option-${themeOption.iconName}`;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        isChecked ? 'bg-bg-secondary' : 'bg-bg-primary',
        'rounded-12 border-divider-color flex cursor-pointer items-center gap-200 border p-200',
      )}
    >
      <div className="rounded-12 border-divider-color bg-bg-primary flex border p-100">
        <Icon className="h-400 w-400" />
      </div>

      <div className="gap-075 flex flex-grow-1 flex-col">
        <p className="text-preset-4 text-text-primary flex">{themeOption.themeName}</p>

        <p className="text-preset-6 text-text-secondary flex">{themeOption.themeDescription}</p>
      </div>

      <RadioIcon />
      <input
        id={inputId}
        className="border-divider-color appearance-bg-primary sr-only flex h-200 w-200 border"
        type="radio"
        value={themeOption.iconName}
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  );
};
