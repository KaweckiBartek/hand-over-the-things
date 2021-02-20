import React from 'react'
import Link from "next/link"
import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavItem = ({name}) => {
  return (
    <li className="nav__item">
      {name}
    </li>
  )
}

const Nav = () => {

  const navItems = ['Start' ,'O co chodzi?', 'O nas', 'Fundacja i organizacje', 'Kontakt']

  return (
    <nav className="home__nav">
      <div className="nav__log-reg">
        <Link href="/logowanie">
        <a>Zaloguj</a>
        </Link>
        <Link href="/rejestracja">
        <a>Załóż konto</a>
        </Link>
        
      </div>

      <ul className="nav__navigation">
        {navItems.map((navItem) => <NavItem name={navItem} key={navItem} />)}
      </ul>
    </nav>
  )
}

export default Nav
