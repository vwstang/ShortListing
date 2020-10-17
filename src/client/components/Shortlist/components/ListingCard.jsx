import React from "react";

let RL = false;
if (global.window) {
  RL = require("react-leaflet");
}

const ListingCard = ({ listing, activeListing, setActiveListing }) => {
  console.log(listing);
  return (
    <div
      className={`listing-card${
        activeListing === listing.address ? " active" : ""
      }`}
      onClick={() => {
        setActiveListing(listing.address);
      }}
    >
      {listing.address}
    </div>
  );
};

export default ListingCard;
