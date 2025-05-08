import { ReactComponent as ArchiveIcon } from '../../assets/images/icon-archive.svg';
import { ReactComponent as LeftArrowIcon } from '../../assets/images/icon-arrow-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/images/icon-chevron-right.svg';
import { ReactComponent as ClockIcon } from '../../assets/images/icon-clock.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/icon-delete.svg';
import { ReactComponent as GoogleIcon } from '../../assets/images/icon-google.svg';
import { ReactComponent as HideInputIcon } from '../../assets/images/icon-hide-password.svg';
import { ReactComponent as HomeIcon } from '../../assets/images/icon-home.svg';
import { ReactComponent as InfoIcon } from '../../assets/images/icon-info.svg';
import { ReactComponent as PlusIcon } from '../../assets/images/icon-plus.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';
import { ReactComponent as SettingsIcon } from '../../assets/images/icon-settings.svg';
import { ReactComponent as ShowInputIcon } from '../../assets/images/icon-show-password.svg';
import { ReactComponent as TagIcon } from '../../assets/images/icon-tag.svg';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

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
  chevronRight: ChevronRightIcon,
  google: GoogleIcon,
  show: ShowInputIcon,
  hide: HideInputIcon,
  info: InfoIcon,
};

// Type for icons based on dict keys
export type IconName = keyof typeof iconComponents;

// Type used in mapping inside Menu Bar Icons to get text values with safety;
export type MenuIconName = Extract<IconName, 'home' | 'search' | 'archive' | 'tag' | 'settings'>;

// Type used in mapping inside Side Bar Icons to get text values with safety;
export type SideBarIconName = Extract<IconName, 'home' | 'archive'>;

// Type used in mapping inside Right Side Bar Icons to get text values with safety;
export type RightSideBarIconName = Extract<IconName, 'delete' | 'archive'>;
