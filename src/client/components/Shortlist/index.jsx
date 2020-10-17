import React from "react";
import ListingCard from "./components/ListingCard";

const Shortlist = ({
  shortlist,
  activeListing,
  setActiveListing
}) => {
  return (
    <aside className="shortlist-container">
      <h1 className="shortlist-title">ShortListing</h1>
      <button
        className="add-new-listing"
        onClick={() => console.log("Add a new listing!")}
      >
        Shortlist {shortlist.length > 0 ? "another" : "a"} listing
      </button>
      {shortlist.length > 0 ? (
        shortlist.map((listing) => (
          <ListingCard
            key={listing.address}
            listing={listing}
            activeListing={activeListing}
            setActiveListing={setActiveListing}
          />
        ))
      ) : (
        <p>No listings shortlisted</p>
      )}
    </aside>
  );
};

export default Shortlist;
