import { NoteTagType } from '../../../types/Notes/NotesType.ts';
import { NoteTag } from '../NoteTag';

export const NoteTags = ({ tags }: { tags: NoteTagType[] }) => {
  return (
    <div className="flex flex-wrap content-center items-center gap-1 self-stretch">
      {tags.map((tag) => (
        <NoteTag tag={tag} key={tag} />
      ))}
    </div>
  );
};

export default NoteTags;
