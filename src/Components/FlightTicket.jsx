import QRCode from "../Images/BoardingPassQR.png";
import "../CssFiles/ProfileCSS.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function FlightTicket() {
  const [passenger, setPassenger] = useState(null);
  const [email, setEmail] = useState(null);
  const [id, setID] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAll();
  }, [passenger, email, id, bookings]);

  const getAll = async () => {
    getUserEmail();
    getUserID();
    getPassengerData();
    getBookings();
  };

  const getUserEmail = async () => {
    try {
      const emailRes = await axios.get(
        `${!process ? "/api" : "http://localhost:8080"}/users/user`,
        {
          withCredentials: true,
        }
      );
      setEmail(emailRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserID = async () => {
    try {
      const idRes = await axios.get(
        `${!process ? "/api" : "http://localhost:8080"}/users/getUserID/` +
          email,
        {
          withCredentials: true,
        }
      );
      setID(idRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPassengerData = async () => {
    try {
      const passengerData = await axios.get(
        `${!process ? "/api" : "http://localhost:8080"}/users/getUserDetails/` +
          id,
        {
          withCredentials: true,
        }
      );
      setPassenger(passengerData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookings = async () => {
    try {
      const bookingsRes = await axios.get(
        `${!process ? "/api" : "http://localhost:8080"}/bookings/getall/` + id,
        {
          withCredentials: true,
        }
      );
      setBookings(bookingsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const dateFormatter = (date) => {
    let output = date.substring(0, 10);
    let year = output.substring(0, 4);
    let month = output.substring(5, 7);
    let day = output.substring(8, 10);
    output = day + "/" + month + "/" + year;
    return output;
  };

  const listMaker = () => {
    const output = [];
    for (let i = 0; i < bookings.length; i++) {
      output.push(
        <div className="flight-pass">
          <h2 className="flight-pass-header">Flight Pass {i + 1}</h2>
          <div>
            <p>
              <strong>Passenger:&thinsp;</strong>
              {passenger.firstName} {passenger.lastName}
            </p>
            <p>
              <strong>Departure:&thinsp;</strong>
              {bookings[i].cityFrom} -- {bookings[i].flightFrom}
            </p>
            <p>
              <strong>Destination:&thinsp;</strong>
              {bookings[i].cityTo} -- {bookings[i].flightTo}
            </p>
            <p>
              <strong>Date:&thinsp;</strong>
              {dateFormatter(bookings[i].outboundDate)}
            </p>
            <p>
              <strong>You paid:&thinsp;</strong>£{bookings[i].fare}
            </p>
            <p>
              <strong>Booking date:&thinsp;</strong>
              {bookings[i].bookingDate}
            </p>
          </div>
          <div className="qr-code">
            <img src={QRCode} alt="QR Code" />
          </div>
        </div>
      );
    }
    return output;
  };

  return <>{listMaker()}</>;
}

export default FlightTicket;
