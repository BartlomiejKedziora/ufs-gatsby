import "./styles.scss"

import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"

import Input from "components/Input"
// import Checkbox from "components/Checkbox"
import CustomSelect from "components/Select/CustomSelect"
import Button from "components/Button"

const options = [
  {
    value: "Google Search",
    label: "Google Search",
  },
  {
    value: "Recommendations",
    label: "Recommendations",
  },
  {
    value: "Local paper",
    label: "Local paper",
  },
  {
    value: "Other",
    label: "Other",
  },
]

const ContactForm = () => {
  const formID = "f994f6d"
  const [send, setSend] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [postcode, setPostcode] = useState("")
  const [source, setSource] = useState("")
  // const [legalFirst, setLegalFirst] = useState(false)

  const isBrowser = typeof window !== "undefined"
  const location = isBrowser ? window.location.href : null

  const resetForm = () => {
    setSend(false)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setPostcode("")
    setSource("")
    // setLegalFirst(false)
  }

  const formSubmit = async e => {
    e.preventDefault()
    setSend(true)
    try {
      let formData = new FormData()

      formData.set("your-name", name)
      formData.set("your-email", email)
      // formData.set("phone", phone)
      formData.set("your-message", message)
      // formData.set("postcode", postcode)
      // formData.set("source", source)
      // formData.set("legalFirst", legalFirst)
      // formData.set("pageurl", location)

      await axios({
        method: "post",
        url: `https://ufs.kteproductions.pl/wp-json/contact-form-7/v1/contact-forms/f994f6d/feedback/`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      // .then(() => {
      //   console.log("Submit success")
      //   resetForm()
      //   navigate("/thank-you/")
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      console.log("Submit success")
      resetForm()
      navigate("/thank-you/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="contact-form">
      <form onSubmit={formSubmit}>
        <Input
          placeholder="Name*"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Input
          placeholder="Phone*"
          type="phone"
          id="phone"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <Input
          placeholder="Email*"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Write your message here"
          type="textarea"
          id="message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows="4"
        />
        <Input
          placeholder="Postcode"
          type="text"
          id="postcode"
          name="postcode"
          value={postcode}
          onChange={e => setPostcode(e.target.value)}
        />
        <p>Where did you hear about us?</p>
        <CustomSelect
          options={options}
          name="source"
          id="source"
          placeholder="Choose option"
        />
        {/* <Checkbox
          name="legalFirst"
          checked={legalFirst}
          onChange={() => setLegalFirst(!legalFirst)}
          required
        >
          Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
        </Checkbox> */}
        <div className="contact-form__btn">
          {/* <Button type="submit" disabled={!legalFirst}> */}
          <Button type="submit">{send === true ? "Sending..." : "Send"}</Button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
