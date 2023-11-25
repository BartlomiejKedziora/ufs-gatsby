import "./styles.scss"

import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import ModalQuote from "components/ModalQuote"
import MobileMenu from "../MobileMenu"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  const data = useStaticQuery(
    graphql`
      query ServicesList {
        allWpService(sort: { date: ASC }) {
          nodes {
            id
            title
            uri
          }
        }
        allWpCommercial(sort: { date: ASC }) {
          nodes {
            id
            title
            uri
          }
        }
      }
    `
  )

  return (
    <header className={`header${isScrolled ? " shrink" : ""}`}>
      <div className="container-fluid">
        <div className="header-bar">
          <div className="header__logo">
            <Link to="/">
              <img
                src={require("assets/icons/logo/logo_main.svg").default}
                alt=""
              />
            </Link>
          </div>
          <div className={`header__content${isMenuOpen ? " menu-active" : ""}`}>
            <div className="header__contact">
              <a className="header__contact-item" href="tel:03300272324">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24.048"
                  viewBox="0 0 24 24.048"
                >
                  <path
                    id="df1cf4ce-55fa-4172-90c6-49aaaf45f9c3"
                    d="M26.119,20.012v3.62a2.413,2.413,0,0,1-2.631,2.413,23.9,23.9,0,0,1-10.414-3.7A23.531,23.531,0,0,1,5.834,15.1,23.875,23.875,0,0,1,2.13,4.638a2.412,2.412,0,0,1,2.4-2.631h3.62a2.414,2.414,0,0,1,2.413,2.075,15.549,15.549,0,0,0,.844,3.392,2.411,2.411,0,0,1-.542,2.545L9.333,11.553a19.305,19.305,0,0,0,7.241,7.24l1.532-1.532a2.414,2.414,0,0,1,2.547-.543,15.473,15.473,0,0,0,3.391.845A2.412,2.412,0,0,1,26.119,20.012Z"
                    transform="translate(-2.12 -2.007)"
                    fill="#fffee6"
                  />
                </svg>
                <span className="header__contact-item--text">03300 272324</span>
              </a>
              <a
                className="header__contact-item"
                href="mailto:info@ultimatefloorsanding.co.uk"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                >
                  <g
                    id="Group_2072"
                    data-name="Group 2072"
                    transform="translate(-1487.549 -34)"
                  >
                    <path
                      id="Path_797"
                      data-name="Path 797"
                      d="M26.054,6.912l-6.208,6.469a.116.116,0,0,0,0,.165l4.344,4.734a.779.779,0,0,1,0,1.086.74.74,0,0,1-1.062,0L18.8,14.651a.117.117,0,0,0-.167,0l-1.056,1.1a4.594,4.594,0,0,1-3.312,1.428,4.687,4.687,0,0,1-3.381-1.47L9.871,14.651a.117.117,0,0,0-.167,0L5.377,19.367a.74.74,0,0,1-1.062,0,.779.779,0,0,1,0-1.086L8.66,13.547a.128.128,0,0,0,0-.165L2.446,6.912a.113.113,0,0,0-.2.083V19.94A1.873,1.873,0,0,0,4.1,21.828H24.4A1.873,1.873,0,0,0,26.25,19.94V6.995A.115.115,0,0,0,26.054,6.912Z"
                      transform="translate(1485.299 29.172)"
                      fill="#fffee6"
                    />
                    <path
                      id="Path_798"
                      data-name="Path 798"
                      d="M14.1,16.058a3.1,3.1,0,0,0,2.253-.968l9.039-9.427a1.784,1.784,0,0,0-1.141-.413H3.958a1.772,1.772,0,0,0-1.141.413l9.039,9.427A3.1,3.1,0,0,0,14.1,16.058Z"
                      transform="translate(1485.454 28.75)"
                      fill="#fffee6"
                    />
                  </g>
                </svg>
                <span className="header__contact-item--text">
                  info@ultimatefloorsanding.co.uk
                </span>
              </a>
            </div>
            <div className="header__navigation">
              <nav className="header__navigation-menu d-none d-lg-block">
                <ul className="main-menu">
                  <li className="main-menu__item">
                    <Link to="/" activeClassName="current">
                      Home
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/about/" activeClassName="current">
                      About
                    </Link>
                    <ul className="main-menu__submenu-list">
                      <li className="main-menu__submenu-list-item">
                        <Link to="/testimonials/">Testimonials</Link>
                      </li>
                      <li className="main-menu__submenu-list-item">
                        <Link to="/guarantee/">Guarantee</Link>
                      </li>
                      <li className="main-menu__submenu-list-item">
                        <Link to="/portfolio/">Portfolio</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/services/" activeClassName="current">
                      Services
                    </Link>
                    <ul className="main-menu__submenu-list d-none d-xl-block">
                      {data?.allWpService?.nodes?.map(({ id, uri, title }) => (
                        <li key={id} className="main-menu__submenu-list-item">
                          <Link to={uri}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/commercial/" activeClassName="current">
                      Commercial
                    </Link>
                    <ul className="main-menu__submenu-list d-none d-xl-block">
                      {data?.allWpCommercial?.nodes?.map(
                        ({ id, uri, title }) => (
                          <li key={id} className="main-menu__submenu-list-item">
                            <Link to={uri}>{title}</Link>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/blog/" activeClassName="current">
                      Blog
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link to="/contact/" activeClassName="current">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <MobileMenu
                services={data?.allWpService?.nodes}
                commercial={data?.allWpCommercial?.nodes}
              />
              <button
                className="header__find-expert"
                onClick={() => setIsModalQuoteOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="28.571"
                  viewBox="0 0 20 28.571"
                >
                  <path
                    id="Icon_material-location-on"
                    data-name="Icon material-location-on"
                    d="M22.5,5a9.993,9.993,0,0,0-10,10c0,7.5,10,18.571,10,18.571S32.5,22.5,32.5,15A9.993,9.993,0,0,0,22.5,5Zm0,13.571A3.571,3.571,0,1,1,26.071,15,3.573,3.573,0,0,1,22.5,18.571Z"
                    transform="translate(-12.5 -5)"
                    fill="#fffee6"
                  />
                </svg>
                <span className="header__find-expert--text">GET A QUOTE</span>
              </button>
            </div>
          </div>
          <button
            aria-label="Open Menu"
            className={`d-block d-xl-none hamburger hamburger--squeeze${
              isMenuOpen ? " is-active" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {Array(4)
              .fill(null)
              .map((item, index) => (
                <span key={index} />
              ))}
          </button>
        </div>
      </div>
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </header>
  )
}

export default Header
