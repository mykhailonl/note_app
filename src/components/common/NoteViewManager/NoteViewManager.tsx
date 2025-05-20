import { Outlet } from 'react-router';
import { useParams } from 'react-router-dom';

export const NoteViewManager = () => {
  const { noteId } = useParams();

  return (
    <div className="flex flex-1 grow">
      {noteId && (
        <div className="w-full border-r border-divider-color">
          <Outlet />
        </div>
      )}
    </div>
  );
};
