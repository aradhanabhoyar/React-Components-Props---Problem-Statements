import React from 'react'

function Product(props) {
  return (
    <>
    <h1>2. Product Details</h1>
    productName : {props. productName} <br/>
    price : {props.price} <br/> 
    inStock : {props.inStock}     
    </>
  )
}
export default Product