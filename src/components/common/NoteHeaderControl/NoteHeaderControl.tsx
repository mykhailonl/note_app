import { useNavigate } from 'react-router-dom';

import { HeaderButton } from '../HeaderButton';
import { PrimaryButton } from '../PrimaryButton';
import { Divider } from '../Divider';

import { iconComponents } from '../../../types/Icons/icons.ts';

// TODO how to handle delete/archive? do i need to pass a note itself to this component?

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
      <div className="tablet:pb-200 flex items-center justify-between self-stretch pb-150">
        <button
          className="gap-050 text-preset-5 flex items-center font-sans text-neutral-600"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <Icon className="h-[18px] w-[18px]" />

          <span>Go Back</span>
        </button>

        <div className="flex items-center gap-200">
          <HeaderButton iconName={'delete'} onClick={handleNoteDelete} />

          <HeaderButton iconName={'archive'} onClick={handleNoteArchive} />

          {/*TODO styles*/}
          <PrimaryButton
            buttonText={{
              textValue: 'Cancel',
              styles: 'text-preset-5 text-neutral-600',
            }}
            onClick={handleCancelClick}
          />

          {/*TODO styles*/}
          <PrimaryButton
            buttonText={{
              textValue: 'Save Note',
              styles: 'text-preset-5 text-blue-500',
            }}
            onClick={handleSaveClick}
          />
        </div>
      </div>

      <Divider styles={'w-full'} />
    </div>
  );
};

export default NoteHeaderControl;
