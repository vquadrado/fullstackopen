import { useState } from 'react'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const HasVotes = ({ votes }) => {
  return (
    <>
      has {votes} votes
      <br />
    </>
  )
}

const DisplayAnecdote = ({ anecdote }) => {
  return (
    <>
      {anecdote}
      <br />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const randomIndex = getRandomInt(0, anecdotes.length - 1)
  const [selected, setSelected] = useState(randomIndex)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => {
    setSelected(getRandomInt(0, anecdotes.length - 1))
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  // debug print
  console.log('selected', selected)
  console.log('randomIndex', randomIndex)
  console.log('anecdotes[selected]', anecdotes[selected])
  const mostVotesIndex = votes.indexOf(Math.max(...votes))
  console.log('mostVotesIndex', mostVotesIndex)
  console.log('anecdotes[mostVotesIndex]', anecdotes[mostVotesIndex])
  console.log('votes[mostVotesIndex]', votes[mostVotesIndex])

  return (
    <div>
      <Header text="Anecdote of the day" />
      <DisplayAnecdote anecdote={anecdotes[selected]} />
      <HasVotes votes={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNext} text="next anecdote" />
      <br />
      <Header text="Anecdote with most votes" />
      <DisplayAnecdote anecdote={anecdotes[mostVotesIndex]} />
      <HasVotes votes={votes[mostVotesIndex]} />
    </div>
  )
}

export default App