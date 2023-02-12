import "./styles.scss"

import React from "react"

const SocialsBar = () => {
  return (
    <div className="socials-bar">
      <a href="/" target="_blank" className="socials-bar__item">
        <img src={require("assets/icons/social/twitter.svg").default} alt="" />
      </a>
      <a href="/" target="_blank" className="socials-bar__item">
        <img src={require("assets/icons/social/linkedin.svg").default} alt="" />
      </a>
      <a href="/" target="_blank" className="socials-bar__item">
        <img src={require("assets/icons/social/insta.svg").default} alt="" />
      </a>
      <a href="/" target="_blank" className="socials-bar__item">
        <img src={require("assets/icons/social/fb.svg").default} alt="" />
      </a>
      <a href="/" target="_blank" className="socials-bar__item">
        <img src={require("assets/icons/social/youtube.svg").default} alt="" />
      </a>
      <a href="/" target="_blank" className="socials-bar__item">
        <img
          src={require("assets/icons/social/phone-aside.svg").default}
          alt=""
        />
      </a>
    </div>
  )
}

export default SocialsBar
