import React from 'react'

function Employee(props) {
  return (
    <>
    <h1>6. Employee Salary Component</h1>
    name : {props.name}<br/>
    department : {props.department}<br/>
    salary :{props.salary}
    </>
  )
}
export default Employee
