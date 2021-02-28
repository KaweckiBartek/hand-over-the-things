import Head from 'next/head'
import SharedComponents from "../../components"

const { Nav, RegisterInputs, Footer, HamburgerMenu } = SharedComponents

export default function Register() {
  return (
    <div className="layout">
      <Head>
        <title>Logowanie - Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HamburgerMenu />
      <Nav />
      <RegisterInputs />
      <footer className="footer__bottom">
        <Footer />
      </footer>
    </div>
  )
}