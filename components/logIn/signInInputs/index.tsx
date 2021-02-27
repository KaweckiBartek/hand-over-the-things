import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SharedComponents from '../../index'
const { HeadingItem } = SharedComponents;

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ logInData, setLogInData ] = useState({
    email: "",
    password: "",
  })

  const onSubmit = () => {
    setLogInData({
      email,
      password
    })
    setEmail('')
    setPassword('')
  }

  console.log(errors);
  

  return (
    <div className="signIn">
      <HeadingItem firstLine="Zaloguj się" secondLine="" />
      <form onSubmit={handleSubmit(onSubmit)} className="signIn__form">
        <div className="log-reg-wrapper">
          <label
            className="form-label"
            htmlFor="input-email"
          >
            Email
            <input
              ref={register({
                required: true,
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,

              })}
              name="email"
              className="form__input"
              id="input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />
          </label>

          <label
            className="form-label"
            htmlFor="name"
          >
            Hasło
            <input
              ref={register({
                required: true,
                pattern: /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
              })}
              name="password"
              className="form__input"
              id="input-password"
              value={password}
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="signIn__buttons">
          <Link href="/rejestracja">
            <p className="main-button main-button-small">Załóż konto</p>
          </Link>
          <input type="submit" value="Zaloguj się" className="main-button main-button-small" />
        </div>
      </form>
    </div>
  )
}

export default SignIn
