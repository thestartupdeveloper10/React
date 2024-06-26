import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'




const App = () => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('promise fulfilled')
        setNotes(initialNotes)
      })
      .catch(err => {
        console.log('fail')
      })

     

  }, [])

  //  conditional rendering
// do not render anything if notes is still null
  if (!notes) { 
    return null 
  }
  
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault() 
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      // id: notes.length + 1,
    }

    // create new note
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
       .catch(error => {
        console.log('fail')
        console.log(error)
        setErrorMessage(`Note '${note.content}' was already removed from server`)       
        setTimeout(() => {setErrorMessage(null)}, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
      }
  
  
  
    return (
    <div>
      <h1>Notes</h1>
      < Notification message={errorMessage} />
      <ul>
        {/* {notes.map(note => 
          <Note key={note.id} note={note} />
        )} */}
        {notesToShow.map(note =>
        <Note 
        key={note.id} 
        note={note}
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
        <Footer />
    </div>
  )
}

export default App
