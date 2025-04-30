import React from 'react';
import ReactDOM from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './main.css';
import { DeviceProvider } from './context/ScreenContext.tsx';

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <DeviceProvider>
      <HydratedRouter />
    </DeviceProvider>
  </React.StrictMode>,
);
