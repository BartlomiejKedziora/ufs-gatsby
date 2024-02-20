import "./styles.scss"

import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const [landingsOn, setLandingsOn] = useState(false)
  const current_year = new Date().getFullYear()

  const footer_menu = [
    { label: "Home", href: "/home/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Commercial", href: "/commercial/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact/" },
  ]

  const data = useStaticQuery(graphql`
    query {
      allWpLanding {
        nodes {
          acfLandings {
            title
            excerpt
          }
          slug
        }
      }
    }
  `)
  console.log(data)
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer__content">
          <div className="footer__column">
            <div className="footer__logo">
              <Link to="/">
                <img
                  src={require("assets/icons/logo/logo_ufs.svg").default}
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
            <h3 className="footer__column-title">Opening hours</h3>
            <p className="footer__column-opening">Monday: 8.00 - 16.00</p>
            <p className="footer__column-opening">Tuesday: 8.00 - 16.00</p>
            <p className="footer__column-opening">Wednesday: 8.00 - 16.00</p>
            <p className="footer__column-opening">Thursday: 8.00 - 16.00</p>
            <p className="footer__column-opening">Friday: 8.00 - 16.00</p>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Contact Us</h3>
            <p className="footer__column-address">
              Downsview House, <br />
              141 - 143 Station Road East, <br />
              Oxted, Surrey, <br />
              United Kingdom, RH8 0QE
            </p>
            <a className="footer__column-contact" href="tel:03300272324">
              Tel: 03300 272324
            </a>
            <a
              className="footer__column-contact"
              href="mailto:info@ultimatefloorsanding.co.uk"
            >
              Email: info@ultimatefloorsanding.co.uk
            </a>
          </div>
        </div>
        {data.allWpLanding.nodes && (
          <div className="footer__landings">
            <button
              type="button"
              className="footer__landings-btn"
              onClick={() => setLandingsOn(!landingsOn)}
              aria-label="Open landing pages list"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div
              className={`footer__landings-container${
                landingsOn ? " show-landings" : ""
              }`}
            >
              <div className="row">
                {data.allWpLanding.nodes.map(({ acfLandings, slug }, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/${slug}/`}
                      className="footer__landing col-lg-4 col-sm-6 col-12"
                    >
                      <h4>{acfLandings.title}</h4>
                      <p>{acfLandings.excerpt}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
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
