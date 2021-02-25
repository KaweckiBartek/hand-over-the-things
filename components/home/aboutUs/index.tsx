import React from 'react'
import SharedComponents from "../../index"

const { HeadingItem } = SharedComponents;

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__left">
        <HeadingItem firstLine="O nas" secondLine="" />

        <h3>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h3>

        <img
          src="/assets/Signature.svg"
          alt="signature-image"
          className="aboutUs__left__signature"
          width="209"
          height="149"
        />

      </div>

      <img
        className="aboutUs__right"
        src="/assets/People.jpg"
        alt="happy-people-image"
        width="942"
        height="925"
      />

    </div>
  )
}

export default AboutUs
