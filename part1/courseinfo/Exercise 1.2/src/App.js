const Header = (props) => {
  return (
  <div>
    <h1>{props.hcourse}</h1>
  </div> 
  )
}
const Part = (props) => {
  return (
  <div> 
    <p>
      {props.name} {props.number}
    </p>
  </div>
  )
}
const Content = (props) => {
  return (
  <div>
    <Part name={props.part1} number={props.exercises1} />
    <Part name={props.part2} number={props.exercises2} />
    <Part name={props.part2} number={props.exercises3} />
  </div>
  )
}
const Total = (props) => {
  return(
  <div>
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
  </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header hcourse={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3} />      
    </div>
  )
}

export default App