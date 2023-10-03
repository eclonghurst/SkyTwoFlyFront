import React from "react";
import "../CssFiles/FlightCSS.css";
import airlineLogo from "../Images/airlineLogo.png";
import aircraft from "../Images/aircraft.png";
import { Link } from "react-router-dom";
import airlineJSON from "../airlines.json";

function Flight(props) {
  const airlineList = airlineJSON.find(
    (airline) => props.airline.toLowerCase() == airline.id.toLowerCase()
  );

  return (
    <>
      <div className="flight-container">
        <div className="flight-panel">
          <div className="container-airline-details">
            <img className="airline-logo" src={airlineList.logo}></img>
            <h3>&thinsp; {airlineList.name}</h3>
            <h5 className="duration">
              &thinsp; {Math.trunc(props.duration / 60 / 60)} hours{" "}
              {(props.duration / 60) % 60} mins
            </h5>
          </div>
          <div className="container-flight-details">
            <div className="departure">{props.depart}</div>
            <div className="flight-pointer"></div>
            <div className="'flight-route">
              <img src={aircraft} alt="aircraft" className="aircraft-icon" />
            </div>
            <div className="destination">{props.destination}</div>
          </div>
          <div className="container-flight-details-price">
            <p>£{props.price}</p>

            <Link to="/BookingPage" state={{ destination: props.destination }}>
              <button className="book-button">Book</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
