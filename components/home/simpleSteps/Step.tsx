import React from 'react'
import { IStep } from '../../../types'

const Step = ({ icon, title, description }:IStep) => {
  return (
    <div className="step">
      <img
        className="step__icon"
        src={icon}
        alt={`${title}-icon`}
        width={83}
        height={83}
      />
      <p className="step__title">{title}</p>
      <p className="step__description">{description}</p>
    </div>
  )
}

export default Step