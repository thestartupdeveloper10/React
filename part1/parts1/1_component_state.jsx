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

        const App = () => {
            const name = 'James'
            const age = 19
            
            return (
              <div>
                <Hello name ={name} age={age} />
                <Hello name ='ibande' age={26 + 10} />
              </div>
            )
          }
          
export default App