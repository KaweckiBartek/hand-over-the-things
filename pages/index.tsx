import Head from 'next/head'
import Header from '../components/home/header'

export default function Home() {
  return (
    <div className="layout">
      <Head>
        <title>Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <h2>columns</h2>
      <h3>SimpleSteps</h3>
      <h3>AboutUs</h3>
      <h3>WhoWeHelp</h3>
      <h3>ContactUs</h3>
     
    </div>
  )
}
