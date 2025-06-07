import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import mockData from '../api/mockData.json';
import { NoteTagType, NoteType } from '../types/Notes/Notes.ts';

export type NoteIdType = number;

export interface NotesContextType {
  notes: NoteType[];
  tags: NoteTagType[];
  getById: (id: NoteIdType) => NoteType | undefined;
  filterNotes: (query: string, tags: NoteTagType[]) => NoteType[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext<NotesContextType>({
  notes: [],
  tags: [],
  getById: () => undefined,
  filterNotes: () => [],
});

interface NotesProviderProps {
  children: React.ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    setNotes(mockData.notes);
  }, []);

  //#region note methods
  const addNote = useCallback(() => {
    // TODO: implement
  }, []);

  const updateNote = useCallback(() => {
    // TODO: implement
  }, []);

  const archiveNote = useCallback(() => {
    // TODO: implement
  }, []);

  const deleteNote = useCallback(() => {
    // TODO: implement
  }, []);
  //#endregion

  const getById = useCallback(
    (targetId: NoteIdType) => {
      return notes.find((note) => note.id === targetId);
    },
    [notes],
  );

  const tags = useMemo((): NoteTagType[] => {
    const allTags = notes.flatMap((note) => note.tags);

    return [...new Set(allTags)];
  }, [notes]);

  const filterByQuery = useCallback((notesToFilter: NoteType[], query: string) => {
    if (!query.trim()) {
      return notesToFilter;
    }

    return notesToFilter.filter((note) =>
      [note.title, note.content].join(' ').toLowerCase().includes(query.toLowerCase()),
    );
  }, []);

  const filterByTags = useCallback((notesToFilter: NoteType[], tags: NoteTagType[]) => {
    if (!tags.length) {
      return notesToFilter;
    }

    return notesToFilter.filter((note) => tags.every((tag) => note.tags.includes(tag)));
  }, []);

  const filterNotes = useCallback(
    (query?: string, tags?: NoteTagType[]) => {
      let filtered = notes;

      if (query?.trim()) {
        filtered = filterByQuery(filtered, query);
      }

      if (tags?.length) {
        filtered = filterByTags(filtered, tags);
      }

      return filtered;
    },
    [notes, filterByQuery, filterByTags],
  );

  const value = useMemo(
    () => ({
      notes,
      setNotes,
      addNote,
      updateNote,
      archiveNote,
      deleteNote,
      tags,
      getById,
      filterNotes,
    }),
    [notes, addNote, updateNote, archiveNote, deleteNote, getById, filterNotes, tags],
  );

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
