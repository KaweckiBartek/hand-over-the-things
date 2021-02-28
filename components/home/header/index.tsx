import React from 'react'
import Nav from './Nav'
import Banner from "./Banner"

const Header = () => {
  return (
    <header className="home__header" id="Start">
      <div className="header__left">

      </div>
      <div className="header__right">
        <Nav />
        <div className="welcome-section-wrapper">
          <Banner />
        </div>
      </div>
    </header>
  )
}

export default Header
