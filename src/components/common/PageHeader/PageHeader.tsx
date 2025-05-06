import cn from 'classnames';
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/icons.ts';
import { TopBarSearch } from '../TopBarSearch';

type Props = {
  text: string;
};

export const PageHeader: React.FC<Props> = ({ text }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const Icon = iconComponents['settings'];

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    params.set('query', event.target.value);

    if (!event.target.value) {
      params.delete('query');
    }

    setSearchParams(params);
  };

  return (
    <header className="flex h-[81px] items-center justify-between border-b border-neutral-200 px-400">
      <h1 className="text-preset-1 text-neutral-950">{text}</h1>

      <div className="flex items-center gap-200">
        <TopBarSearch value={query} onChange={handleQueryChange} />

        <NavLink
          to={'/settings'}
          className={({ isActive }) =>
            cn('p-[9px]', isActive ? 'text-blue-500' : 'text-neutral-500')
          }
        >
          <Icon className="h-300 w-300" aria-label={'Settings'} />
        </NavLink>
      </div>
    </header>
  );
};

export default PageHeader;
