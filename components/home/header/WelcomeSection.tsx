import React from 'react'
import SharedComponents from '../../index'

const { MainButton } = SharedComponents;

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h1 className="welcome-section__text">Zacznij Pomagać! <br />
      Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      {/* <div className="decoration" /> */}
      <img
        src="/assets/Decoration.svg"
        alt="decoration"
        className="decoration"
        width="253"
        height="33"

      />

      <div className="welcome-buttons">
        <MainButton size="big" text="ODDAJ RZECZY" />
        <MainButton size="big" text="ZORGANIZUJ ZBIÓRKĘ" />
      </div>
    </div>
  )
}

export default WelcomeSection
