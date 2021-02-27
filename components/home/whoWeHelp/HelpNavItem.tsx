import React from 'react'
import { IHelpNavItem } from '../../../types'

const HelpNavItem = ({ name, onClick, setInstitution }: IHelpNavItem) => {
  return (
    <li
      onClick={() => setInstitution(onClick)}
      className="whoWeHelp__item"
    >{name}
    </li>
  )
}

export default HelpNavItem
