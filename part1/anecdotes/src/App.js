import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const randomIndex = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(randomIndex());
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [maxVotes, setMaxVotes] = useState(0);

  const getNextAnecdote = () => {
    let next = randomIndex();
    while (next === selected) {
      next = randomIndex();
    }
    setSelected(next);
  };

  const vote = () => {
    const v = [...votes];
    v[selected]++;
    if (v[selected] > v[maxVotes]) setMaxVotes(selected);
    setVotes(v);
  };

  const Anecdote = ({ i }) => (
    <>
      <p>{anecdotes[i]}</p>
      <p>{`has ${votes[i]} ${votes[i] === 1 ? 'vote' : 'votes'}`}</p>
    </>
  );

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote i={selected} />
      <button onClick={vote}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote i={maxVotes} />
    </div>
  );
};

export default App;
