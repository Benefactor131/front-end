import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import "../../assets/css/PropertyPage.css";

const PropertyPage = () => {
  const [property, setProperty] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://bairbnb-back-end.herokuapp.com/property/${id}`;

    fetch(URL)
      .then((response) => response.json())

      .then((json) => {
        setProperty(json.result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <section id="resort-description-section">
          <div className="wrapper">
            <div>
              <h2 style={{ paddingTop: 55 }}>{property.propertyTitle}</h2>
              <div className="property_images">
                <div className="main-image">
                  {property.photoUrls &&
                    property.photoUrls.slice(0, 1).map((img) => (
                      <img
                        className="property_img"
                        src={img}
                        alt=""
                        key={img}
                        style={{
                          maxWidth: 600,
                          width: "100%",
                          height: 410,
                          border: "1px none",
                          borderTopLeftRadius: 15,
                          borderBottomLeftRadius: 15,
                        }}
                      />
                    ))}
                </div>
                <div className="other-images">
                  <div className="first-row-images">
                    {property.photoUrls &&
                      property.photoUrls.slice(1, 2).map((img) => (
                        <img
                          className="property_img"
                          src={img}
                          alt=""
                          key={img}
                          style={{
                            maxWidth: 312,
                            width: "100%",
                            height: 205,
                            paddingLeft: 8,
                            paddingRight: 0,
                            paddingTop: 0,
                          }}
                        />
                      ))}
                    {property.photoUrls &&
                      property.photoUrls.slice(2, 3).map((img) => (
                        <img
                          className="property_img"
                          src={img}
                          alt=""
                          key={img}
                          style={{
                            maxWidth: 312,
                            width: "100%",
                            height: 205,
                            paddingLeft: 8,
                            paddingTop: 8,
                            paddingRight: 0,
                          }}
                        />
                      ))}
                  </div>
                  <div className="second-row-images">
                    {property.photoUrls &&
                      property.photoUrls.slice(3, 4).map((img) => (
                        <img
                          className="property_img"
                          src={img}
                          alt=""
                          key={img}
                          style={{
                            maxWidth: 312,
                            width: "100%",
                            height: 205,
                            border: "1px none",
                            borderTopRightRadius: 15,
                            paddingLeft: 8,
                            paddingRight: 0,
                            paddingTop: 0,
                          }}
                        />
                      ))}
                    {property.photoUrls &&
                      property.photoUrls.slice(4, 5).map((img) => (
                        <img
                          className="property_img"
                          src={img}
                          alt=""
                          key={img}
                          style={{
                            maxWidth: 312,
                            width: "100%",
                            height: 205,
                            border: "1px none",
                            borderBottomRightRadius: 15,
                            paddingLeft: 8,
                            paddingTop: 8,
                            paddingRight: 0,
                          }}
                        />
                      ))}
                  </div>
                </div>
              </div>

              <div className="resort-description-area">
                <div className="resort-description-content-area">
                  <div className="resort-details-area">
                    <div className="resort-details-title-area">
                      <h3>Details</h3>
                      <div className="resort-price-area">
                        <p style={{ fontSize: 19, fontWeight: 600 }}>
                          ${property.rentPrice} CAD
                        </p>
                        <p style={{ paddingLeft: 4 }}>/ night</p>
                      </div>
                    </div>
                    <div className="resort-desc-area">
                      <p>{property.propertyDesc}</p>
                    </div>
                  </div>
                  <div className="resort-features-area">
                    <h3>Amenities</h3>
                    <div className="resort-amenities-area">
                      {property.amenities &&
                        property.amenities
                          .map((amenity) => <p key={amenity}>{amenity}</p>)}
                    </div>

                    <h3>House Rules</h3>
                    <div className="resort-rules-area">
                      {property.houseRules &&
                        property.houseRules
                          .map((rule) => <p key={rule}>{rule}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyPage;
