const Hello = (props) => {  return (  
    <div>
      <p>Hello {props.name}</p>
      </div>
      )}

function App() {
  console.log('Hello from component')
  const now = new Date();
  const a = 10
  const b = 20
  console.log(now,a,b);
  return (
    <>
      <div>
        <p>Hello world</p>
        <Hello name ='cliffe' />
        <Hello name ='ibande' />
      </div>
    </>
  )
}

export default App
