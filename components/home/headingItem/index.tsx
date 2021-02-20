import React from 'react'
import { IHeadingItem } from '../../../types'

const HeadingItem = ({ firstLine, secondLine } :IHeadingItem) => {
  return (
    <div className="heading-item">
      { secondLine === "" ?
        <h1 className="heading__text">{firstLine}</h1>
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
  