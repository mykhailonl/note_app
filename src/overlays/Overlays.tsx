import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface OverlaysProps {
  children: ReactNode;
}

const Overlays = ({ children }: OverlaysProps) => {
  const [mountElement, setMountElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('overlays');
    if (element) setMountElement(element);
  }, []);

  return mountElement ? createPortal(children, mountElement) : null;
};

export default Overlays;
