import React from 'react'

function Course(props) {
  return (
    <>
    <h1>9. Course Component with Array Props</h1>
    courseName : {props.courseName} <br/> 
    modules : {props.modules} <br/>
    </>
  )
}

export default Course
