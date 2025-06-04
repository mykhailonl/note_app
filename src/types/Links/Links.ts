import { MenuIconName, SideBarIconName } from '../Icons/IconsType.ts';

export interface MenuBarLinkProps {
  href: string;
  iconName: MenuIconName;
  altText?: string;
  showText?: boolean;
  styles?: {
    linkStyles?: string;
    imgStyles?: string;
  };
}

export interface SideBarLinkProps {
  href: string;
  iconName: SideBarIconName;
  altText?: string;
  styles?: {
    linkStyles?: string;
    ingStyles?: string;
  };
}

export type LinkTypes = '/' | '/?mode=archive' | '/?mode=search' | '/?mode=tags';
