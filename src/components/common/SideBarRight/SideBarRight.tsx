import { useModal } from '../../../hooks/useModal.ts';
import { BorderButton } from '../BorderButton';

export const SideBarRight = () => {
  const { openModal } = useModal();

  const handleNoteArchive = () => {
    openModal('archive');
  };

  const handleNoteDelete = () => {
    openModal('delete');
  };

  return (
    <div className="mr-400 flex w-[240px] shrink-0 flex-col gap-150 py-250 pl-200">
      <BorderButton
        icon={{
          name: 'archive',
        }}
        onClick={handleNoteArchive}
        buttonStyles={'border gap-100 rounded-8'}
      />

      <BorderButton
        icon={{
          name: 'delete',
        }}
        onClick={handleNoteDelete}
        buttonStyles={'border gap-100 rounded-8'}
      />
    </div>
  );
};
