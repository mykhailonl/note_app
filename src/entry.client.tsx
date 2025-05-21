import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './main.css';

import { ModalProvider } from './context/ModalContext.tsx';
import { NotesProvider } from './context/NoteContext.tsx';
import { DeviceProvider } from './context/ScreenContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { ToastProvider } from './context/ToastContext.tsx';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <ModalProvider>
      <ToastProvider>
        <DeviceProvider>
          <ThemeProvider>
            <NotesProvider>
              <HydratedRouter />
            </NotesProvider>
          </ThemeProvider>
        </DeviceProvider>
      </ToastProvider>
    </ModalProvider>
  </React.StrictMode>,
);
