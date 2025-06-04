import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { NewNoteButton } from '../../components/common/NewNoteButton';
import { NoteList } from '../../components/common/NoteList';
import { NoteStatusNotification } from '../../components/common/NoteStatusNotification';
import { TopBarSearch } from '../../components/common/TopBarSearch';
import { useNotes } from '../../hooks/useNotes.ts';
import { useSearchQuery } from '../../hooks/useSearchQuery.ts';
import { PageModes } from '../../types/Pages/Page.ts';
import getPageTitle from '../../utils/getPageTitle.ts';

// todo check if placeholder shown styles are applying

export const HomePage = () => {
  //#region hooks
  const [searchParams] = useSearchParams();
  const { query, inputValue, handleQueryChange, tags: activeTags } = useSearchQuery();
  const location = useLocation();
  const { notes, filterNotes } = useNotes();
  //#endregion

  const filteredNotes = useMemo(() => {
    return filterNotes(query, activeTags);
  }, [query, activeTags, filterNotes]);

  const pageMode = searchParams.get('mode') as PageModes;

  //#region conditions
  const noAvailableNotes = !notes.length;
  const isSearchPage = pageMode === 'search';
  const hasSearchQuery = !!query.trim();
  const noMatchingQueryNotes = hasSearchQuery && !filteredNotes.length;
  //#endregion

  const title = getPageTitle(location.pathname, searchParams);

  const renderNoteContent = () => {
    if (noAvailableNotes) {
      return <NoteStatusNotification notificationType={'noAvailable'} />;
    }

    if (noMatchingQueryNotes) {
      return <NoteStatusNotification notificationType="noFiltered" />;
    }

    return <NoteList userNotes={filteredNotes} />;
  };

  return (
    <>
      <div className="mobile-grid tablet:tablet-grid tablet:py-300 box-border h-full rounded-t-xl py-250">
        <div className="col-span-full flex flex-col items-start gap-200">
          <h1 className="text-preset-1 text-primary self-stretch">{title.text}</h1>

          {isSearchPage && (
            <>
              <TopBarSearch
                onChange={handleQueryChange}
                value={inputValue}
                styles={{
                  containerStyles:
                    'self-stretch bg-input-bg placeholder-shown:bg-input-placeholderShownBg',
                }}
              />

              {hasSearchQuery && filteredNotes.length > 0 && (
                <div className="text-preset-5 text-text-secondary flex self-stretch">
                  All notes matching ”<span className="text-text-primary">{query}</span>” are
                  displayed below.
                </div>
              )}
            </>
          )}

          {renderNoteContent()}
        </div>
      </div>

      <NewNoteButton
        iconName={'plus'}
        styles={{
          buttonStyles:
            'fixed z-4 bottom-900 right-200 tablet:right-300 tablet:bottom-1200 outline-none focus-visible:shadow-defaultFocus',
        }}
      />
    </>
  );
};

export default HomePage;
