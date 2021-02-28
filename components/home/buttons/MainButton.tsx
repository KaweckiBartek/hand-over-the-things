import Link from 'next/link'
import React from 'react'
import { IMainButton } from '../../../types'

const MainButton = ({ size, text, href }: IMainButton) => {
  return (
    <div>
      {href === "" ?
        <button className={`main-button main-button-${size}`}>{text}</button>
        :
        <Link href={href}>
          <button className={`main-button main-button-${size}`}>{text}</button>
        </Link>
      }
    </div>
  )
}


export default MainButton
