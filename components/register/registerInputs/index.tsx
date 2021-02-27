import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SharedComponents from '../../index'
const { HeadingItem } = SharedComponents;

const SignIn = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rptPassword, setRptPassword ] = useState('')
  const [ registerData, setLogInData ] = useState({
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
            htmlFor="input-password"
          >
            Hasło
            <input
              ref={register({
                required: true,
                pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
              })}
              name="password"
              className="form__input"
              id="input-password"
              value={password}
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label
            className="form-label"
            htmlFor="input-rpt-password"
          >
            Hasło
            <input
              ref={register({
                required: true,
                pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
              })}
              name="rptPassword"
              className="form__input"
              id="input-rpt-password"
              value={rptPassword}
              type="text"
              onChange={(e) => setRptPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="signIn__buttons">
          <Link href="/logowanie">
            <p className="main-button main-button-small">Zaloguj się</p>
          </Link>
          <input type="submit" value="Załóż konto" className="main-button main-button-small" />
        </div>
      </form>
    </div>
  )
}

export default SignIn
