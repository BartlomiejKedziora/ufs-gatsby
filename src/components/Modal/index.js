import "./styles.scss"

import React from "react"

const Modal = ({ title, children, closeFn }) => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__head">
          <p>{title}</p>
          <button onClick={closeFn} aria-label="Close modal">
            <img src={require("assets/icons/close-round.svg").default} alt="" />
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
