import Head from 'next/head'
import SharedComponents from "../../components"

const {Nav, SignInInputs, Footer} = SharedComponents

export default function SignIn() {
  return (
    <div className="layout">
      <Head>
        <title>Logowanie - Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SignInInputs />
      <footer className="footer__bottom">
        <Footer />
      </footer>
    </div>
  )
}