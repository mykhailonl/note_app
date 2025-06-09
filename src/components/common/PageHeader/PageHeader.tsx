import cn from 'classnames';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import { useSearchQuery } from '../../../hooks/useSearchQuery.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';
import getPageTitle from '../../../utils/getPageTitle.ts';
import { TopBarSearch } from '../TopBarSearch';

export const PageHeader = () => {
  const [searchParams] = useSearchParams();
  const { inputValue, handleQueryChange } = useSearchQuery();
  const { pathname, state } = useLocation();

  const title = getPageTitle(
    state?.from === 'archive'
      ? '/archive'
      : pathname,
    searchParams);

  const Icon = iconComponents['settings'];

  return (
    <header className="border-divider-color flex h-1000 shrink-0 items-center justify-between border-b px-400">
      <div className="text-preset-1">
        <span className="text-header-secondaryColor">{title.text}</span>

        <span>{title.extraInfo}</span>
      </div>

      <div className="flex items-center gap-200">
        <TopBarSearch value={inputValue} onChange={handleQueryChange} />

        <NavLink
          to={'/settings'}
          className={cn(
            'text-topbarIcon-bg focus-visible:shadow-defaultFocus rounded-8 p-[9px] outline-none',
          )}
        >
          <Icon className="h-300 w-300" aria-label={'Settings'} />
        </NavLink>
      </div>
    </header>
  );
};
