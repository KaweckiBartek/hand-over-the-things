import React, { useState } from 'react'
import SharedComponents from "../../index"

const { HeadingItem, MainButton } = SharedComponents;

const ContactUs = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      name,
      email,
      message
    })
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <div className="contactUs__background">
      <div className="contactUs__background-shadow">
        <div className="contactUs" id="Contact">
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
                  placeholder="Krzysztof"
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
                  placeholder="abc@xyz.pl"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
              </label>
            </div>

            <label
              className="form-label"
              htmlFor="input-textarea">Wpisz swoją wiadomość
              <textarea
                className="form__textarea"
                id="input-textarea"
                value={message}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <MainButton text="Wyślij" size="small" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
