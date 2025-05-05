import { NoteList } from '../NoteList';

import { useNotes } from '../../../hooks/useNotes.ts';

export const HomeContent = () => {
  const { notes } = useNotes();

  return (
    <div className="mobile-grid bg-neutral-0 border-neutral-0 tablet:tablet-grid tablet:py-300 box-border rounded-t-xl py-250">
      <div className="col-span-full flex flex-col items-start gap-200">
        <h1 className="text-preset-1 self-stretch font-sans text-neutral-950">All Notes</h1>

        <NoteList userNotes={notes} />
      </div>
    </div>
  );
};

export default HomeContent;
