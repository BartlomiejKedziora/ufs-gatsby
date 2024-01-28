import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

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
              const item_services = !!item?.acfServices
                ? item?.acfServices
                : item?.acfCommercial

              return (
                <div
                  key={item?.id}
                  className="col-12 col-md-6 col-lg-4 col-padding"
                >
                  <Link
                    to={`/${!!item?.acfServices ? "services" : "commercial"}/${
                      item?.slug
                    }/`}
                    className="domestic-services__tail"
                  >
                    <div className="domestic-services__img">
                      <img
                        src={item_services?.serviceIcon?.sourceUrl}
                        alt={item_services?.serviceIcon?.altText}
                      />
                    </div>
                    <p className="domestic-services__title">
                      {item_services?.title}
                    </p>
                    {/* <p className="domestic-services__desc">
                      {item_services?.desc}
                    </p> */}
                    <Button className="button button-dark">
                      Find out more
                    </Button>
                  </Link>
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
