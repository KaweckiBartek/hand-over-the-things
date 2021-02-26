import React from 'react'

const PageCounter = ({ i, setStart, setEnd }) => {

  const handleClick = () => {
    setStart(i)
    setEnd(i+3)
  }
  return (
    <li onClick={handleClick} className="pageCounter">{i + 1}</li>
  )
}

export default PageCounter
