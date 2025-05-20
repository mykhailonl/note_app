import React from 'react';

import { iconComponents } from '../../../types/Icons/IconsType.ts';

// TODO check onChange type
type Props = {
  value: string;
  onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
};

export const TopBarSearch = ({ value, onChange }: Props) => {
  const Icon = iconComponents['search'];

  return (
    <div className="rounded-8 shadow-queryField border-topBar-border text-text-primary flex items-center gap-100 border px-200 py-150">
      <div className="text-topBar-text">
        <Icon className="h-250 w-250" />
      </div>

      <input
        value={value}
        onChange={onChange}
        placeholder={'Search by title, content, or tags…'}
        className="text-preset-5 placeholder:text-topBar-text w-[240px] self-baseline outline-none"
      />
    </div>
  );
};

export default TopBarSearch;
