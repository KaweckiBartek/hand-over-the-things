import React from 'react'
import { IMainButton } from '../../../types'

const MainButton = ({ size, text }: IMainButton) => {
  return (
    <button className={`main-button main-button-${size}`}>{ text }</button>
  )
}

export default MainButton
