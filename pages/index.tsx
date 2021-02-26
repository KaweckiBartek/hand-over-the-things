import Head from 'next/head'
import SharedComponents from "../components"

const {HomeHeader, Columns, SimpleSteps, AboutUs, WhoWeHelp, Footer} = SharedComponents

export default function Home() {
  return (
    <div className="layout">
      <Head>
        <title>Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHeader />
      <Columns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Footer />
    </div>
  )
}
