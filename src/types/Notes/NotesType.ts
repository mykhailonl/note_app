// TODO lastEdited to Date?

export interface NoteType {
  id: number;
  title: string;
  tags: NoteTagType[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
}

export type NoteTagType = string;
