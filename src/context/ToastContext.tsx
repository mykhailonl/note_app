import React, { createContext, useEffect, useRef, useState } from 'react';

export type ToastType = 'added' | 'deleted' | 'archived' | null;

export interface ToastContextProps {
  toastType: ToastType;
  isFocused: boolean;
  setFocus: (v: boolean) => void;
  showToast: (type: ToastType) => void;
  removeToast: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastType, setToastType] = useState<ToastType>(null);
  const [isFocused, setIsFocused] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // todo add some check to prevent several clicks?
  const showToast = (type: ToastType) => {
    setToastType(type);
  };

  const removeToast = () => {
    setToastType(null);
    setIsFocused(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // useEffect to be able to leave notification on hover until hover remove
  useEffect(() => {
    if (toastType && !isFocused) {
      timeoutRef.current = setTimeout(() => {
        removeToast();
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [toastType, isFocused]);

  const setFocus = (focused: boolean) => {
    setIsFocused(focused);
  };

  const value = {
    toastType,
    isFocused,
    setFocus,
    showToast,
    removeToast,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
