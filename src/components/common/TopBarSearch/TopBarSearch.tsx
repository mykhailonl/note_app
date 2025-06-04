import cn from 'classnames';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { TopBarSearchProps } from '../../../types/TopBar/TopBar.ts';

export const TopBarSearch = ({ value, onChange, styles }: TopBarSearchProps) => {
  const Icon = iconComponents['search'];

  return (
    <div
      className={cn(
        styles?.containerStyles,
        'rounded-8 shadow-queryField border-topBar-border text-text-primary flex items-center gap-100 border px-200 py-150',
      )}
    >
      <div className="text-topBar-text">
        <Icon className="h-250 w-250" />
      </div>

      <input
        value={value}
        onChange={onChange}
        placeholder={'Search by title, content, or tags…'}
        className={cn(
          styles?.inputStyles,
          'text-preset-5 placeholder:text-topBar-text w-[240px] self-baseline outline-none',
        )}
      />
    </div>
  );
};
