import React from 'react'

function Shopping(props) {
  return (
    <>
    <h1>8. Shopping Card Item Component</h1>
    item : {props.item} <br/>
    quantity : {props.quantity} <br/>
    price : {props.price}
    </>
  )
}

export default Shopping
