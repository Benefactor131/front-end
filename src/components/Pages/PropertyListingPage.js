import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../assets/css/PropertyListingPage.css";

function PropertyListingPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var temp;

  useEffect(() => {
    const url = `https://bairbnb-back-end.herokuapp.com/property`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const result = Object.keys(json).map((key) => json[key]);
        setData(result);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  temp = data[0];

  console.log(temp);

  return (
    <div>
      <Header />
      <div className="searchPage">
        <div className="searchPage__info">
          <h1>All Properties</h1>
          <div>
            <Button
               onClick={() => navigate('/property')}
              variant="outlined"
              style={{
                background: "linear-gradient(to bottom left, #4cafff, #15e4fe)",
                color: "white",
                textTransform: "inherit",
                marginTop: 20,
                fontWeight: 600,
                borderRadius: 30,
                margin: 5,
              }}
            >
              All Properties
            </Button>
            <Button
               onClick={() => navigate('/property/bestsellers')}
              variant="outlined"
              style={{
                background: "linear-gradient(to bottom left, #4cafff, #15e4fe)",
                color: "white",
                textTransform: "inherit",
                marginTop: 20,
                fontWeight: 600,
                borderRadius: 30,
                margin: 5,
              }}
            >
              Bestsellers
            </Button>
          </div>
        </div>
        {temp &&
          temp.map((prop) => (
            <div className="searchResult" onClick={() => navigate(`/property/${prop._id}`)} key={prop._id}>
              <img src={prop.photoUrls} alt="" />

              <div className="searchResult__info">
                <div className="searchResult__infoTop">
                  <p>{prop.location}</p>
                  <h3>{prop.propertyTitle}</h3>
                  <ul
                    style={{
                      borderTop: "1 solid",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "flex",
                      flexWrap: "wrap",
                      marginTop: "10px",
                      fontSize: "13px",
                      color: "gray",
                      listStyle: "disc",
                    }}
                  >
                    {prop.amenities &&
                      prop.amenities
                        .slice(0, prop.amenities.length)
                        .map((amenity) => (
                          <li style={{ paddingRight: "17px" }} key={amenity}>
                            {amenity}
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="searchResult__infoBottom">
                  <div className="searchResults__price">
                    <h2>${prop.rentPrice} CAD</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default PropertyListingPage;
