import React, { useState } from 'react';
import Link from 'next/link';
import { bubble as Menu } from 'react-burger-menu';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const handleStateChange = (state: any) => {
    setMenuOpen(state.isOpen);
  };

  const menuClose = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Menu isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)}>
  
      <span>
        <Link href="/logowanie">
          <li>Zaloguj</li>
        </Link>
      </span>
      <span>
        <Link href="/rejestracja">
          <li>Załóż konto</li>
        </Link>
      </span>
      <span>
        <Link href="/">
          <li>Start</li>
        </Link>
      </span>

      <span>
        <Link href="/#SimpleSteps">
          <li>O co chodzi?</li>
        </Link>
      </span>
      <span>
        <Link href="/#AboutUs">
          <li>o nas</li>
        </Link>
      </span>
      <span>
        <Link href="/#Institutions">
          <li>Fundacja i organizacje</li>
        </Link>
      </span>
      <span>
        <Link href="/#Contact">
          <li>Kontakt</li>
        </Link>
      </span>
      <span>
        <Link href="/#SimpleSteps">
          <li>O co chodzi?</li>
        </Link>
      </span>

    </Menu>
  );
};

export default HamburgerMenu;
