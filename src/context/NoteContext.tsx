import React, { createContext, useEffect, useState } from 'react';

import mockData from '../api/mockData.json';
import { NoteTagType, NoteType } from '../types/Notes/Notes.ts';

export type NoteIdType = number;

export interface NotesContextType {
  notes: NoteType[];
  getTags: () => NoteTagType[];
  getById: (id: NoteIdType) => NoteType | undefined;
}

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext<NotesContextType>({
  notes: [],
  getTags: () => [],
  getById: () => undefined,
});

interface NotesProviderProps {
  children: React.ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    setNotes(mockData.notes);
  }, []);

  const addNote = () => {};

  const updateNote = () => {};

  const archiveNote = () => {};

  const deleteNote = () => {};

  const getById = (targetId: NoteIdType) => {
    return notes.find((note) => note.id === targetId);
  };

  const getTags = (): string[] => {
    const allTags = notes.flatMap((note) => note.tags);

    return [...new Set(allTags)];
  };

  const value = {
    notes,
    setNotes,
    addNote,
    updateNote,
    archiveNote,
    deleteNote,
    getTags,
    getById,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
