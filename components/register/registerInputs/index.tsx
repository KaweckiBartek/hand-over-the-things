import Link from 'next/link';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SharedComponents from '../../index'
const { HeadingItem } = SharedComponents;

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ rptPassword, setRptPassword ] = useState('')
  const [pwdEqual, setPwdEqual] = useState(true);
  const [ registerData, setLogInData ] = useState({
    email: "",
    password: "",
    rptPassword: "",
  })

  const onSubmit = (data: any) => {
    if (data.pwd !== data.repeatPwd) {
      setPwdEqual(false);
      return;
    }
    setLogInData({
      email,
      password,
      rptPassword,
    })
    setEmail('')
    setPassword('')
    setRptPassword('')
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
            {errors.email && (
              <p className="form-error ">
                Wprowadź poprawny adres email
              </p>
            )}
          </label>

          <label
            className="form-label"
            htmlFor="input-password"
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
            {errors.email && (
              <p className="form-error ">
                To pole jest wymagane. Upewnij się, że posiada minimum 1 cyfrę, 1 duża literę i małą oraz znak specjalny spośród: @ $ !% * ? & .
              </p>
            )}
          </label>
          <label
            className="form-label"
            htmlFor="input-rpt-password"
          >
            Powtórz hasło
            <input
              ref={register({
                required: true,
                pattern: /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
              })}
              name="rptPassword"
              className="form__input"
              id="input-rpt-password"
              value={rptPassword}
              type="text"
              onChange={(e) => setRptPassword(e.target.value)}
            />
             {errors.rptPassword && (
            <p className="login__tile--message">To pole jest wymagane</p>
          )}
          {!pwdEqual && (
            <p className="login__tile--message">
              Hasła nie zgadzają się, sprawdź pisownię
            </p>
          )}
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
