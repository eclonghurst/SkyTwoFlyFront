import React from "react";
import Flight from "./Flight";
import Weather from "./Weather";
import "../CssFiles/FlightPageCSS.css";
import "../CssFiles/Weather.css";
import { useLocation } from "react-router";

function FlightsPage() {
  const location = useLocation();
  //   console.log({ departure });

  const flightDisplay = location.state.flightList.map((flight) => (
    <Flight>{flight}</Flight>
  ));

  return (
    <>
      <div className="flight-page-container">
        <div className="flight-container">
          <p>{location.state.fly_from}</p>
          <p>{location.state.flightList[0].cityTo}</p>
          <>{flightDisplay}</>
          <Flight />
          <Flight />
        </div>
        <Weather city={location.state.flightList[0].cityTo} />
      </div>
    </>
  );
}

export default FlightsPage;
