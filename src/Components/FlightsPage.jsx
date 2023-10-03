import React from "react";
import Flight from "./Flight";
import Weather from "./Weather";
import "../CssFiles/FlightPageCSS.css";
import "../CssFiles/Weather.css";
import { useLocation } from "react-router";

function FlightsPage() {
  const location = useLocation();
  //   console.log({ departure });
  const flightList = location.state.flightList;

  const flightDisplay = flightList.map((flight, i) => (
    <Flight
      key={i}
      depart={flightList[i].flyFrom}
      destination={flightList[i].flyTo}
      price={flightList[i].fare.adults}
      airline={flightList[i].airlines[0]}
      duration={flightList[i].duration}
    >
      {flight}
    </Flight>
  ));

  return (
    <>
      <div className="flight-page-container">
        <div className="flight-container">
          {/* <p>{location.state.fly_from}</p>
          <p>{location.state.flightList[0].cityTo}</p> */}
          <>{flightDisplay}</>
        </div>
        <Weather city={location.state.flightList[0].cityTo} />
      </div>
    </>
  );
}

export default FlightsPage;
