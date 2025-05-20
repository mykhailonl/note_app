import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './main.css';

import { NotesProvider } from './context/NoteContext.tsx';
import { DeviceProvider } from './context/ScreenContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <DeviceProvider>
      <ThemeProvider>
        <NotesProvider>
          <HydratedRouter />
        </NotesProvider>
      </ThemeProvider>
    </DeviceProvider>
  </React.StrictMode>,
);
