import { PageModes, PageTitleTypes } from '../types/Pages/Page.ts';

export default function getPageTitle(pathname: string, searchParams: URLSearchParams) {
  const ROUTE_TITLES: Record<PageTitleTypes, string> = {
    '/': 'All Notes',
    '/settings': 'Settings',
    '/tags': 'Tags',
    '/search': 'Search',
  };

  const title = ROUTE_TITLES[pathname as PageTitleTypes] || 'All Notes';

  const searchQuery = searchParams.get('query');
  const tagQuery = searchParams.getAll('tags');
  const mode = searchParams.get('mode') as PageModes;

  if (searchQuery) {
    return {
      text: 'Showing results for: ',
      extraInfo: searchQuery,
      basicTitle: false,
    };
  }

  if (tagQuery.length > 0) {
    return {
      text: 'Notes Tagged: ',
      extraInfo: tagQuery.length > 6 ? tagQuery.slice(0, 6).join(', ') : tagQuery.join(', '),
      basicTitle: false,
    };
  }

  if (mode) {
    switch (mode) {
      case 'archive':
        return { text: 'Archive', basicTitle: true };
      case 'search':
        return { text: 'Search', basicTitle: true };
      case 'tags':
        return { text: 'Tags', basicTitle: true };
    }
  }

  return { text: title, basicTitle: true };
}
