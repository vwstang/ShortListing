import React from "react";

let RL = false;
if (global.window) {
  RL = require("react-leaflet");
}

const ListingCard = ({ listing, activeListing, setActiveListing, mapRef }) => {
  return (
    <div
      className={`listing-card${
        activeListing === listing.address ? " active" : ""
      }`}
      onClick={() => {
        if (activeListing === listing.address) {
          setActiveListing(null);
        } else {
          setActiveListing(listing.address);
          mapRef.current.leafletElement.flyTo(
            [listing.latitude, listing.longitude],
            15
          );
        }
      }}
    >
      {listing.address}
    </div>
  );
};

export default ListingCard;
