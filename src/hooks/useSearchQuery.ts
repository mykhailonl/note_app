import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { useDebounce } from './useDebounce';

/**
 * Custom hook for managing search query with URL synchronization and debouncing
 * @param delay - debounce delay in ms (default: 500)
 * @param paramName - URL parameter name (default: 'query')
 * @returns search query state and handlers
 */
export const useSearchQuery = (delay: number = 500, paramName: string = 'query') => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  // Local state for input (UI responsiveness)
  const [inputValue, setInputValue] = useState(() => searchParams.get(paramName) || '');

  // URL as a single source of truth for a filtration
  const urlQuery = searchParams.get(paramName) || '';

  const tags = searchParams.getAll('tags');

  // To reset saved value of input field when switching page
  useEffect(() => {
    setInputValue(urlQuery);
  }, [pathname, urlQuery]);

  const updateUrl = useCallback(
    (value: string) => {
      setSearchParams((current) => {
        const params = new URLSearchParams(current);

        if (value.trim()) {
          params.set(paramName, value);
        } else {
          params.delete(paramName);
        }

        return params;
      });
    },
    [setSearchParams, paramName],
  );

  // Debounced version of url updating fn
  const { debouncedCallback: debouncedUpdateUrl, cancel } = useDebounce(updateUrl, delay);

  // Input change handler
  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setInputValue(value);

      debouncedUpdateUrl(value);
    },
    [debouncedUpdateUrl],
  );

  const setQuery = useCallback(
    (value: string) => {
      setInputValue(value);

      debouncedUpdateUrl(value);
    },
    [debouncedUpdateUrl],
  );

  const clearQuery = useCallback(() => {
    setInputValue('');

    cancel(); // Canceling pending URL update
    updateUrl(''); // Clear URL right away
  }, [updateUrl, cancel]);

  const flushToUrl = useCallback(() => {
    updateUrl(inputValue);

    cancel(); // Canceling debounced update
  }, [updateUrl, inputValue, cancel]);

  return {
    query: urlQuery,
    tags,

    inputValue, // for input components values

    handleQueryChange,
    setQuery,
    clearQuery,
    flushToUrl,
  };
};
