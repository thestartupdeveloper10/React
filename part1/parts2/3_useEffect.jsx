import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

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
