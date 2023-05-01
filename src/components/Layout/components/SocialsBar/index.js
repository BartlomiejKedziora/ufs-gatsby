import "./styles.scss"

import React from "react"

const SocialsBar = ({ data }) => {
  const { facebook, insta, linkedin, phone, twitter, yt } = data

  return (
    <div className="socials-bar">
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noreferrer"
          className="socials-bar__item"
        >
          <img
            src={require("assets/icons/social/twitter.svg").default}
            alt=""
          />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="socials-bar__item"
        >
          <img
            src={require("assets/icons/social/linkedin.svg").default}
            alt=""
          />
        </a>
      )}
      {insta && (
        <a
          href={insta}
          target="_blank"
          rel="noreferrer"
          className="socials-bar__item"
        >
          <img src={require("assets/icons/social/insta.svg").default} alt="" />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="socials-bar__item"
        >
          <img src={require("assets/icons/social/fb.svg").default} alt="" />
        </a>
      )}
      {yt && (
        <a
          href={yt}
          target="_blank"
          rel="noreferrer"
          className="socials-bar__item"
        >
          <img
            src={require("assets/icons/social/youtube.svg").default}
            alt=""
          />
        </a>
      )}
      {phone && (
        <a href={phone} className="socials-bar__item">
          <img
            src={require("assets/icons/social/phone-aside.svg").default}
            alt=""
          />
        </a>
      )}
    </div>
  )
}

export default SocialsBar
