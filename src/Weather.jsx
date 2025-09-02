import React from 'react'

function Weather(props) {
  return (
    <>
    <h1>10. Weather Report Component</h1>
    city : {props.city}<br/>
    temperature : {props.temperature}<br/>
    condition : {props.condition}
    </>
  )
}

export default Weather
