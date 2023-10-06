import React from "react";
import "../CssFiles/FlightCSS.css";
import airlineLogo from "../Images/airlineLogo.png";
import aircraft from "../Images/aircraft.png";
import { Link } from "react-router-dom";
import airlineJSON from "../airlines.json";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

function Flight(props) {
  const [booked, setBooked] = React.useState(false);
  const navigate = useNavigate();

  const airlineList = airlineJSON.find(
    (airline) => props.airline?.toLowerCase() == airline.id.toLowerCase()
  );

  const bookFlight = async () => {
    const userRes = await axios.get(
      `${!process ? "/api" : "http://localhost:8080"}/users/user`,
      {
        withCredentials: true,
      }
    );
    if (userRes.status == 401) {
      alert("Please log in to book a flight");
      return;
    }
    const userIdRes = await axios.get(
      `${!process ? "/api" : "http://localhost:8080"}/users/getUserID/` +
        userRes.data,
      { withCredentials: true }
    );

    const bookRes = await axios.post(
      `${!process ? "/api" : "http://localhost:8080"}/bookings/create`,
      {
        flightTo: props.destination,
        flightFrom: props.depart,
        flightNumber: props.routes.flightNo,
        adults: props.adults,
        bookingDate: new Date().toLocaleDateString().substring(0, 10),
        outboundDate: props.localDeparture,
        fare: props.price,
        cityFrom: props.cityFrom,
        cityTo: props.cityTo,
        localDeparture: props.localDeparture,
        localArrival: props.localArrival,
        routes: [
          {
            airportFrom: props.depart,
            airportTo: props.destination,
            airline: props.airline,
            flightNo: props.flightNo,
            cabin: props.cabin,
          },
        ],
        user: {
          userId: userIdRes.data,
        },
      },
      { withCredentials: true }
    );
    // console.log(bookRes.status);
    // console.log(bookRes.data);
    if (bookRes.status == 201) {
      setBooked(true);
      alert("Flight booked!"); //change to something nicer maybe???
    }
  };

  const handleClick = () => {
    if (props.bookingActive) {
      bookFlight();
    } else {
      navigate("/BookingPage", { replace: true, state: props });
    }
  };

  const handleProfileClick = () => {
    navigate("/Profile", { replace: true });
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
            {!booked && (
              <>
                <p>£{props.price}</p>
                <button onClick={handleClick} className="book-button">
                  Book
                </button>
              </>
            )}
            {booked && (
              <>
                <p>You have successfully booked your flight!</p>
                <button onClick={handleProfileClick} className="book-button">
                  View your bookings!
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight;
