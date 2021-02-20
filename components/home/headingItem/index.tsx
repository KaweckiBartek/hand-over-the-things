import React from 'react'

const HeadingItem = ({ firstLine, secondLine }) => {
  return (
    <div className="heading-item">
      { secondLine === "" ?
        <h1>{firstLine}</h1>
        :
        <h1 className="heading__text">
          {firstLine}
          <br />
          {secondLine}
        </h1>
      }

      <img
        className="decoration"
        src="/assets/Decoration.svg"
        alt="decoration"
        width="253"
        height="33"
      />
    </div>
  )
}

export default HeadingItem
  