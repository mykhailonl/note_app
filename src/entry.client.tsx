import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './main.css';

import { DeviceProvider } from './context/ScreenContext.tsx';
import { NotesProvider } from './context/NoteContext.tsx';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <DeviceProvider>
      <NotesProvider>
        <HydratedRouter />
      </NotesProvider>
    </DeviceProvider>
  </React.StrictMode>,
);
