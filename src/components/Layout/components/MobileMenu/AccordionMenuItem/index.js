import "./styles.scss"

import React, { useState, useRef } from "react"
import { Link } from "gatsby"

const AccordionMenuItem = ({ item, index }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)

  const submenu_list = useRef()

  return (
    <li key={index} className="main-menu__item main-menu-accordion">
      <div className="main-menu-accordion__head">
        <Link to={`${item.href}`}>{item.label}</Link>
        <button
          type="button"
          className="main-menu-accordion__arrow"
          style={submenuOpen ? { transform: "rotate(180deg)" } : {}}
          onClick={() => setSubmenuOpen(!submenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 10 6"
          >
            <path
              id="Icon_material-keyboard-arrow-down"
              data-name="Icon material-keyboard-arrow-down"
              d="M10.175,11.76,14,15.468l3.825-3.709L19,12.9,14,17.76,9,12.9Z"
              transform="translate(-9 -11.76)"
            />
          </svg>
        </button>
      </div>
      <ul
        className="main-menu-accordion__body"
        ref={submenu_list}
        style={
          submenuOpen
            ? { height: submenu_list.current.scrollHeight, opacity: "1" }
            : { height: "0px", opacity: "0" }
        }
      >
        {item.submenu.map((el, index) => {
          return (
            <li key={index} className="main-menu__submenu-list-item">
              <Link to={el.href} activeClassName="current">
                {el.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default AccordionMenuItem
