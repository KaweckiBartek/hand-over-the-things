import React, { useState } from 'react'
import SharedComponents from "../../index"
import { useForm } from "react-hook-form";

const { HeadingItem, MainButton } = SharedComponents;

const ContactUs = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    message: "",
  })

  const onSubmit = () => {
    setFormData({
      name,
      email,
      message
    })

    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Succes:', formData)
      })
      .catch(error => console.error('Error:', error)
      )

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
            onSubmit={handleSubmit(onSubmit)}
            className="contactUs__form">

            <div className="inputs__wrapper">
              <label
                className="form-label"
                htmlFor="name">Wpisz swoje imię
                <input
                  ref={register({
                    required: true,
                    pattern: /^[-a-zA-Z0-9@\.+_]+$/
                  })}
                  name="name"
                  className="form__input"
                  id="input-name"
                  value={name}
                  type="text"
                  placeholder="Krzysztof"
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="form-error ">
                    Podane imię jest nieprawidłowe!
                  </p>
                )}
              </label>

              <label
                className="form-label"
                htmlFor="input-email">Wpisz swój email
                <input
                  ref={register({
                    required: true,
                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,

                  })}
                  name="email"
                  className="form__input"
                  id="input-email"
                  value={email}
                  placeholder="abc@xyz.pl"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                {errors.email && (
                  <p className="form-error ">
                    Podane email jest nieprawidłowy!
                  </p>
                )}
              </label>
            </div>

            <label
              className="form-label"
              htmlFor="input-textarea">Wpisz swoją wiadomość
              <textarea
                ref={register({
                  required: true,
                  minLength: 120,
                })}
                name="message"
                className="form__textarea"
                id="input-textarea"
                value={message}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                  <p className="form-error ">
                    Wiadomość musi mieć conajmniej 120 znaków!
                  </p>
                )}
            </label>

            <input type="submit" value="Wyślij" className={`main-button main-button-small`} />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
