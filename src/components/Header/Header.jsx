import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Mazara</a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil-user nav__icon"></i>
              </a>

              <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href=" " className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header