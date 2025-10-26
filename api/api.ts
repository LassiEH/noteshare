import Note from "./src/models/Note";

export const api = {
  getNotes: async (): Promise<Note[]> => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    return data.map((n: any) => new Note(n.content, n.id));
  },

  addNote: async (content: string): Promise<Note> => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    });
    const data = await res.json();
    return new Note(data.content, data.id);
  },

  deleteNote: async (id: string | number) => {
    await fetch(`/api/notes?id=${id}`, { method: "DELETE" });
  }
};
