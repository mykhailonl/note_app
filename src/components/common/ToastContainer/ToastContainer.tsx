import cn from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import React from 'react';

import { useToast } from '../../../hooks/useToast.ts';
import { Toast } from '../Toast';

const toastVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -400,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const ToastContainer = () => {
  const { toastType, removeToast, setFocus } = useToast();

  //#region toast type condition
  const renderToast = (): React.ReactNode => {
    switch (toastType) {
      case 'added':
        return <Toast toastText={'Note saved successfully!'} onClose={removeToast} />;
      case 'archived':
        return <Toast toastText={'Note archived.'} onClose={removeToast} />;
      case 'deleted':
        return <Toast toastText={'Note deleted.'} onClose={removeToast} />;
      default:
        return null;
    }
  };
  //#endregion

  return (
    <AnimatePresence>
      {toastType ? (
        <motion.div
          className={cn(
            'tablet:w-[390px] tablet:bottom-[106px] desktop:bottom-16 desktop:right-16 rounded-8 fixed right-4 bottom-19 z-2 w-[274px]',
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={toastVariants}
          transition={{ type: 'spring', damping: 25, stiffness: 400 }}
          onClick={(e) => e.stopPropagation()}
          whileHover={{ boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)' }}
          onHoverStart={() => setFocus(true)}
          onHoverEnd={() => setFocus(false)}
          key="toast-content"
        >
          {renderToast()}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
