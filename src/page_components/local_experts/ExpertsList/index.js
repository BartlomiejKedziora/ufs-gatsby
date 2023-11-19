import "./styles.scss"

import React from "react"

import Button from "components/Button"
import { Link } from "gatsby"

const ExpertsList = ({
  experts_to_show,
  currentLocation,
  // setIsModalQuoteOpen,
}) => {
  return (
    <section className="experts-list">
      <ul className="experts-list__items">
        {experts_to_show.map(
          ({
            slug,
            id,
            locations,
            acfExperts: { address, gallery, mainimg, name, phone, website },
          }) => {
            return (
              <li key={id} className="experts-list__item">
                <div className="experts-list__item-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="experts-list__content--wrapper">
                          <div className="experts-list__content">
                            <Link to={`/local-experts/${slug}/`}>
                              <h3 className="section-heading">
                                Floor Sanders{" "}
                                <span>{locations?.nodes?.[0]?.name}</span>
                              </h3>
                            </Link>
                            <div className="experts-list__info">
                              <div className="experts-list__photo">
                                <img
                                  src={mainimg?.sourceUrl}
                                  alt={mainimg?.altText}
                                />
                              </div>
                              <div className="experts-list__details">
                                <div className="experts-list__details-row">
                                  <p>Business contact:</p>
                                  <p>{name}</p>
                                </div>
                                <div className="experts-list__details-row">
                                  <p>Region:</p>
                                  <p>{locations?.nodes?.[0]?.name}</p>
                                </div>
                                <div className="experts-list__details-row">
                                  <p>Website:</p>
                                  <a
                                    href={website}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {website}
                                  </a>
                                </div>
                                <div className="experts-list__details-row">
                                  <p>Contact us:</p>
                                  <a href={`tel:${phone}`}>{phone}</a>
                                </div>
                                <div className="experts-list__details-row">
                                  <p>Address:</p>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: address,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="experts-list__buttons">
                            <Button to={`/local-experts/${slug}/`}>
                              Find out more
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="experts-list__gallery">
                          <div className="row">
                            <div className="col-12">
                              <div className="experts-list__gallery--1">
                                <img
                                  src={gallery?.[0]?.sourceUrl}
                                  alt={gallery?.[0]?.altText}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="experts-list__gallery--2">
                                <img
                                  src={gallery?.[1]?.sourceUrl}
                                  alt={gallery?.[1]?.altText}
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="experts-list__gallery--2">
                                <img
                                  src={gallery?.[2]?.sourceUrl}
                                  alt={gallery?.[2]?.altText}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          }
        )}
      </ul>
    </section>
  )
}

export default ExpertsList
