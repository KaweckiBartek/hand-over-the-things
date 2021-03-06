import Head from 'next/head'
import SharedComponents from "../components"

const {HomeHeader, Columns, SimpleSteps, AboutUs, WhoWeHelp, ContactUs, Footer, HamburgerMenu} = SharedComponents

export default function Home() {
  return (
    <div className="layout">
      <Head>
        <title>Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HamburgerMenu />
      <HomeHeader />
      <Columns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactUs />
      <Footer />
    </div>
  )
}
