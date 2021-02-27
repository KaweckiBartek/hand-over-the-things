import React from 'react'

const PageCounter = ({ i, setStart, setEnd }) => {

  const handleClick = () => {
    setStart(i * 3)
    setEnd((i*3) + 3)
  }
  return (
    <button onClick={handleClick} className="pageCounter">{i + 1}</button>
  )
}

export default PageCounter
