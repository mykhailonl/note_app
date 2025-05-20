import { NoteTagType } from '../Notes/Notes.ts';

export interface SideBarTagProps {
  tag: {
    tagName: NoteTagType;
  };
  styles?: {
    containerStyles?: string;
    iconStyles?: string;
    textStyles?: string;
  };
  onClick: (t: NoteTagType) => void;
  isActive: boolean;
}
