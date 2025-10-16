import Note from "../models/Note";

let mockNotes: Note[] = [
  new Note("Wahoo", 1),
  new Note("Wahoo part 2", 2),
];

export const mockApi = {
  getNotes: async (): Promise<Note[]> => {
    return mockNotes;
  }
};