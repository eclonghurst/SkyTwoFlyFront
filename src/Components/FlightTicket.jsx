
import QRCode from "../Images/BoardingPassQR.png";
import "../CssFiles/ProfileCSS.css"
import axios from "axios";
import React, { useState, useEffect } from "react";


  function FlightTicket() {
    const [passengerData, setPassengerData] = useState({
      firstName: "",
      lastName: "",
      flightNumber: "",
      departure: "",
      destination: "",
      date: "",
      time: "",
      seat: "",
    });

    useEffect(() => {
      const fetchCurrentUserEmail = async () => {
        try {
          const response = await axios.get("http://localhost:8080/users/user",{ withCredentials: true });
          const userEmail = response.data;

          fetchUserDetailsByEmail(userEmail);
        } catch (error) {
          console.error("Failed to fetch current user email:", error);
        }
      };

      const fetchUserDetailsByEmail = async (userEmail) => {
        try {
          const response = await axios.get(`http://localhost:8080/users/getUserID/${userEmail}`,{ withCredentials: true });
          const userIdFromResponse = response.data;

          fetchCompleteUserDetailsById(userIdFromResponse);
        } catch (error) {
          console.error("Failed to fetch user ID:", error);
        }
      };

      const fetchCompleteUserDetailsById = async (userIdFromResponse) => {
        try {
          const response = await axios.get(`http://localhost:8080/users/getUserDetails/${userIdFromResponse}`,{ withCredentials: true });
          console.log("User Details Response:", response.data);

          setPassengerData(response.data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchCurrentUserEmail();
  }, []);



    return (

      <>
      <h1>Welcome Back {passengerData.firstName}</h1>
        <div className="flight-pass">
          <h2 className="flight-pass-header">Flight Pass</h2>
          <div>
            <p><strong>Passenger:</strong>{passengerData.firstName} {passengerData.lastName}</p>
            <p><strong>Flight Number:</strong></p>
            <p><strong>Departure:</strong></p>
            <p><strong>Destination:</strong></p>
            <p><strong>Date:</strong></p>
            <p><strong>Time:</strong></p>
            <p><strong>Seat:</strong></p>
          </div>
          <div className="qr-code">
            <img src = {QRCode} alt = "QR Code"/>
          </div>
        </div>
        </>
      );
    }

    export default FlightTicket;