import { useState } from 'react'
import Note from "./models/Note"
import NoteList from "./components/NoteList"
import './App.css'

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");

  const deleteNote = async (id: number) => {
    console.log(id)
  };

  return (
    <>
      <h1>Welcome to Noteshare!</h1>
      <div>
        <input
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button>
          Add
        </button>
      </div>

      <NoteList notes={notes} onDelete={deleteNote} />
    </>
  )
}

export default App
