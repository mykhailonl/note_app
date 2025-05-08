import { BorderButton } from '../BorderButton';

export const SideBarRight = () => {
  const handleNoteArchive = () => {};

  const handleNoteDelete = () => {};

  return (
    <div className="mr-400 flex w-[240px] shrink-0 flex-col gap-150 py-250 pl-200">
      <BorderButton
        iconName={'archive'}
        onClick={handleNoteArchive}
        styles={{ buttonStyles: 'border border-neutral-300 gap-100 rounded-8 text-neutral-950' }}
      />

      <BorderButton
        iconName={'delete'}
        onClick={handleNoteDelete}
        styles={{ buttonStyles: 'border border-neutral-300 gap-100 rounded-8' }}
      />
    </div>
  );
};

export default SideBarRight;
