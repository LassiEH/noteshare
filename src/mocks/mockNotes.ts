import Note from "../models/Note";

// Create mock notes to add to simulate backend storage
let mockNotes: Note[] = [
  new Note("Wahoo", 1),
  new Note("Wahoo part 2", 2),
];

export const mockApi = {
  // Promise for asynchronous data
  getNotes: async (): Promise<Note[]> => {
    return mockNotes;
  },

  addNote: async (content: string): Promise<Note> => {
    const newNote = new Note(content);
    mockNotes.push(newNote);
    return newNote;
  },

  deleteNote: async (id: number): Promise<void> => {
    mockNotes = mockNotes.filter(n => n.id !== id);
  }
};