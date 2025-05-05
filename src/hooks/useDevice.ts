import { useContext } from 'react';

import { DeviceContext, DeviceContextType } from '../context/ScreenContext.tsx';

export const useDevice = (): DeviceContextType => {
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }

  return context;
};
