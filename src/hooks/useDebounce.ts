import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook to create debounced versions of functions
 * @param callback - function itself
 * @param delay - delay in ms
 * @returns debounced function with cancel and flush method
 */
export const useDebounce = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const callbackRef = useRef(callback);
  const lastArgsRef = useRef<Parameters<T>>(null);

  // Updating callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      // Saving args for a flush
      lastArgsRef.current = args;

      // Canceling prev timer
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Setting a new timer
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
        timeoutRef.current = null;
      }, delay);
    },
    [delay],
  );

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const flush = useCallback(() => {
    if (timeoutRef.current && lastArgsRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      callbackRef.current(...lastArgsRef.current);
    }
  }, []);

  // Safe unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { debouncedCallback, cancel, flush };
};
