import React from 'react'
import Nav from './Nav'
import WelcomeSection from "./WelcomeSection"

const Header = () => {
  return (
    <div className="home__header">
      <div className="header_left">

      </div>
      <div className="header_right">
        <Nav />

        <div className="welcome-section-wrapper">
          <WelcomeSection />
        </div>
      </div>
    </div>
  )
}

export default Header
