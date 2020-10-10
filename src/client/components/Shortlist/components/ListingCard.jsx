import React from "react";

const ListingCard = ({ listing, activeListing, setActiveListing }) => {
  console.log(listing);
  return (
    <div
      className={`listing-card${
        activeListing === listing.address ? " active" : ""
      }`}
      onClick={() => setActiveListing(listing.address)}
    >
      {listing.address}
    </div>
  );
};

export default ListingCard;
