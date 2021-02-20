import React from 'react'
import Column from './column'

const Columns = () => {
  const columns = [
    {
      number: 10,
      title: "ODDANYCH WORKÓW",
      description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
    },
    {
      number: 5,
      title: "WSPARTYCH ORGANIZACJI",
      description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
    },
    {
      number: 7,
      title: "ZORGANIZOWANY ZBIÓREK",
      description: "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
    },
  ]
  return (
    <div className="home__columns">
      {columns.map((column) => {
        const { number, title, description } = column;
        return (
          <Column key={title} {...{ number, title, description }}
          />
        )
      })}
    </div>
  )
}

export default Columns
