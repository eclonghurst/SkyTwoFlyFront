import React from "react";
import { useEffect, useRef } from "react";
// import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../CssFiles/MapCSS.css";
import airportJSON from "../airports.json";
import mapboxgl from 'mapbox-gl';
import { Marker, Souce, Layer } from "react-map-gl";
import {FeatureCollection} from 'geojson';
import GeoJSON from 'geojson';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnItd2F0c29uIiwiYSI6ImNsbWYzbDE2cjI2YWIzZm14NjBzZGNtcmsifQ.ZYUdF_rHxMF7qdA93FndYA';



function Map(props){

  const airportCoordsDest = airportJSON.find(
    (airportDest) => props.destination == airportDest.iata_code);

    const airportCoordsDept = airportJSON.find(
      (airportDept) => props.depart == airportDept.iata_code);

  const mapContainer = useRef(null);
const map = useRef(null);

const geojson = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'LineString',
  'coordinates': [[airportCoordsDept.longitude_deg, airportCoordsDept.latitude_deg],
  [airportCoordsDest.longitude_deg, airportCoordsDest.latitude_deg]]
  }
  }
  ]
  };

  const speedFactor = 30;
  let animation;
  let startTime=0;
  let progress=0;
  let resetTime = false;




useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [(airportCoordsDept.longitude_deg+airportCoordsDest.longitude_deg)/2, (airportCoordsDept.latitude_deg+airportCoordsDest.latitude_deg)/2],
  zoom: 3
  });
  const marker1 = new mapboxgl.Marker({"color":"rgba(169, 62, 214)"})
.setLngLat([airportCoordsDept.longitude_deg, airportCoordsDept.latitude_deg])
.addTo(map.current);
  const marker2 = new mapboxgl.Marker({"color":"rgba(169, 62, 214)"})
.setLngLat([airportCoordsDest.longitude_deg, airportCoordsDest.latitude_deg])
.addTo(map.current);

map.current.on('load', () => {
  map.current.addSource('line', {
  'type': 'geojson',
  'data': geojson
  });

  map.current.addLayer({
    'id': 'line-animation',
    'type': 'line',
    'source': 'line',
    'layout': {
    'line-cap': 'round',
    'line-join': 'round'
    },
    'paint': {
    'line-color': '#ed6498',
    'line-width': 5,
    'line-opacity': 0.8
    }
    });
  });


  });


    return(
    <div className="map">
        <h3>Take a look at where you're going...</h3>
        <div ref={mapContainer} className="map"/>

    </div>);


};

export default Map;