import { useLocation, useParams } from 'react-router-dom';

import { SETTINGS } from '../../../types/Settings/Settings.ts';
import { NoteViewManager } from '../NoteViewManager';
import { SettingsList } from '../SettingsList';
import { SettingsViewManager } from '../SettingsViewManager';
import { SideBarNotes } from '../SideBarNotes';
import { SideBarRight } from '../SideBarRight';

export const PageContent = () => {
  const { noteId } = useParams();
  const { pathname } = useLocation();

  const isSettingsPage = pathname.startsWith('/settings');

  if (isSettingsPage) {
    return (
      <div className="flex flex-1 overflow-hidden">
        <div className="flex border-r border-divider-color px-400 py-250">
          <div className="flex w-[240px] flex-col gap-200">
            <SettingsList settings={SETTINGS} />
          </div>
        </div>

        <SettingsViewManager />
      </div>
    );
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      <SideBarNotes />

      <NoteViewManager />

      {noteId && <SideBarRight />}
    </div>
  );
};

export default PageContent;
