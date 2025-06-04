import cn from 'classnames';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

import { useSearchQuery } from '../../../hooks/useSearchQuery.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';
import getPageTitle from '../../../utils/getPageTitle.ts';
import { TopBarSearch } from '../TopBarSearch';

// todo fix a header on a desktop in case if input has some text, rn header stays as Search and not showing a query

export const PageHeader = () => {
  const [searchParams] = useSearchParams();
  const { inputValue, handleQueryChange } = useSearchQuery();
  const { pathname } = useLocation();

  const title = getPageTitle(pathname, searchParams);

  const Icon = iconComponents['settings'];

  return (
    <header className="border-divider-color flex h-1000 shrink-0 items-center justify-between border-b px-400">
      {title.basicTitle ? (
        <h1 className="text-preset-1 text-text-primary">{title.text}</h1>
      ) : (
        <div className="text-preset-1">
          <span className="text-header-secondaryColor">{title.text}</span>

          <span>{title.extraInfo}</span>
        </div>
      )}

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
