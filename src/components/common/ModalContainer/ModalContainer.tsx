import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

import { useModal } from '../../../hooks/useModal.ts';
import Overlays from '../../../overlays/Overlays.tsx';
import { Modal } from '../Modal';

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const ModalContainer = () => {
  const {
    modalType,
    // modalProps,
    closeModal
  } = useModal();

  //#region modal type condition
  const renderModal = (): React.ReactNode => {
    switch (modalType) {
      case 'archive':
        return (
          <Modal
            content={{
              iconName: 'archive',
              headerText: 'Archive Note',
              descriptionText:
                'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.',
              primaryButtonText: 'Archive Note',
            }}
            onClose={closeModal}
          />
        );

      case 'delete':
        return (
          <Modal
            content={{
              iconName: 'delete',
              headerText: 'Delete Note',
              descriptionText:
                'Are you sure you want to permanently delete this note? This action cannot be undone.',
              primaryButtonText: 'Delete Note',
            }}
            onClose={closeModal}
          />
        );
      default:
        return null;
    }
  };
  //#endregion

  return (
    <Overlays>
      <AnimatePresence>
        {modalType ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 flex items-center justify-center bg-neutral-950/[50%]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
              onClick={closeModal}
              key="modal-backdrop"
            />
            <motion.div
              className="bg-modal-bg rounded-12 border-modal-border fixed top-1/2 left-1/2 z-50 box-border flex max-w-[440px] min-w-[343px] -translate-x-1/2 -translate-y-1/2 flex-col items-start self-stretch border"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
              key="modal-content"
            >
              {renderModal()}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </Overlays>
  );
};
