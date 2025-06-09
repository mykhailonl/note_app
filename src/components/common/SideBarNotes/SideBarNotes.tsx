import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useNotes } from '../../../hooks/useNotes.ts';
import { useSearchQuery } from '../../../hooks/useSearchQuery.ts';
import { Divider } from '../Divider';
import { NoteList } from '../NoteList';
import { NoteStatusNotification } from '../NoteStatusNotification';
import { PrimaryButton } from '../PrimaryButton';

//TODO check visual for notes on desktop, visually cutting a note because overflow is hidden

export const SideBarNotes = () => {
  const { pathname, state } = useLocation();
  const { query, tags: activeTags } = useSearchQuery();
  const { filterNotes } = useNotes();
  const isArchivedPage = pathname.includes('/archive') || state?.from === 'archive';

  const filteredNotes = useMemo(() => {
    return filterNotes({ query, tags: activeTags, archivedNotes: isArchivedPage });
  }, [query, activeTags, filterNotes, isArchivedPage]);

  const noAvailableNotes = !filteredNotes.length;

  // TODO
  const handleButtonClick = () => {};

  return (
    <div className="border-divider-color flex border-r px-400 py-250">
      <div className="flex w-[240px] flex-col gap-200">
        <PrimaryButton
          buttonText={{
            textValue: 'Create New Note',
            styles: 'text-preset-4 text-neutral-0',
          }}
          onClick={handleButtonClick}
          buttonStyles={
            'flex justify-center items-center bg-blue-500 px-200 py-150 border border-blue-500 shrink-0'
          }
        />
        {isArchivedPage && (
          <>
            <p className="text-preset-5 text-text-tertiary">
              All your archived notes are stored here. You can restore or delete them anytime.
            </p>

            {noAvailableNotes ? (
              <NoteStatusNotification notificationType="noArchived" />
            ) : (
              <Divider />
            )}
          </>
        )}

        <div
          className="flex overflow-auto"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {noAvailableNotes && !isArchivedPage ? (
            <NoteStatusNotification notificationType="noAvailable" />
          ) : (
            <NoteList userNotes={filteredNotes} fromArchive={isArchivedPage} />
          )}
        </div>
      </div>
    </div>
  );
};
