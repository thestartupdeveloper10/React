import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true) 

  const addNote = (event) => {
      event.preventDefault() 
      console.log('button clicked', event.target)
      const noteObject = {
        content: newNote,
        important: Math.random() < 0.5,
        id: notes.length + 1,
      }

      setNotes(notes.concat(noteObject))
      setNewNote('')
      }

  const handleNoteChange = (event) => {    
      console.log(event.target.value)
      setNewNote(event.target.value)  
      }
      const notesToShow = showAll?notes: notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* {notes.map(note => 
          <Note key={note.id} note={note} />
        )} */}
        {notesToShow.map(note =><Note key={note.id} note={note} />
        )}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
        </button>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
        </form>
    </div>
  )
}

export default App 

