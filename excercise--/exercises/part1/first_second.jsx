import React, { useState } from 'react';

const Display = ({ head }) => {
  return (
    <div>
      <h1>{head}</h1>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ stats, good, neutral, bad }) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    const total = good + neutral + bad;
    const avg = total > 0 ? (good * 1 + neutral * 0 + bad * -1) / total : 0;
    const pct = (good / total) * 100;
    return (
      <div>
        <h1>{stats}</h1>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={avg.toFixed(2)} />
        <StatisticLine text="Positive" value={`${pct.toFixed(2)}%`} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>{stats}</h1>
        <p>No feedback given</p>
      </div>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const head = 'Give feedback';
  const stats = 'Statistics';

  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Display head={head} />
      <Button handleClick={() => handleFeedback('good')} text="Good" />
      <Button handleClick={() => handleFeedback('neutral')} text="Neutral" />
      <Button handleClick={() => handleFeedback('bad')} text="Bad" />
      <Statistics stats={stats} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
