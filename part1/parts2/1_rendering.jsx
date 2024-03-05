// import { useState } from 'react'

import Note from "./components/Note"


const App = ({ notes }) => {


  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* manual way */}
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}

        {/* the easier correct way */}

      {
        notes.map((note)=>{
        return <Note key={note.id} note={note}/> 
        })
      }
        {/* the wrong way */}

        {/* {
        notes.map((note,i)=>{
        return <li key={i}>{note.content}</li>  
        })
      } */}
      </ul>
    </div>
  )
}

export default App

