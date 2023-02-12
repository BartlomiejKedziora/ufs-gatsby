import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const Header = () => {
  const serviceSubmenu = [
    { label: "Lorem1 borem", href: "/privacy-policy" },
    { label: "lorem2", href: "/services" },
    { label: "lorem2", href: "/services" },
    { label: "lorem2", href: "/services" },
  ]

  return (
    <header className="header">
      <div className="site-container">
        <div className="header-bar">
          <div className="header__logo">
            <Link to="/">
              <img
                src={require("assets/icons/logo/logo_main.svg").default}
                alt=""
              />
            </Link>
          </div>
          <div className="header__content">
            <div className="header__contact">
              <Link className="header__contact-item" to="tel:3300272324">
                <img src={require("assets/icons/phone.svg").default} alt="" />
                <span className="header__contact-item--text">3300272324</span>
              </Link>
              <Link className="header__contact-item" to="mailto:3300272324">
                <img src={require("assets/icons/mail.svg").default} alt="" />
                <span className="header__contact-item--text">
                  info@ultimatefloorsanding.co.uk
                </span>
              </Link>
            </div>
            <div className="header__navigation">
              <nav className="header__navigation-menu">
                <ul className="main-menu">
                  <li className="main-menu__item">
                    <Link to="/" activeClassName="current">
                      Home
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/about" activeClassName="current">
                      About
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/services" activeClassName="current">
                      Services
                    </Link>
                    <ul className="main-menu__submenu-list">
                      {serviceSubmenu?.map(({ label, href }, index) => (
                        <li
                          key={index}
                          className="main-menu__submenu-list-item"
                        >
                          <Link to={href}>{label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/commercial" activeClassName="current">
                      Commercial
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/blog" activeClassName="current">
                      Blog
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/contact" activeClassName="current">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link to="/" className="header__find-expert">
                <img src={require("assets/icons/pin.svg").default} alt="" />
                <span className="header__find-expert--text">
                  FIND LOCAL EXPERT
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
