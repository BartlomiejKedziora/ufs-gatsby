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
  const formID = "1076"
  const [botField, setBotField] = useState(false)
  const [send, setSend] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [postcode, setPostcode] = useState("")
  const [source, setSource] = useState(null)
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
    setSource(null)
    // setLegalFirst(false)
  }

  const formSubmit = async e => {
    if (botField) return false
    e.preventDefault()
    setSend(true)
    try {
      let formData = new FormData()

      formData.set("your-name", name)
      formData.set("your-email", email)
      formData.set("your-phone", phone)
      formData.set("your-message", message)
      formData.set("_wpcf7_unit_tag", "wpcf7-f1076-p1095-o1")
      formData.set("your-postcode", postcode)
      formData.set("source", source?.value)
      formData.set("pageurl", location)
      // formData.set("legalFirst", legalFirst)

      await axios({
        method: "post",
        url: `https://ufs.kteproductions.pl/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback/`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(() => {
          console.log("Submit success")
          resetForm()
          navigate("/thank-you/")
        })
        .catch(err => {
          console.log(err)
        })
      resetForm()
      navigate("/thank-you/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="contact-form">
      <form onSubmit={formSubmit}>
        <input
          type="checkbox"
          name="bot_field"
          className="bot-field"
          onChange={e => setBotField(e.target.value)}
        />
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
          defaultValue={source}
          onChange={setSource}
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
