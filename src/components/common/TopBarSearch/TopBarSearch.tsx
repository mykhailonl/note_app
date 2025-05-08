import React from 'react';

import { iconComponents } from '../../../types/Icons/IconsType.ts';

// TODO check onChange type
type Props = {
  value: string;
  onChange: React.Dispatch<React.ChangeEvent<HTMLInputElement>>;
};

export const TopBarSearch: React.FC<Props> = ({ value, onChange }) => {
  const Icon = iconComponents['search'];

  return (
    <div className="rounded-8 shadow-queryField flex items-center gap-100 border border-neutral-300 px-200 py-150 text-neutral-500">
      <Icon className="h-250 w-250" />

      <input
        value={value}
        onChange={onChange}
        placeholder={'Search by title, content, or tags…'}
        className="text-preset-5 w-[240px] self-baseline outline-none"
      />
    </div>
  );
};

export default TopBarSearch;
