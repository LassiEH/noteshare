import { useEffect, useState } from 'react'
import Note from "./models/Note"
import NoteList from "./components/NoteList"

import { mockApi } from './mocks/mockNotes'

import './App.css'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    const data = await mockApi.getNotes();
    setNotes(data);
  };

  const deleteNote = async (id: number) => {
    console.log(id)
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    await mockApi.addNote(newNote);
    setNewNote("");
    fetchNotes();
  }

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
