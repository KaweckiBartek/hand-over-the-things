import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">Copyright by Bartek Kawecki</p>

      <div className="footer__icons">

        <Link href="https://www.facebook.com/kawec1/">
          <img
            src="assets/Instagram.svg"
            alt="instagram icon"
            className="footer__icon"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://www.instagram.com/bartkawecky/">
          <img
            src="assets/Facebook.svg"
            alt="facebook icon"
            className="footer__icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  )
}

export default Footer
