import "./styles.scss"

import React, { useEffect, useState } from "react"
import { withCookies } from "react-cookie"

import Button from "components/Button"

const CookieBanner = ({ cookies }) => {
  const [cookieBanner, setCookieBanner] = useState("")

  useEffect(() => {
    const isAcceptedCoookie = !!cookies.get("cookie-accept-ufs")
    !isAcceptedCoookie && setCookieBanner(true)
  }, [cookies])

  const acceptCookieBanner = e => {
    e.preventDefault()
    const promiseSetCookie = new Promise(resolve =>
      resolve(cookies.set("cookie-accept-ufs", "active", { path: "/" }))
    )
    promiseSetCookie.then(() => {
      setCookieBanner(false)
    })
  }

  return (
    <div
      className={`cookie-banner${cookieBanner ? " cookie-banner--open" : ""}`}
    >
      <div className="container">
        <div className="cookie-banner__wrapper">
          <p>
            We are using cookies to give you the best experience on our website.
          </p>
          <div className="cookie-banner__buttons">
            <Button to="/privacy-policy/" target="_blank">
              Read more
            </Button>
            <Button onClick={e => acceptCookieBanner(e)}>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withCookies(CookieBanner)
