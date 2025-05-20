import { NoteTagType } from '../../../types/Notes/NotesType.ts';

export const NoteTag = ({ tag }: { tag: NoteTagType }) => {
  return (
    <div className="text-preset-6 rounded-4 text-text-primary bg-noteTag-bg flex content-center items-center px-[6px] py-[2px]">
      {tag}
    </div>
  );
};

export default NoteTag;
