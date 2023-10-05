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
      cityFrom={flightList[i].cityFrom}
      cityTo={flightList[i].cityTo}
      outboundDate={flightList[i].outboundDate}
      localDeparture={flightList[i].localDeparture}
      localArrival={flightList[i].localArrival}
      price={flightList[i].fare.adults}
      routes={flightList[i].routes}
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
          <h2 className="travel-header">
            Your results from {flightList[0].cityFrom} to {flightList[0].cityTo}
            :
          </h2>
          <>{flightDisplay}</>
        </div>
        <Weather city={location.state.flightList[0].cityTo} />
      </div>
    </>
  );
}

export default FlightsPage;
