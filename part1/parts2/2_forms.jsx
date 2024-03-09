import { useState } from 'react'

import Note from "./components/Note"


const App = (props) => {

  const [notes,setNotes] = useState(props.notes)
// controlled Componets
  const [newNote,setNewNote] = useState('put a new note')
// filtering 
 const [showAll,setShowAll]=useState(true)
 

  const notesToShow = showAll ? notes : notes.filter((note)=>{
   return  note.important === true
  })

//  functions
  const Addnote = (e) => {
    e.preventDefault()
    console.log('button clicked', e.target) 
    const noteObject = {
      content:newNote,
      important:Math.random()>0.5,
      id:notes.length+1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      {/* <ul>
      {
        notes.map((note)=>{
        return <Note key={note.id} note={note}/> 
        })
      }
      </ul> */}
      <ul>
      {
        notesToShow.map((note)=>{
        return <Note key={note.id} note={note}/> 
        })
      }
      </ul>
      <button onClick={()=>{setShowAll(!showAll)}}>
        Show {showAll?'important':'All'}
      </button>
      <form onSubmit={Addnote} >
        <input type="text" value={newNote} onChange={handleChange}/>
        <button type='submin'>Save</button>
      </form>
    </div>
  )
}

export default App

