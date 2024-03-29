import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Carousel from "react-bootstrap/Carousel";
import data from "./properties.json";
import "./Property.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(null); // Initialize as null

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    // From json file
    setProperties(data.properties);
    setProperty(data.properties.find((prop) => prop.id === state.id));
    console.log("Property:", property);
  }, [state.id]);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div
      style={{
        marginTop: "50px",
        background: `url('C:\Users\Sandaru Vihanga\Desktop\react\Skyline estates\react\src\assets\home\propertyback.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Carousel className="slick-slider-custom mt-4 pt-5">
        {property &&
          property.pictures.map((pic, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 img-fluid"
                src={pic}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
      </Carousel>

      <div
        style={
          windowSize.current[0] > 1000
            ? { maxWidth: "50%", margin: "auto", marginTop: "50px" }
            : { margin: "auto" }
        }
      >
        <h1>{property ? property.location : ""}</h1>
      </div>

      <Tabs
        defaultActiveKey="desc"
        transition={false}
        className="mb-3"
        style={
          windowSize.current[0] > 1000
            ? {
                maxWidth: "50%",
                margin: "auto",
                marginTop: "20px",
                backgroundColor: "white",
                borderRadius: "8px",
              }
            : {
                margin: "auto",
                marginTop: "20px",
                backgroundColor: "#20247b",
                borderRadius: "10px",
              }
        }
      >
        <Tab
          eventKey="desc"
          title="Description"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
              }
          }
        >
          <div>
            {property && (
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: {property.type}</li>
                <li className="list-group-item">
                  Bedrooms: {property.bedrooms}
                </li>
                <li className="list-group-item">Price: ${property.price}</li>
                <li className="list-group-item">
                  Date Added:{" "}
                  {property.added
                    ? `${property.added.month} ${property.added.day}, ${property.added.year}`
                    : "N/A"}
                </li>
                <li className="list-group-item">
                  Postal Code: {property.postalCode || "N/A"}
                </li>
              </ul>
            )}
          </div>
          <div style={{ padding: "20px" }}>
            {property ? property.description : ""}
          </div>
        </Tab>
        <Tab
          eventKey="fp"
          title="Floor plan"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
          }
        >
          Floor plan
          <div>
            <img
              src="/src/assets/floor_plan.png"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Tab>
        <Tab
          eventKey="map"
          title="Map"
          style={
            windowSize.current[0] > 1000
              ? {
                  maxWidth: "50%",
                  margin: "auto",
                  marginTop: "20px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
              : {
                  margin: "auto",
                  backgroundColor: "#ffffff",
                  border: "1px solid #000",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "#000",
                }
          }
        >
          Map
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={property ? property.map : ""}
              title="Property Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Property;
