import { NoteTagsProps } from '../../../types/Notes/Notes.ts';
import { NoteTag } from '../NoteTag';

export const NoteTags = ({ tags }: NoteTagsProps) => {
  return (
    <div className="flex flex-wrap content-center items-center gap-1 self-stretch">
      {tags.map((tag) => (
        <NoteTag tag={tag} key={tag} />
      ))}
    </div>
  );
};
