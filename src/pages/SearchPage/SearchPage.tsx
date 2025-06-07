import { useMemo } from 'react';

import { FilterResultsMessage } from '../../components/common/FilterResultsMessage';
import { NoteList } from '../../components/common/NoteList';
import { NoteStatusNotification } from '../../components/common/NoteStatusNotification';
import { TopBarSearch } from '../../components/common/TopBarSearch';
import { useNotes } from '../../hooks/useNotes.ts';
import { useSearchQuery } from '../../hooks/useSearchQuery.ts';

export const SearchPage = () => {
  const { filterNotes } = useNotes();
  const { query, inputValue, handleQueryChange, tags: activeTags } = useSearchQuery();

  const filteredNotes = useMemo(() => {
    return filterNotes(query, activeTags);
  }, [query, activeTags, filterNotes]);

  const hasSearchQuery = !!query.trim();
  const hasNotes = filteredNotes.length > 0;
  const hasNotesToDisplay = hasSearchQuery && hasNotes;

  return (
    <>
      <TopBarSearch
        onChange={handleQueryChange}
        value={inputValue}
        styles={{
          containerStyles: 'self-stretch bg-input-bg placeholder-shown:bg-input-placeholderShownBg',
        }}
      />

      {!hasNotes && <NoteStatusNotification notificationType="noFiltered" />}

      {hasNotesToDisplay && <FilterResultsMessage query={query}/>}

      <NoteList userNotes={filteredNotes} />
    </>
  );
};

export default SearchPage;
