import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const current_year = new Date().getFullYear()

  const footer_menu = [
    { label: "Home", href: "/home/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Commercial", href: "/commercial/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact/" },
  ]
  const regions = [
    { label: "Scotland", href: "/" },
    { label: "Midlands", href: "/" },
    { label: "East Anglia", href: "/" },
    { label: "London", href: "/" },
    { label: "South East England", href: "/" },
    { label: "South West England", href: "/" },
    { label: "South Central England", href: "/" },
  ]

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer__content">
          <div className="footer__column">
            <div className="footer__logo">
              <Link to="/">
                <img
                  src={require("assets/icons/logo/logo_main.svg").default}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Quick Links</h3>
            <ul className="footer__list">
              {footer_menu.map(({ label, href }, index) => (
                <li key={index} className="footer__list-item">
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Find a floor sander</h3>
            <ul className="footer__list">
              {regions.map(({ label, href }, index) => (
                <li key={index} className="footer__list-item">
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Contact Us</h3>
            <p className="footer__column-address">
              United Kingdom <br />
              The Ultimate Floor Sanding Company <br />
              Unit UF, Second Floor <br />
              The Cube, Coe Street <br />
              Bolton, BL3 6BU <br />
            </p>
            <a className="footer__column-contact" href="tel:03300272324">
              Tel: 03300 272324
            </a>
          </div>
        </div>
        <div className="footer__copyrights-row">
          <p className="footer__copyrights">
            © Ultimate Floor Sanding {current_year}. All rights reserved.
          </p>
          <Link to="/privacy-policy/" className="footer__privacy-policy">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
