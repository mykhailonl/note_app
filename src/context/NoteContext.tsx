import React, { createContext, useEffect, useState } from 'react';

import mockData from '../api/mockData.json';
import { NoteTagType, NoteType } from '../types/Notes/NotesType.ts';

export interface NotesContextType {
  notes: NoteType[];
  getTags: () => NoteTagType[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext<NotesContextType>({
  notes: [],
  getTags: () => [],
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
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
