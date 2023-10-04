import React from "react";
import QRCode from "../Images/BoardingPassQR.png";
import "../CssFiles/ProfileCSS.css"


function FlightTicket (){
    return (
        <div className="flight-pass">
          <h2 className="flight-pass-header">Flight Pass</h2>
          <div>
            <p><strong>Passenger:</strong></p>
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
      );
    }

    export default FlightTicket;