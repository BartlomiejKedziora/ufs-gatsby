import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

import AccordionMenuItem from "./AccordionMenuItem"

const MobileMenu = ({ services, commercial }) => {
  const mob_menu = [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about/",
      submenu: [
        { label: "Testimonials", href: "/testimonials/" },
        { label: "Guarantee", href: "/guarantee/" },
        { label: "Portfolio", href: "/portfolio/" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      submenu: services?.map(el => ({ label: el.title, href: el.uri })),
    },
    {
      label: "Commercial",
      href: "/commercial/",
      submenu: commercial?.map(el => ({ label: el.title, href: el.uri })),
    },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact/" },
  ]

  return (
    <nav className="mobile-menu d-lg-none">
      <ul className="main-manu">
        {mob_menu.map((item, index) => {
          return !!item.submenu ? (
            <AccordionMenuItem index={index} item={item} />
          ) : (
            <li key={index} className="main-menu__item">
              <Link to={item.href} activeClassName="current">
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileMenu
