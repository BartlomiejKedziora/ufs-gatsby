import "./styles.scss"

import React from "react"

import Button from "components/Button"

const DomesticServices = ({ services_data }) => {
  return (
    <section className="domestic-services">
      <div className="domestic-services__wrapper">
        <div className="container">
          <p className="section-heading">Domestic Services</p>
          <p className="domestic-services__subtitle">At a Glance</p>
          <div className="row">
            {services_data?.map(
              ({ id, slug, acfServices: { title, desc, serviceIcon } }) => {
                return (
                  <div key={id} className="col-4 col-padding">
                    <div className="domestic-services__tail">
                      <div className="domestic-services__img">
                        <img
                          src={serviceIcon?.sourceUrl}
                          alt={serviceIcon?.altText}
                        />
                      </div>
                      <p className="domestic-services__title">{title}</p>
                      <p className="domestic-services__desc">{desc}</p>
                      <Button to={`/services/${slug}/`} className="button-dark">
                        Find out more
                      </Button>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomesticServices
