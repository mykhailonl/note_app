import { NoteTagProps } from '../../../types/Notes/Notes.ts';

export const NoteTag = ({ tag }: NoteTagProps) => {
  return (
    <div className="text-preset-6 rounded-4 text-text-primary bg-noteTag-bg flex content-center items-center px-[6px] py-[2px]">
      {tag}
    </div>
  );
};
