import React from 'react'

function Movie(props) {
  return (
    <>
    <h1>7. Movie Component with Nested Props</h1>
    title : {props.title}<br/>
    director : {props.director.name} <br/>
    age : {props.director.age}
    </>
  )
}

export default Movie
