import "./styles.scss"

import React from "react"

import Modal from "components/Modal"
import ContactForm from "components/ContactForm"

const ModalQuote = ({ closeFn }) => {
  return (
    <Modal closeFn={closeFn}>
      <div className="modal-quote">
        <h2 className="section-heading">
          Get a <span>Quote</span>
        </h2>
        <p className="section__subtitle">
          Contact us now for a no obligation quote we are happy to assist you
          with any qiestion that you may have
        </p>
        <ContactForm />
      </div>
    </Modal>
  )
}

export default ModalQuote
