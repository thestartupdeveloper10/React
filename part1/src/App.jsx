import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
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
    noteService
    .create(noteObject)
    .then((response)=>{
      console.log(response)
    })
    setNotes(notes.concat(noteObject))
    setNewNote('')
    }

    const handleNoteChange = (event) => {    
    console.log(event.target.value)
    setNewNote(event.target.value)  
    }
    const notesToShow = showAll?notes: notes.filter(note => note.important === true)


    // toggle importance
    const toggleImportanceOf = (id) => {   
       console.log(`importance of ${id} needs to be toggled`) 
      //  const url = `http://localhost:3001/notes/${id}`
       const note = notes.find(n => n.id === id)
       const changedNote = { ...note, important: !note.important }
     
       noteService
       .update(id,changedNote)
       .then(response => {
         setNotes(notes.map(note => note.id !== id ? note : response.data))
       })
      }
  
  
  
    return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* {notes.map(note => 
          <Note key={note.id} note={note} />
        )} */}
        {notesToShow.map(note =><Note key={note.id} note={note}
        toggleImportance={() => toggleImportanceOf(note.id)}
        />
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
