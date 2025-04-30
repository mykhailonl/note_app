import { ReactComponent as HomeIcon } from '../../assets/images/icon-home.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/images/icon-archive.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';
import { ReactComponent as TagIcon } from '../../assets/images/icon-tag.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/icon-settings.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg';

// Dict to store icon names as keys and imported components as values
export const iconComponents = {
  home: HomeIcon,
  archive: ArchiveIcon,
  search: SearchIcon,
  tag: TagIcon,
  settings: SettingsIcon,
  plus: PlusIcon,
};

// Type for icons based on dict keys
export type IconName = keyof typeof iconComponents;
