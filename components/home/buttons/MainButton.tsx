import React from 'react'

const MainButton = ({ size, text }) => {
  return (
    <button className={`main-button main-button-${size}`}>{ text }</button>
  )
}

export default MainButton
