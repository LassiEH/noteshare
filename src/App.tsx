import { useEffect, useState } from 'react'
import Note from "./models/Note"
import NoteList from "./components/NoteList"

//import { mockApi } from './mocks/mockNotes'

import './App.css'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    if (!res.ok) throw new Error("Failed fetching the notes");
    const data = await res.json()
    setNotes(data);
  };

  const deleteNote = async (id: string) => {
    const res = await fetch(`/api/notes?id=${id}`, {
      method: "DELETE"
    });
    if (!res.ok) throw new Error("Failed to delete note");
    fetchNotes();
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ content: newNote })
    })
    if (!res.ok) throw new Error("Failed to add note")
    setNewNote("");
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <h1>Welcome to Noteshare!</h1>
      <div>
        <input
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>
          Add
        </button>
      </div>

      <NoteList notes={notes} onDelete={deleteNote} />
    </>
  )
}

export default App
