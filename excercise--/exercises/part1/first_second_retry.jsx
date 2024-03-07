import { useState } from "react";

const Header = ({header}) => {
  return ( 
    <div>
      <h1>{header}</h1>
    </div>
   );
}
 
const StatisticLine = ({text,value}) => {
  return ( 
    <p>{text}, {value}</p>
   );
}
 


const Statistics = ({title,good,neutral,bad}) => {
  const feedback = 'No feedback given'
 if(good > 0 || neutral > 0 || bad > 0) {
  const  total = good + neutral + bad;
 const avg = total > 0 ? (good * 1 + neutral * 0 + bad * -1) / total : 0;
 const perct = (good / total) * 100
  return ( 
    <div>
      <h1>{title}</h1>
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='All' value={total} />
      <StatisticLine text='Average' value={avg.toFixed(2)} />
      <StatisticLine text='Positive' value={perct.toFixed(2)} />
    </div>
   );
 }else{
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{feedback}</p>
      </div>
    </div>
  )
 }
}
 
const Button = ({handleClick,text}) => {
  return ( 
    <>
<button onClick={handleClick}>{text}</button>
    </>
   );
}
 


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header = 'Give feedback'
  const title='Statistics'

  const handleFeedback = (type) => {
    
    switch (type){
      case 'good':
        setGood(good+1)
        break
      case 'neutral':
        setNeutral(neutral+1)
        break
      case 'bad':
        setBad(bad+1)
        break
      default:
        break;
    }
  }
   
  return (  
    <>
    <div>
      <Header header={header} />
      <div>
        <Button handleClick={()=>{handleFeedback('good')}}  text='Good' />
        <Button handleClick={()=>{handleFeedback('neutral')}}  text='Neutral' />
        <Button handleClick={()=>{handleFeedback('bad')}}  text='Bad' />
      </div>
      <Statistics title={title} good={good} bad={bad} neutral={neutral}/>
    </div>
    </>
  );
}
 
export default App;
