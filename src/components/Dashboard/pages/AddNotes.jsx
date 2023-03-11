import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faAdd} from '@fortawesome/free-solid-svg-icons'

function AddNotes() {//in this we are saving the notes provided by the user and also give the user to delete the comment
  const [notes, setNotes] = useState([]);
  const placeholder = 'Your message';
  const noteInput = useRef(null);

  const addNote = useCallback(() => {
    const noteValue = noteInput.current.value.trim();

    if (noteValue !== '') {
      setNotes((prevNotes) => [...prevNotes, { text: noteValue, date: new Date() }]);
      noteInput.current.value = '';
    }
  }, []);

  const deleteNote = useCallback((index) => {
    setNotes((prevNotes) => [...prevNotes.slice(0, index), ...prevNotes.slice(index + 1)]);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
    }
  }, []);

  const sortedNotes = useMemo(() => {
    return notes.sort((a, b) => b.date - a.date);
  }, [notes]);

  return (
    <div className='body-ej4'>
      <h1>My Notes</h1>
      <div className='inpt5'>
      <input type="text" placeholder={placeholder}  ref={noteInput} />
      <button onClick={addNote}><FontAwesomeIcon icon={faAdd} />Add Note</button>
      </div>
 
      <ul>
        {sortedNotes.map((note, index) => (
          <li key={note.date.getTime()}>
            {note.text}
            <button onClick={() => deleteNote(index)}>     <FontAwesomeIcon icon={faTrash} /></button>
          </li>             
        ))}
      </ul>
    </div>
  );
}

export default AddNotes;