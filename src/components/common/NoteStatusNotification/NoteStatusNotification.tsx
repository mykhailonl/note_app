import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { NoteNotificationType, NoteStatusNotificationProps } from '../../../types/Notes/Notes.ts';

const textContent: Record<NoteNotificationType, string> = {
  noAvailable: 'You don’t have any notes yet. Start a new note to capture your thoughts and ideas.',
  noArchived: 'No notes have been archived yet. Move notes here for safekeeping, or',
  noFiltered: 'No notes match your search. Try a different keyword or',
};

export const NoteStatusNotification = ({
  notificationType,
  styles,
}: NoteStatusNotificationProps) => {
  const extraLink = notificationType === 'noArchived' || notificationType === 'noFiltered';

  return (
    <div
      className={cn(
        styles?.containerStyles,
        'rounded-8 text-preset-5 flex items-center self-stretch border border-neutral-200 bg-neutral-100 p-100',
      )}
    >
      <p className={cn(styles?.textStyles)}>
        {textContent[notificationType]} &nbsp;
        {extraLink && (
          <span>
            <NavLink to={'/create'} className={cn(styles?.linkStyles, 'underline')}>
              create a new note.
            </NavLink>
          </span>
        )}
      </p>
    </div>
  );
};
