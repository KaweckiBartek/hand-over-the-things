import React from 'react'
import { IInstitutionItem } from '../../../types'

const InstitutionItem = ({ name, mision, description, index }: IInstitutionItem) => {
  return (
    <li 
      className="institutionItem"
    >
      <div className="institutionItem__left">
        <p className="institutionItem__left__name">{name}</p>
        <small className="institutionItem__left__mision" >{mision}</small>
      </div>

      <div className="institutionItem__right">
        <p className="institutionItem__right__description">
          {description}
        </p>
      </div>
    </li>
  )
}

export default InstitutionItem
