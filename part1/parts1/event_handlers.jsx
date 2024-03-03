import { useState } from 'react'

function App() {
  const [value, setValue] = useState(10)

  const setToValue1 = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  const setToValue = (newValue) => () => { 
       console.log('value now', newValue)  // print the new value to console    
       setValue(newValue) 
       }
  // defining fuction outside
  const handleClick = () => {    
    console.log('clicked the button')  
      setValue(0)
    }

// a fuction that returns a function
  const hello = () => {    
    const handler = () => console.log('hello world')   
    return handler  
  }

//   const hello1 = (who) => {
//   const handler = () => { console.log('hello', who) }    
//   return handler 
//  }

 const hello1 = (who) => () => {
  console.log('hello', who)
}

  return (
    <>
      <div>
      {value}
      {/* <button onClick={() => setValue(0)}>reset to zero</button> */}
      <button onClick={handleClick}>reset to zero</button>
      <button onClick={hello()}>Function in function</button>
      <button onClick={hello1('world')}>button</button>
      <button onClick={hello1('react')}>button</button>
      <button onClick={hello1('function')}>button</button>

      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>

      <button onClick={() => setToValue1(1000)}>
        thousand
      </button>
    </div>
    </>
  )
}

export default App
