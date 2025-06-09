import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilterResultsMessage } from '../../components/common/FilterResultsMessage';
import { NoteList } from '../../components/common/NoteList';
import { TagList } from '../../components/common/TagList';
import { useNotes } from '../../hooks/useNotes.ts';

// todo change styles for notes bg, not contrast enough with the dark theme etc
export const TagsPage = () => {
  const { filterNotes } = useNotes();
  const [searchParams] = useSearchParams();

  const tagsSelected = searchParams.getAll('tags');

  const filteredNotes = useMemo(() => {
    return filterNotes({ tags: tagsSelected });
  }, [tagsSelected, filterNotes]);

  if (!tagsSelected.length) {
    return <TagList />;
  }

  return (
    <div className='flex flex-col gap-200 self-stretch'>
      <FilterResultsMessage tags={tagsSelected} />

      <NoteList userNotes={filteredNotes} />
    </div>
  )
}

export default TagsPage;
