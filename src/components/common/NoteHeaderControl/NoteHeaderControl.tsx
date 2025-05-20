import { useNavigate } from 'react-router-dom';

import { iconComponents } from '../../../types/Icons/IconsType.ts';
import { BorderButton } from '../BorderButton';
import { Divider } from '../Divider';
import { PrimaryButton } from '../PrimaryButton';

// TODO how to handle delete/archive? do i need to pass a note itself to this component?
// TODO rewrite button into BorderButton
// TODO backButton

export const NoteHeaderControl = () => {
  const navigate = useNavigate();
  const Icon = iconComponents['leftArrow'];

  // TODO
  const handleNoteDelete = () => {};

  // TODO
  const handleNoteArchive = () => {};

  // TODO
  const handleCancelClick = () => {};

  // TODO
  const handleSaveClick = () => {};

  return (
    <div className="flex w-full flex-col items-center justify-between self-stretch">
      <div className="text-secondary tablet:pb-200 flex items-center justify-between self-stretch pb-150">
        <button
          className="gap-050 text-preset-5 flex items-center"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <Icon className="h-[18px] w-[18px]" />

          <span>Go Back</span>
        </button>

        <div className="flex items-center gap-200">
          <BorderButton
            icon={{
              name: 'delete',
            }}
            onClick={handleNoteDelete}
            buttonStyles={'border-none'}
          />

          <BorderButton
            icon={{
              name: 'archive',
            }}
            onClick={handleNoteArchive}
            buttonStyles={'border-none'}
          />

          {/*TODO styles*/}
          <PrimaryButton
            buttonText={{
              textValue: 'Cancel',
              styles: 'text-preset-5',
            }}
            onClick={handleCancelClick}
            buttonStyles={'border-none'}
          />

          {/*TODO styles*/}
          <PrimaryButton
            buttonText={{
              textValue: 'Save Note',
              styles: 'text-preset-5 text-blue-500',
            }}
            onClick={handleSaveClick}
            buttonStyles={'border-none'}
          />
        </div>
      </div>

      <Divider styles={'w-full'} />
    </div>
  );
};

export default NoteHeaderControl;
