import React from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavItem = () => {
  return (
    <li>

    </li>
  )
}

const Nav = () => {

  return (
    <nav className="home__nav">
      <div className="nav__log-reg">
        <button>Zaloguj</button>
        <button>Załóż konto</button>
      </div>

      <div className="nav__navigation">
        <button>O co chodzi?</button>
        <button>O nas</button>
        <button>Fundacja i organizacje</button>
        <button>Kontakt</button>
        {/* <Link activeClass="active"  
          to="start"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
        >
          Start
        </Link>
        <Link activeClass="active"  
          to="start"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
        >
          Start
        </Link>
        <Link activeClass="active"  
          to="start"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
        >
          Start
        </Link>
        <Link activeClass="active"  
          to="start"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
          // onSetActive={this.handleSetActive}
          // onSetInactive={this.handleSetInactive}
          ignoreCancelEvents={false}
        >
          Start
        </Link> */}
      </div>
    </nav>
  )
}

export default Nav
