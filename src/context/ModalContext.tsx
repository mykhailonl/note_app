import React, { createContext, useState } from 'react';

export type ModalType = 'delete' | 'archive' | null;

export interface ModalContextProps {
  modalType: ModalType;
  modalProps: any;
  openModal: (type: ModalType, props?: any) => void;
  closeModal: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalProps, setModalProps] = useState({});

  const openModal = (type: ModalType, props = {}) => {
    setModalType(type);
    setModalProps(props);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps({});
    document.body.style.overflow = '';
  };

  const value = {
    modalType,
    modalProps,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
