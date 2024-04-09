import { useState } from 'react'

const Button =({handleClick,text}) =>{
  return (
    <button onClick={handleClick}>{text}</button>
  )

}

function App() {
  const [value, setValue] = useState(10)

  // defining function outside
  const handleClick = () => {    
    console.log('clicked the button')  
      setValue(0)
    }


  return (
    <>
      <div>
      {value}
      {/* <button onClick={() => setValue(0)}>reset to zero</button> */}
     <Button handleClick={handleClick} text="reset to zero" />
    </div>
    </>
  )
}

export default App
