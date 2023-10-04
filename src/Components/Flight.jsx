import React from "react";
import "../CssFiles/FlightCSS.css";
import airlineLogo from "../Images/airlineLogo.png";
import aircraft from "../Images/aircraft.png";
import { Link } from "react-router-dom";
import airlineJSON from "../airlines.json";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Flight(props) {
  const navigate = useNavigate();

  const airlineList = airlineJSON.find(
    (airline) => props.airline?.toLowerCase() == airline.id.toLowerCase()
  );

  const handleClick = () => {
    navigate("/BookingPage", { replace: true, state: props });
  };

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

            <button onClick={handleClick} className="book-button">
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
