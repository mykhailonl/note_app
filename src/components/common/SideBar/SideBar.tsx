import { useSearchParams } from 'react-router-dom';

import { useNotes } from '../../../hooks/useNotes.ts';
import { NoteTagType } from '../../../types/Notes/NotesType.ts';
import { Divider } from '../Divider';
import { LogoHeader } from '../LogoHeader';
import SideBarPages from '../SideBarPages/SideBarPages.tsx';
import { SideBarTag } from '../SideBarTag';

// TODO filter notes

export const SideBar = () => {
  const { getTags } = useNotes();

  const [searchParams, setSearchParams] = useSearchParams();
  const tags = searchParams.getAll('tags') || [];

  const toggleTag = (tag: NoteTagType) => {
    const params = new URLSearchParams(searchParams);

    const newTags = tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag];

    params.delete('tags');
    newTags.forEach((t) => params.append('tags', t));

    setSearchParams(params);
  };

  return (
    <div className="border-divider-color flex flex-col gap-200 border-r px-200 py-150">
      <div className="py-150">
        <LogoHeader />
      </div>

      <div className="flex flex-col gap-100">
        <SideBarPages />

        <Divider />

        <div className="flex h-[20px] items-center self-stretch px-100">
          <h1 className="text-preset-4 text-neutral-500">Tags</h1>
        </div>

        <div className="gap-050 flex flex-col items-start self-stretch">
          {getTags().map((tag) => (
            <SideBarTag
              key={tag}
              tag={{
                tagName: tag,
              }}
              onClick={(tag) => toggleTag(tag)}
              isActive={tags.includes(tag)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
