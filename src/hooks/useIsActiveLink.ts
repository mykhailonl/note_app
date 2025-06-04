import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinkTypes } from '../types/Links/Links.ts';
import { isActiveLink } from '../utils/isActiveLink.ts';

// custom hook to be able to memo value outside the component

export const useIsActiveLink = (href: LinkTypes) => {
  const location = useLocation();

  return React.useMemo(() => {
    return isActiveLink(href, location.pathname, location.search);
  }, [href, location.pathname, location.search]);
};
