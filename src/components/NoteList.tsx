import Note from "../models/Note";

interface Props {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NoteList = ({ notes, onDelete }: Props) => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.content}
          <button className="deleteButton" onClick={() => onDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
