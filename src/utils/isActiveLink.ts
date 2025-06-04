import { LinkTypes } from '../types/Links/Links.ts';

// custom logic to set Active modifier to the NavLink instead of default option,
// because changing a mode, not a full page

export const isActiveLink = (href: LinkTypes, pathname: string, search: string) => {
  if (href === '/') {
    return (
      pathname === '/' &&
      !search.includes('mode=search') &&
      !search.includes('mode=archive') &&
      !search.includes('mode=tags')
    );
  }

  if (href === '/?mode=search') {
    return pathname === '/' && search.includes('mode=search');
  }

  if (href === '/?mode=archive') {
    return pathname === '/' && search.includes('mode=archive');
  }

  if (href === '/?mode=tags') {
    return pathname === '/' && search.includes('mode=tags');
  }

  return pathname === href;
};
