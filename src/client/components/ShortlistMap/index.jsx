import React from "react";

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
  const position = [51.505, -0.09];
  return (
    <>
      {global.window && (
        <Map
          style={{ height: "80vh", width: "80%" }}
          center={position}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
        </Map>
      )}
    </>
  );
};

export default ShortlistMap;
