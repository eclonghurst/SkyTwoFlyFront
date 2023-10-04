import React from "react";
import { useState, useEffect, useRef } from "react";
// import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../CssFiles/MapCSS.css";
import airportJSON from "../airports.json";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnItd2F0c29uIiwiYSI6ImNsbWYzbDE2cjI2YWIzZm14NjBzZGNtcmsifQ.ZYUdF_rHxMF7qdA93FndYA';



function Map(props){

  const airportCoordsDest = airportJSON.find(
    (airportDest) => props.destination == airportDest.iata_code);

  const mapContainer = useRef(null);
const map = useRef(null);





useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [airportCoordsDest.longitude_deg, airportCoordsDest.latitude_deg],
  zoom: 9
  });
  });

    return(
    <div className="map">
        <h3>Is a map for {props.destination} displaying?</h3>
        <div ref={mapContainer} className="map"/>

    </div>);


};

export default Map;