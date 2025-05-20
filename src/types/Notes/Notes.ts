// TODO lastEdited to Date?

import { IconName } from '../Icons/IconsType.ts';

export interface NoteType {
  id: number;
  title: string;
  tags: NoteTagType[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export type NoteTagType = string;

export interface NoteProps {
  note: NoteType;
  isActive: boolean;
}

export interface NoteListProps {
  userNotes: NoteType[];
  styles?: {
    containerStyles?: string;
  };
}

export interface NotePropertiesProps {
  tags: NoteTagType[];
  lastEdited: string;
}

export interface NotePropertyProps {
  iconName: IconName;
  tags?: NoteTagType;
  lastEdited?: string;
}

export interface NoteTagProps {
  tag: NoteTagType;
}

export interface NoteTagsProps {
  tags: NoteTagType[];
}
