import { useState } from 'react'

const Statistics = (props) => {
  const totalVotes = props.good + props.neutral +props.bad
  const totalValue = props.good + (props.bad * - 1)
  return (
    <div>
      <h1>statistics</h1>
      <div>
        good {props.good}
        <br></br>
        neutral {props.neutral} 
        <br></br>
        bad {props.bad} 
        <br></br>
        all {props.good+props.neutral+props.bad}  
      </div>
      average {totalValue/totalVotes}
      <br></br>
      positive {(props.good/totalVotes)*100} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}>
      good
      </button>  
      <button onClick={() => setNeutral(neutral+1)}>
      neutral
      </button>  
      <button onClick={() => setBad(bad+1)}>
      bad
      </button>  
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App