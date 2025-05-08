import { useNavigate, useParams } from 'react-router-dom';

import { Divider } from '../../components/common/Divider';
import { NoteHeaderControl } from '../../components/common/NoteHeaderControl';
import { NoteProperties } from '../../components/common/NoteProperties';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { SecondaryButton } from '../../components/common/SecondaryButton';
import { useDevice } from '../../hooks/useDevice.ts';
import { useNotes } from '../../hooks/useNotes.ts';

// TODO how to render note body if Ill add an edit functionality

export const NotePage = () => {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const { isDesktop } = useDevice();
  const { getById } = useNotes();

  if (!noteId) {
    navigate('/');
    return;
  }

  const currentNote = getById(+noteId);

  if (!currentNote) {
    navigate('/');
    return;
  }

  const handleSave = () => {};

  const handleCancel = () => {};

  return (
    <div className="bg-neutral-0 tablet:gap-200 tablet:px-400 tablet:py-300 flex h-full grow flex-col gap-150 px-200 py-250">
      {!isDesktop && <NoteHeaderControl />}

      <h1 className="text-preset-1 font-sans text-neutral-950">{currentNote.title}</h1>

      <NoteProperties tags={currentNote.tags} lastEdited={currentNote.lastEdited} />

      <Divider />

      <div className="flex grow whitespace-pre-wrap">{currentNote.content}</div>

      {isDesktop && (
        <>
          <Divider />

          <div className="flex gap-200">
            <PrimaryButton
              buttonText={{
                textValue: 'Save Note',
                styles: 'text-preset-4 text-neutral-0 flex',
              }}
              onClick={handleSave}
              buttonStyles={'bg-blue-500 px-200 py-150 border border-blue-500'}
            />

            <SecondaryButton
              buttonText={{
                textValue: 'Cancel',
                styles: 'text-preset-4',
              }}
              onClick={handleCancel}
              buttonStyles={'flex px-200 py-150'}
              disabled={true}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default NotePage;
