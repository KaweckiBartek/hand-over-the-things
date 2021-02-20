import React from 'react'
import SharedComponents from '../../index'
import MainButton from '../buttons/MainButton';
import Step from './Step';
const { HeadingItem } = SharedComponents;

const SimpleSteps = () => {
  const simpleSteps = [
    {
      icon: "/assets/Icon-1.svg",
      title: "Wybierz rzeczy",
      description: "ubrania, zabawki, sprzęt i inne"
    },
    {
      icon: "/assets/Icon-2.svg",
      title: "Spakuj je",
      description: "skorzystaj z worków na śmieci"
    },
    {
      icon: "/assets/Icon-3.svg",
      title: "Zdecyduj komu chcesz pomóc",
      description: "wybierz zaufane miejsce"
    },
    {
      icon: "/assets/Icon-4.svg",
      title: "Zamów kuriera",
      description: "kurier przyjedzie w dogodnym terminie"
    },
  ]

  return (
    <div className="simpleSteps">
      <header className="simpleSteps__header">
        <HeadingItem firstLine="Wystarczą 4 proste kroki" secondLine="" />
      </header>

      <main className="simpleSteps__main">
        {simpleSteps.map((step) => {
          const { icon, title, description } = step;
          return (
            <Step key={title} {...{icon, title, description}}/>
          )
        })}
      </main>

      <div className="simpleSteps__button">
        <MainButton text="ODDAJ RZECZY" size="big"/>
      </div>
    </div>
  )
}

export default SimpleSteps
