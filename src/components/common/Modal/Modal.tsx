import cn from 'classnames';

import { useModal } from '../../../hooks/useModal.ts';
import { useToast } from '../../../hooks/useToast.ts';
import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { ModalProps } from '../../../types/Modal/Modal.ts';
import { Divider } from '../Divider';
import { PrimaryButton } from '../PrimaryButton';
import { SecondaryButton } from '../SecondaryButton';

export const Modal = ({ content, styles, onClose }: ModalProps) => {
  const { modalType, closeModal } = useModal();
  const { showToast } = useToast();

  const archivedModal = modalType === 'archive';
  const deleteModal = modalType === 'delete';

  const Icon = iconComponents[content.iconName];

  const handlePrimaryButtonClick = () => {
    if (archivedModal) {
      closeModal();
      showToast('archived');

      return;
    }

    if (deleteModal) {
      closeModal();

      showToast('deleted');
    }
  }

  return (
    <>
      <div className={cn(styles?.containerStyles, 'flex items-start gap-200 self-stretch p-250')}>
        <div className="rounded-8 bg-modal-iconBg p-100">
          <Icon className="h-300 w-300" />
        </div>

        <div className="gap-075 flex flex-col">
          <p className="text-preset-3">{content.headerText}</p>

          <p className="text-preset-5">{content.descriptionText}</p>
        </div>
      </div>

      <Divider styles="w-full" />

      <div className="flex justify-end gap-200 self-stretch px-250 py-200">
        <SecondaryButton
          buttonText={{
            textValue: 'Cancel',
            styles: 'text-preset-4',
          }}
          onClick={onClose}
          buttonStyles="px-200 py-150 box-border"
        />

        <PrimaryButton
          buttonText={{
            textValue: content.primaryButtonText,
            styles: 'text-neutral-0 text-preset-4',
          }}
          onClick={handlePrimaryButtonClick}
          buttonStyles={cn(
            content.iconName === 'delete'
              ? 'bg-red-500 border-red-500 hover:bg-red-500'
              : 'bg-blue-500 border-blue-500 hover:bg-blue-500',
            'px-200 py-150 box-border',
          )}
        />
      </div>
    </>
  );
};
