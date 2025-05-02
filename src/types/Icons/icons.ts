import { ReactComponent as HomeIcon } from '../../assets/images/icon-home.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/images/icon-archive.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';
import { ReactComponent as TagIcon } from '../../assets/images/icon-tag.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/icon-settings.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg';
import { ReactComponent as ClockIcon } from '../../assets/images/icon-clock.svg';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/images/icon-arrow-left.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/icon-delete.svg';

// Dict to store icon names as keys and imported components as values
export const iconComponents = {
  home: HomeIcon,
  archive: ArchiveIcon,
  search: SearchIcon,
  tag: TagIcon,
  settings: SettingsIcon,
  plus: PlusIcon,
  clock: ClockIcon,
  logo: LogoIcon,
  leftArrow: LeftArrowIcon,
  delete: DeleteIcon,
};

// Type for icons based on dict keys
export type IconName = keyof typeof iconComponents;
