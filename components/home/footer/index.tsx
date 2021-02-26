import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">Copyright by Bartek Kawecki</p>

      <div className="footer__icons">

        <img
          src="assets/Instagram.svg"
          alt="instagram icon"
          className="footer__icon"
          width={30}
          height={30}
        />
        <img
          src="assets/Facebook.svg"
          alt="facebook icon"
          className="footer__icon"
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}

export default Footer
