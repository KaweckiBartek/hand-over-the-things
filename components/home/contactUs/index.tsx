import React, { useState } from 'react'
import SharedComponents from "../../index"

const { HeadingItem, MainButton } = SharedComponents;

const ContactUs = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className="contactUs">

      <HeadingItem firstLine="Skontaktuj się z nami" secondLine=""/>
      <form className="contactUs__form">
        <input
          value={name}
          type="text"
        />
        <input
          value={name}
          type="text"
        />

        <textarea
        value={message}
        />
        <MainButton text="Wyślij" size="small" />
      </form>
    </div>
  )
}

export default ContactUs
