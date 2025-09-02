import React from 'react'

function User(props) {
  return (
    <>
    <h1>1.User Profile Card</h1>
    name : {props.name} <br />
    email : {props.email} <br /> 
    role : {props.role}     
    </>
  )
}
export default User