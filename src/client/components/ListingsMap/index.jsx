import React, { useRef } from "react";

let RL = false;
let Map = false;
let TileLayer = false;
let Marker = false;
let Popup = false;
if (global.window) {
  RL = require("react-leaflet");
  Map = RL.Map;
  TileLayer = RL.TileLayer;
  Marker = RL.Marker;
  Popup = RL.Popup;
}

const ShortlistMap = (props) => {
  const posWestway = [43.8346, -79.49707]; // Westway
  const posBarli = [43.85702, -79.50328]; // Barli
  const pos59Sedgeway = [43.84396, -79.55456]; // 59 Sedgeway
  const pos53Sedgeway = [43.84391, -79.55473]; // 53 Sedgeway
  const mapRef = useRef(null);

  return (
    <>
      {global.window && (
        <div
          className={`map-container${props.hideList ? " full" : ""}`}
          onTransitionEnd={() => {
            mapRef && mapRef.current.leafletElement.invalidateSize(true);
          }}
        >
          <Map
            bounds={[posWestway, posBarli, pos59Sedgeway, pos53Sedgeway]}
            zoom={15}
            whenReady={() => console.log("MAP FINISHED LOADING")}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={posWestway}></Marker>
            <Marker position={posBarli}></Marker>
            <Marker position={pos59Sedgeway}></Marker>
            <Marker position={pos53Sedgeway}></Marker>
          </Map>
        </div>
      )}
    </>
  );
};

export default ShortlistMap;
