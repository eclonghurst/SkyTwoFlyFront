import React from "react";
import { useState, useEffect, useRef } from "react";
// import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../CssFiles/MapCSS.css";
import airportJSON from "../airports.json";
import mapboxgl from 'mapbox-gl';
import { Marker } from "react-map-gl";
mapboxgl.accessToken = 'pk.eyJ1IjoiYnItd2F0c29uIiwiYSI6ImNsbWYzbDE2cjI2YWIzZm14NjBzZGNtcmsifQ.ZYUdF_rHxMF7qdA93FndYA';



function Map(props){

  const airportCoordsDest = airportJSON.find(
    (airportDest) => props.destination == airportDest.iata_code);

    const airportCoordsDept = airportJSON.find(
      (airportDept) => props.depart == airportDept.iata_code);

  const mapContainer = useRef(null);
const map = useRef(null);





useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [airportCoordsDest.longitude_deg, airportCoordsDest.latitude_deg],
  zoom: 2.5
  });
  const marker1 = new mapboxgl.Marker({"color":"rgba(169, 62, 214)"})
.setLngLat([airportCoordsDept.longitude_deg, airportCoordsDept.latitude_deg])
.addTo(map.current);
  const marker2 = new mapboxgl.Marker({"color":"rgba(169, 62, 214)"})
.setLngLat([airportCoordsDest.longitude_deg, airportCoordsDest.latitude_deg])
.addTo(map.current);
  });

    return(
    <div className="map">
        <h3>Take a look at where you're going...</h3>
        <div ref={mapContainer} className="map"/>

    </div>);


};

export default Map;