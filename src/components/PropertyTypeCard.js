import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/PropertyTypeCard.css";

const PropertyType = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  var temp;

  useEffect(() => {
    const url = `https://bairbnb-back-end.herokuapp.com/property/types`;

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
    <div className="propertyTypes">
      {temp &&
        temp.slice(0, 5).map((propertyType) => (
          <div key={propertyType}>
            <div
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => navigate(`/property/types/${propertyType}`)}
            >
              <div className="card">
                <img
                  src={(() => {
                    switch (propertyType) {
                      case "Hotels":
                        return "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";
                      case "Condos":
                        return "https://images.unsplash.com/photo-1622371804656-2fe306c2430e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
                      case "Cycladic Houses":
                        return "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGdyZWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
                      case "Resorts":
                        return "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
                      case "Motels":
                        return "https://images.unsplash.com/photo-1585354745459-79a5f21f0d6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80";
                      default:
                        return "https://images.unsplash.com/photo-1622371804656-2fe306c2430e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
                    }
                  })()}
                  alt=""
                />
                <div className="card_desc">
                  <h2>{propertyType}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PropertyType;
