import { useState } from 'react';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatLine = ({ text, val }) => (
  <tr>
    <td>{text}</td>
    <td>{val + (text === 'positive' ? '%' : '')}</td>
  </tr>
);

const Stats = (props) => {
  const { good, neutral, bad } = props.data;
  const all = good + neutral + bad;

  if (all === 0)
    return <span>No feedback given</span>;

  return (
    <>
      <table>
        <tbody>
          <StatLine text="good" val={good} />
          <StatLine text="neutral" val={neutral} />
          <StatLine text="bad" val={bad} />
          <StatLine text="all" val={all} />
          <StatLine text="average" val={(good - bad) / all} />
          <StatLine text="positive" val={(good * 100) / all} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div style={{ display: 'flex' }}>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <h1>statistics</h1>
      <Stats data={{ good, neutral, bad }} />
    </div>
  );
};

export default App;
