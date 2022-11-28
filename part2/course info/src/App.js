
import React from 'react';

const Header = ({name}) => {
  return(
      <h2>{name}</h2>
  )
}
const Body = ({parts}) => {
  return(
    parts.map((e) => {
      return(
        <p>{e.name} {e.exercises}</p>
      )
    }
    )
  );
}
const Total = ({parts}) => {
  let exerciseTotal = 0;
  parts.map((e) => {
    exerciseTotal += e.exercises
  })
  return(
    <b>There are a total of {exerciseTotal} exercises</b>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Body parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App