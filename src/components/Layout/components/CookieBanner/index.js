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
            Korzystamy z plików cookies w celu optymalizacji usług. Jeśli
            korzystasz z naszej witryny bez zmiany ustawień dotyczących cookies
            oznacza, że wyrażasz zgodę na zamieszczanie ich przez nas w Twoim
            urządzeniu.
          </p>
          <Button to="/privacy-policy/" target="_blank">
            Czytaj więcej
          </Button>
          <Button onClick={e => acceptCookieBanner(e)}>zgadzam się</Button>
        </div>
      </div>
    </div>
  )
}

export default withCookies(CookieBanner)
