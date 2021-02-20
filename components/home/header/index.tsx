import React from 'react'
import Nav from './Nav'
import Banner from "./Banner"

const Header = () => {
  return (
    <header className="home__header">
      <div className="header_left">

      </div>
      <div className="header_right">
        <Nav />

        <div className="welcome-section-wrapper">
          <Banner />
        </div>
      </div>
    </header>
  )
}

export default Header
