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
          alt="signature-image" className="aboutUs__left__signature"
        
        />
          
      </div>
      <div className="aboutUs__right">

      </div>
    </div>
  )
}

export default AboutUs
