import { useNotes } from '../../../hooks/useNotes.ts';
import { NoteList } from '../NoteList';
import { NoteStatusNotification } from '../NoteStatusNotification';
import { PrimaryButton } from '../PrimaryButton';

export const SideBarNotes = () => {
  const { notes } = useNotes();
  const noAvailableNotes = !notes.length;

  // TODO
  const handleButtonClick = () => {};

  return (
    <div className="border-divider-color flex border-r px-400 py-250">
      <div className="flex flex-col gap-200">
        <PrimaryButton
          buttonText={{
            textValue: 'Create New Note',
            styles: 'text-preset-4 text-neutral-0',
          }}
          onClick={handleButtonClick}
          buttonStyles={
            'flex justify-center items-center bg-blue-500 px-200 py-150 w-[240px] border border-blue-500 shrink-0'
          }
        />

        {/*TODO check visual for notes on desktop, visually cutting a note because overflow is hidden*/}
        <div
          className="flex w-[240px] overflow-auto"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {noAvailableNotes ? (
            <NoteStatusNotification notificationType={'noAvailable'} />
          ) : (
            <NoteList userNotes={notes} />
          )}
        </div>
      </div>
    </div>
  );
};
