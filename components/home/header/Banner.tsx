import Link from 'next/link';
import React from 'react'
import SharedComponents from '../../index'

const { MainButton, HeadingItem } = SharedComponents;

const Banner = () => {
  return (
    <div className="banner">
      <HeadingItem firstLine="Zacznij pomagać!" secondLine="Oddaj niechciane rzeczy w zaufane ręce" />

      <div className="banner-buttons">
        <Link href="/logowanie">
          <a><MainButton size="big" text="ODDAJ RZECZY" /></a>
        </Link>
        <Link href="/logowanie">
          <a><MainButton size="big" text="ZORGANIZUJ ZBIÓRKĘ" /></a>
        </Link>
      </div>
    </div>
  )
}

export default Banner
