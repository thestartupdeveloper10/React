import { useState } from 'react'

const App = () => {
    // const {counter} = props
     const [ counter, setCounter ] = useState(0)
     setTimeout(() => setCounter(counter + 1),1000)
     
    console.log('rendering...', counter)
    console.log('rendering with counter value', counter)
        return (
        <div>
        <div>{counter}</div>
        </div>
            )
          }
          
export default App
