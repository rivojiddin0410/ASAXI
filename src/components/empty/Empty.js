import React from 'react'
import "./Empty.css"
function Empty(props) {
const {url, title, desk, btn} = props
  return (
    <div className='empty'>
      <img src={url} width={150} alt="" />
      <h2>{title}</h2>
      <p>{desk}</p>
      <button>{btn}</button>
    </div>
  )
}

export default Empty