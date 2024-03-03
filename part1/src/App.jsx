import { useState } from 'react'

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}


// buttons 
const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const handleClick = () => { 
        console.log('clicked')
        setCounter(counter+1)
    }

    // alternatives to function
    const increaseByOne = () => {
      console.log('increasing, value before', counter) 
         setCounter(counter + 1)
    }
    
    const decreaseByOne = () => { 
      console.log('decreasing, value before', counter)  
        setCounter(counter - 1)
    }
    
    const setToZero = () => {
      console.log('resetting to zero, value before', counter)  
        setCounter(0)
    }


    return (
      <div>
        <Display counter={counter}/>

        <button onClick={handleClick}>plus</button>

        {/* define the function directly inside the button */}
        <Button onClick={increaseByOne} text='plus'/>      
        <Button onClick={setToZero} text='zero' />          
        <Button onClick={decreaseByOne} text='minus'/>
        </div>
    )
  }


export default App