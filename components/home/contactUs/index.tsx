import React, { useState } from 'react'
import SharedComponents from "../../index"

const { HeadingItem, MainButton } = SharedComponents;

const ContactUs = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="contactUs__background">
      <div className="contactUs">
        <HeadingItem firstLine="Skontaktuj się z nami" secondLine="" />
        <form
          onSubmit={handleSubmit}
          className="contactUs__form">

          <div className="inputs__wrapper">
            <label
              className="form-label"
              htmlFor="name">Wpisz swoje imię
          <input
                className="form__input"
                id="input-name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label
              className="form-label"
              htmlFor="input-email">Wpisz swój email
          <input
                className="form__input"
                id="input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
            </label>
          </div>

          <label
            className="form-label"
            htmlFor="input-textarea">Wpisz swoją wiadomość</label>
          <textarea
            className="form__textarea"
            id="input-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <MainButton text="Wyślij" size="small" />
        </form>
      </div>
    </div>
  )
}

export default ContactUs
