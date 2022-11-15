import { useState } from 'react'

const DisplayStats = (props) => <div>has {props.score} votes</div>;  
const BestAnecdote = ({ anecdote }) => <div>{anecdote}</div>;

const App = () => {
  const headlines = {
    hdr1: "Anecdote of the day",
    hdr2: "Highest rated anecdote"
  }
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  const clickHandler = () => {
    setSelected(Math.floor(Math.random() * 7));
  }
  const voteHandler = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  }
  const { maxVote, index } = vote.reduce(
    (maxVote, temp, index) => {
      if (temp > maxVote.maxVote) {
        return { maxVote: temp, index };
      }
      return maxVote;
    },
    { maxVote: Number.NEGATIVE_INFINITY, index: -1 }
  );
  
  return (
    <div>
      <h1>{headlines.hdr1}</h1>
      {anecdotes[selected]}
      <DisplayStats score={vote[selected]}></DisplayStats>
      <button onClick={voteHandler}> vote</button>
      <button onClick={clickHandler}> Next Annecdote</button>
      <h1>{headlines.hdr2}</h1>
      <BestAnecdote anecdote={anecdotes[index]} />
      <DisplayStats score={maxVote}></DisplayStats>
      
    </div>   
  )
}

export default App      