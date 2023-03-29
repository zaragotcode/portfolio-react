import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">M A Z A R A</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
            href="#contact" 
            className="footer__social-icon" 
            rel="noreferrer">
              <i class="bx bxs-envelope"></i>  
          </a>

          <a 
            href="https://www.linkedin.com/in/patrickmazara/" 
            className="footer__social-icon" 
            target="_blank" rel="noreferrer">
              <i class="bx bxl-linkedin-square"></i>
          </a>

          <a 
            href="https://github.com/zaragotcode" 
            className="footer__social-icon" 
            target="_blank" rel="noreferrer">
              <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Patrick Mazara. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer