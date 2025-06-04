import React from 'react';

export interface PageFormWrapperProps {
  children: React.ReactNode;
  formAction: () => void;
}

export interface PageWrapperProps {
  children: React.ReactNode;
}

export type PageTitleTypes = '/' | '/settings';

export type PageModes = 'search' | 'archive' | 'tags';
