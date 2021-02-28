import Link from 'next/link'
import React from 'react'
import MainButton from '../../home/buttons/MainButton'
import HeadingItem from '../../home/headingItem'

const LogOutModal = () => {
  return (
    <div className="logOutModal">
      <HeadingItem firstLine="Wylogowanie nastąpiło" secondLine="pomyślnie!" />
      <MainButton text="Strona główna" size="small" href="/" />
    </div>
  )
}

export default LogOutModal
