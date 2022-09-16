import { useState } from 'react'
var counter = 0

const StatisticLine = (props) => {
  var voteNum = props.value[0] + props.value[1] + props.value[2] 
  var totalScore = props.value[0] + (props.value[2] * - 1)
  var sendValue = 0
  if(voteNum == 0 && counter == 0){
    counter += 1
    return (
      <div>No feedback given.</div>
    )
  }
  else if(voteNum != 0){
    if(props.text.valueOf() == "average"){
      sendValue = totalScore/voteNum
    }
    else if(props.text.valueOf() =="positive"){
      sendValue = (props.value[0]/voteNum) + " %"
    }
    else if(props.text.valueOf() =="all"){
      sendValue = voteNum
    }
    else if(props.text.valueOf() =="good"){
      sendValue = props.value[0]
    }
    else if(props.text.valueOf() =="neutral"){
      sendValue = props.value[1]
    }
    else if(props.text.valueOf() =="bad"){
      sendValue = props.value[2]
    }
    return (
      <table>
        <tbody>
          <tr>
           <td>{props.text}</td>
           <td>{sendValue}</td>
          </tr>
        </tbody>
      </table>
    )
  }  
}

const Button = (props) => {
  return (
    <button onClick={() => props.set(props.rate+1)}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={[props.good, props.neutral, props.bad]}/>
      <StatisticLine text="neutral" value={[props.good, props.neutral, props.bad]}/>
      <StatisticLine text="bad" value={[props.good, props.neutral, props.bad]}/>
      <StatisticLine text="all" value={[props.good, props.neutral, props.bad]}/>
      <StatisticLine text="average" value={[props.good, props.neutral, props.bad]}/>
      <StatisticLine text="positive" value={[props.good, props.neutral, props.bad]}/>
    </div>
  )   
}
  
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" set={setGood} rate={good}/>
      <Button text="neutral" set={setNeutral} rate={neutral}/>
      <Button text="bad" set={setBad} rate={bad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App