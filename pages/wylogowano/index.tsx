import Head from 'next/head'
import React from 'react'
import SharedComponents from "../../components"
const {Nav, LogOutModal, Footer} = SharedComponents

export default function LogOut() {
  return (
    <div className="layout">
      <Head>
        <title>Logowanie - Oddaj rzeczy!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <LogOutModal />
      <footer className="footer__bottom">
        <Footer />
      </footer>
    </div>
  )
}

