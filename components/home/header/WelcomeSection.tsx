import React from 'react'
import SharedComponents from '../../index'

const { MainButton, HeadingItem } = SharedComponents;

const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <HeadingItem firstLine="Zacznij pomagać!" secondLine="Oddaj niechciane rzeczy w zaufane ręce"/>

      <div className="welcome-buttons">
        <MainButton size="big" text="ODDAJ RZECZY" />
        <MainButton size="big" text="ZORGANIZUJ ZBIÓRKĘ" />
      </div>
    </div>
  )
}

export default WelcomeSection
