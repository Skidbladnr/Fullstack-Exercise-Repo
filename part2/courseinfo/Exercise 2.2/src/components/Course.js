import React from 'react'

const Header = ({name}) => {
    return(
        <h2>{name}</h2>
    )
}
const Body = ({parts}) => {
    const partCourses = parts.map(p =>
        <Part
            key={p.id}
            part = {p}
        />
    )
    console.log(partCourses)
    return(
        <ul>{partCourses}</ul> 
    )
}
const Part = ({parts}) => {
    return (
        <li>{parts.name} {parts.exercise}</li>
    )
}
const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Body parts={course.parts} />
      </div>
    )
}
export default Course