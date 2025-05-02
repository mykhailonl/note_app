import React, { createContext, useEffect, useState } from 'react';
import { NoteType } from '../types/Notes/NotesType.ts';

import mockData from '../api/mockData.json';

export interface NotesContextType {
  notes: NoteType[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext<NotesContextType>({
  notes: [],
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

  const value = {
    notes,
    setNotes,
    addNote,
    updateNote,
    archiveNote,
    deleteNote,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
