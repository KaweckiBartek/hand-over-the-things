import React from 'react'
import Link from "next/link"
import { IHomeNavItem } from '../../../types';

const HomeNavItem = ({ name, navLink }: IHomeNavItem) => {

  navLink==="Start" ? navLink = "/" : navLink
  navLink==="O co chodzi?" ? navLink = "/#SimpleSteps" : navLink
  navLink==='O nas' ? navLink =  "/#AboutUs" : navLink
  navLink==='Fundacja i organizacje' ? navLink =  "/#Institutions" : navLink
  navLink==='Kontakt' ? navLink =  "/#Contact" : navLink
  return (
    <Link href={navLink}>
    <li className="nav__item">
      {name}
    </li>
    </Link>
  )
}

export const Nav = () => {

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
        {navItems.map((navItem) => <HomeNavItem name={navItem} navLink={navItem} key={navItem} />)}
      </ul>
    </nav>
  )
}

export default Nav
