import Link from 'next/link';
import React from 'react'
import { simpleSteps } from '../../../data';
import SharedComponents from '../../index'
import MainButton from '../buttons/MainButton';
import Step from './Step';
const { HeadingItem } = SharedComponents;

const SimpleSteps = () => {

  return (
    <div className="simpleSteps" id="SimpleSteps">
      <header className="simpleSteps__header">
        <HeadingItem firstLine="Wystarczą 4 proste kroki" secondLine="" />
      </header>

      <main className="simpleSteps__main">
        {simpleSteps.map((step) => {
          const { icon, title, description } = step;
          return (
            <Step key={title} {...{ icon, title, description }} />
          )
        })}
      </main>

      <Link href="/logowanie">
        <div className="simpleSteps__button">
          <MainButton text="ODDAJ RZECZY" size="big" />
        </div>
      </Link>
    </div>
  )
}

export default SimpleSteps
