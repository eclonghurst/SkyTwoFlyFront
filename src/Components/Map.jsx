import React from "react";
import { useState, useEffect, useRef } from "react";
// import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../CssFiles/MapCSS.css";
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYnItd2F0c29uIiwiYSI6ImNsbWYzbDE2cjI2YWIzZm14NjBzZGNtcmsifQ.ZYUdF_rHxMF7qdA93FndYA';


function Map(props){

  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);

useEffect(() => {
  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [lng, lat],
  zoom: zoom
  });
  });

    return(
    <div className="map">
        <h3>Is a map for {props.destination} displaying?</h3>
        <div ref={mapContainer} className="map"/>

    </div>);


};

export default Map;