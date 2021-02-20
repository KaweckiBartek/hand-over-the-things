import React from 'react'
import { IColumn } from '../../../types'

const Column = ({number, title, description}: IColumn) => {
  return (
    <section className="column">
      <p className="number">{number}</p>
      <p className="title">{title}</p>
      <p className="description">{ description }</p>
    </section>
  )
}

export default Column
