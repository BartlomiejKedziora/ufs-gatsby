import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const Header = () => {
  const serviceSubmenu = [
    { label: "lorem1", href: "/privacy-policy" },
    { label: "lorem2", href: "/services" },
  ]

  return (
    <header className="header">
      <nav className="navigation">
        <ul className="main-menu">
          <li className="main-menu__item">
            <Link to="/" activeClassName="current">
              Home
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/guarantee" activeClassName="current">
              Guarantee
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/services" activeClassName="current">
              Services
            </Link>
            <ul className="main-menu__submenu-list">
              {serviceSubmenu?.map(({ label, href }, index) => (
                <li key={index}>
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
    </header>
  )
}

export default Header
