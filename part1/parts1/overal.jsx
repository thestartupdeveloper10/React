import { useState } from 'react'

const Hello = ({ name, age }) => {
  // const name = props.name 
  // const age = props.age
  // const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age 
      
  console.log({ name, age });
  return (  
    <div>
      <p>Hello {name},your are {age} years old</p>
      <p>You were born on {bornYear()}</p>
      </div>
      )}

// display counter
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



// conditional rendering
const History = (props) => {  if (props.allClicks.length === 0) {   
   return (<div>the app is used by pressing the buttons</div>)} 
 return (<div>button press history: {props.allClicks.join(' ')}</div>)
}

const Footer = () => {
        return (
          <div>
            greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
          </div>
        )
      }

function App() {
  const name = 'James'
  const age = 19
  console.log('Hello from component')
  const now = new Date();
  const a = 10
  const b = 20
  console.log(now,a,b);

  // const {counter} = props

  const [ counter, setCounter ] = useState(0)
  // setTimeout(() => setCounter(counter + 1),1000)
  // console.log('rendering...', counter)
  console.log('rendering with counter value', counter)


  // complex state 1

  // const [left,setLeft]=useState(0)
  // const [right,setRight]=useState(0)

// complex state 2: using single state

const [clicks,setClicks]=useState({
  left:0,
  right:0,
})


// Handling Arrays
const [left, setLeft] = useState(0)
const [right, setRight] = useState(0)
const [allClicks, setAll] = useState([])
const [total, setTotal] = useState(0)

// const handleLeftClick = () => {   
//    setAll(allClicks.concat('L')) 
//    console.log('left before', left)  
//    setLeft(left + 1) 
//    console.log('left after', left)
//    setTotal(left + right)
//    }

const handleLeftClick = () => {
  setAll(allClicks.concat('L'))
  const updatedLeft = left + 1
  setLeft(updatedLeft)
  setTotal(updatedLeft + right) 
}

// const handleRightClick = () => {    
//     setAll(allClicks.concat('R'))
//     console.log('right before', right)   
//       setRight(right + 1) 
//       console.log('right after', right)  
//       setTotal(left + right)
//     }

// debugger

const handleRightClick = () => {
  setAll(allClicks.concat('R'))
  const updatedRight = right + 1
  setRight(updatedRight)
  setTotal(updatedRight + left) 
}

// const handleLeftClick = () => {
//   const newClicks = { 
//     left: clicks.left + 1, 
//     right: clicks.right 
//   }
//   setClicks(newClicks)
// }

// const handleRightClick = () => {
//   const newClicks = { 
//     left: clicks.left , 
//     right: clicks.right + 1 
//   }
//   setClicks(newClicks)
// }

//complex state 3:introducing clicks

// const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })


  // Event handlers
  const handleClick = () =>{
    console.log('clicked')
  }
// alternatives to function
// const increaseByOne = () => setCounter(counter + 1) 
// const decreaseByOne = () => setCounter(counter - 1)  
// const setToZero = () => setCounter(0)

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

// rendering objects
const friends = [
  { name: 'Martin', age:34},
  { name: 'Josh', age:24},
]
// rendering arrays
const numbers =[4,8]
  return (
    <>
      {/* <div> */}
        <p>Hello world</p>
        <Hello name ={name} age={age} />
        <Hello name ='ibande' age={26 + 10} />
        <p>{friends[0].name} is {friends[0].age}</p>
        <p>{friends[1].name} is {friends[1].age}</p>
        <p>{numbers}</p>
        <Display counter={counter}/>
        <button onClick={handleClick}>
          plus
        </button>
        {/* <button onClick={() => setCounter(counter + 1)}>
         ADD counter
        </button>
        <button onClick={() => setCounter(0)}> 
        Reset Counter
        </button> */}

{/* <button onClick={increaseByOne}>
         ADD counter
</button>

<button onClick={setToZero}> 
        Reset Counter
</button>  */}
 <Button onClick={increaseByOne} text='ADD'/>
 <Button onClick={decreaseByOne} text='SUB'/>
 <Button onClick={setToZero} text='Reset'/>


 {/* {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
{right} */}
        
        {/* {clicks.left}
      <button onClick={handleLeftClick }>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
{clicks.right} */}

{left}
      <button onClick={handleLeftClick }>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
{right}
<p>{allClicks.join(' ')}</p>
<History allClicks={allClicks} />
<p>total {total}</p>
        <Footer />
      {/* </div> */}
    </>
  )
}

export default App
