import Link from 'next/link';
import React from 'react'
import SharedComponents from '../../index'

const { MainButton, HeadingItem } = SharedComponents;

const Banner = () => {
  return (
    <div className="banner">
      <HeadingItem firstLine="Zacznij pomagać!" secondLine="Oddaj niechciane rzeczy w zaufane ręce" />

      <div className="banner-buttons">
        <MainButton size="big" text="ODDAJ RZECZY" href="/logowanie"/>
        <MainButton size="big" text="ZORGANIZUJ ZBIÓRKĘ" href="/logowanie" />
      </div>
    </div>
  )
}

export default Banner
