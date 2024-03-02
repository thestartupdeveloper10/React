const Hello = (props) => {  
  const bornYear = () => {    const yearNow = new Date().getFullYear()
        return yearNow - props.age  
      }
  console.log(props);
  return (  
    <div>
      <p>Hello {props.name},your are {props.age} years old</p>
      <p>You were born on {bornYear()}</p>
      </div>
      )}

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
        <Footer />
      {/* </div> */}
    </>
  )
}

export default App
