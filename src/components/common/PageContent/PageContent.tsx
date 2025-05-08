import { useParams } from 'react-router-dom';

import { NoteViewManager } from '../NoteViewManager';
import { SideBarNotes } from '../SideBarNotes';
import { SideBarRight } from '../SideBarRight';

export const PageContent = () => {
  const { noteId } = useParams();

  return (
    <div className="flex flex-1 overflow-hidden">
      <SideBarNotes />

      <NoteViewManager />

      {noteId && <SideBarRight />}
    </div>
  );
};

export default PageContent;
