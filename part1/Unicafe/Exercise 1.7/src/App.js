import { useState } from 'react'

const GiveAverage = (props) =>{
  const totalVotes = props.good + props.neutral +props.bad
  const totalValue = props.good + (props.bad * - 1)
  return (
    <div>
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
        {console.log("good" + good)}
      good
      </button>  
      <button onClick={() => setNeutral(neutral+1)}>
      {console.log("neutral " + neutral)}
      neutral
      </button>  
      <button onClick={() => setBad(bad+1)}>
        {console.log(bad)}
      bad
      </button>  
      <h1>statistics</h1>
      <div>
        good {good}
        <br></br>
        neutral {neutral} 
        <br></br>
        bad {bad} 
        <br></br>
        all {good+neutral+bad}  
      </div>
      <GiveAverage good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App