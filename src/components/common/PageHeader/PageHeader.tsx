import cn from 'classnames';
import React from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import getPageTitle from '../../../utils/getPageTitle.ts';
import { TopBarSearch } from '../TopBarSearch';

export const PageHeader: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const pathname = location.pathname;

  const query = searchParams.get('query') || '';
  const title = getPageTitle(pathname, searchParams);

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
    <header className="flex h-1000 shrink-0 items-center justify-between border-b border-neutral-200 px-400">
      {title.basicTitle ? (
        <h1 className="text-preset-1 text-neutral-950">{title.text}</h1>
      ) : (
        <div className="text-preset-1">
          <span className="text-neutral-600">{title.text}</span>
          <span className="text-neutral-950">{title.extraInfo}</span>
        </div>
      )}

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
