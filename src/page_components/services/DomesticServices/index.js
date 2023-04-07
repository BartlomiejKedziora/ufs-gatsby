import "./styles.scss"

import React from "react"

import Button from "components/Button"

const DomesticServices = ({ heading, subtitle, services_data }) => {
  return (
    <section className="domestic-services">
      <div className="domestic-services__wrapper">
        <div className="container">
          <p className="section-heading">{heading}</p>
          <p className="domestic-services__subtitle">{subtitle}</p>
          <div className="row">
            {services_data?.map(item => {
              const item_services = item?.acfServices
                ? item?.acfServices
                : item?.acfCommercial

              return (
                <div key={item?.id} className="col-4 col-padding">
                  <div className="domestic-services__tail">
                    <div className="domestic-services__img">
                      <img
                        src={item_services?.serviceIcon?.sourceUrl}
                        alt={item_services?.serviceIcon?.altText}
                      />
                    </div>
                    <p className="domestic-services__title">
                      {item_services?.title}
                    </p>
                    <p className="domestic-services__desc">
                      {item_services?.desc}
                    </p>
                    <Button
                      to={`/services/${item?.slug}/`}
                      className="button-dark"
                    >
                      Find out more
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomesticServices
