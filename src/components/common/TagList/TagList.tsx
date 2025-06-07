import cn from 'classnames';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useNotes } from '../../../hooks/useNotes.ts';
import { NoteTagType } from '../../../types/Notes/Notes.ts';
import { TagListProps } from '../../../types/Tags/Tags.ts';
import { Divider } from '../Divider';
import { NoteStatusNotification } from '../NoteStatusNotification';
import { SideBarTag } from '../SideBarTag';

export const TagList = ({ mode, styles }: TagListProps) => {
  const { tags: tagList } = useNotes();
  const isSidebar = mode === 'sidebar';
  const hasTagsToDisplay = !!tagList.length;

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
    <>
      {isSidebar && (
        <div className="flex h-[20px] items-center self-stretch px-100">
          <h1 className="text-preset-4 text-neutral-500">Tags</h1>
        </div>
      )}

      <div
        className={cn(
          styles?.containerStyles,
          isSidebar && 'w-[240px]',
          'gap-050 flex flex-col items-start self-stretch',
        )}
      >
        {!isSidebar && !hasTagsToDisplay && <NoteStatusNotification notificationType="noTagsYet" />}

        {tagList.map((tag, index) => (
          <React.Fragment key={tag}>
            <SideBarTag
              tag={{
                tagName: tag,
              }}
              onClick={(tag) => toggleTag(tag)}
              isActive={tags.includes(tag)}
              styles={{
                containerStyles: cn(isSidebar && 'px-150'),
              }}
            />

            {index < tagList.length - 1 && !isSidebar && <Divider styles="w-full h-[1px]" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
