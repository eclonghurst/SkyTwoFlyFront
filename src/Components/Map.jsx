import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../CssFiles/MapCSS.css";


function Map(){

    const [viewport, setViewport] = useState({
        height: "70%",
        width: "70%",
        latitude: 37.7577, 
        longitude: -122.4376, 
        zoom: 10, 
      });

    return(
    <div className="map">
        <h3>Is a map displaying?</h3>
         <ReactMapGL
        viewState={viewport}
        onViewportChange={newViewport => setViewport(newViewport)}
        mapboxApiAccessToken='pk.eyJ1IjoiYnItd2F0c29uIiwiYSI6ImNsbWYzbDE2cjI2YWIzZm14NjBzZGNtcmsifQ.ZYUdF_rHxMF7qdA93FndYA'
        mapStyle="mapbox://styles/mapbox/light-v9"
      />
    </div>);


};

export default Map;