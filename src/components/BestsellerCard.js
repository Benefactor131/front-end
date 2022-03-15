import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/BestsellerCard.css";

function BestsellerCard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var temp;

  useEffect(() => {
    const url = `https://bairbnb-back-end.herokuapp.com/property/bestsellers`;

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

  return (
    <div className="bestsellers">
      {temp &&
        temp.slice(0, 4).map((bestseller) => (
          <div key={bestseller._id}>
            <div onClick={() => navigate(`/property/${bestseller._id}`)}>
              <div className="bestseller_card">
                <img src={bestseller.photoUrls[0]} alt="" />

                <div className="card_description">
                  <h5>
                    {bestseller.location.slice(
                      0,
                      bestseller.location.lastIndexOf(",")
                    )}
                  </h5>
                  <p>${bestseller.rentPrice} CAD / night</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BestsellerCard;
