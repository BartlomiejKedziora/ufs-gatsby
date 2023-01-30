import "./styles.scss"

import React, { useEffect, useState } from "react"
import { withCookies } from "react-cookie"

// import Button from "components/Button"

const CookieBanner = ({ cookies }) => {
  const [cookieBanner, setCookieBanner] = useState("")

  useEffect(() => {
    const isAcceptedCoookie = !!cookies.get("cookie-accept-ufs")
    !isAcceptedCoookie && setCookieBanner(true)
  }, [cookies])

  // TODO: zaimportowac Bitton i dodac Link, odkomentowac acceptCookieBanner i bedzie wszystko hulac :)
  // Odkomentowac w Layout

  // const acceptCookieBanner = e => {
  //   e.preventDefault()
  //   const promiseSetCookie = new Promise(resolve =>
  //     resolve(cookies.set("cookie-accept-ufs", "active", { path: "/" }))
  //   )
  //   promiseSetCookie.then(() => {
  //     setCookieBanner(false)
  //   })
  // }

  return (
    <div
      className={`cookie-banner${cookieBanner ? " cookie-banner--open" : ""}`}
    >
      <p>
        Korzystamy z plików cookies w celu optymalizacji usług. Jeśli korzystasz
        z naszej witryny bez zmiany ustawień dotyczących cookies oznacza, że
        wyrażasz zgodę na zamieszczanie ich przez nas w Twoim urządzeniu.
        <a href="/polityka-prywatnosci/" target="_blank">
          Czytaj więcej
        </a>
      </p>
      {/* <Button onClick={e => acceptCookieBanner(e)}>zgadzam się</Button> */}
    </div>
  )
}

export default withCookies(CookieBanner)
