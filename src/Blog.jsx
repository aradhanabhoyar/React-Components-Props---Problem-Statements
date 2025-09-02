import React from 'react'

function Blog(props) {
  return (
    <>
    <h1>4. Blog Post Component</h1>
    title : {props.title} <br/>
    author : {props.author}<br/>
    content : {props.content} <br/>      
    </>
  )
}
export default Blog