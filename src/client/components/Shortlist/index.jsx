import React, { useState } from "react";
import ListingCard from "./components/ListingCard";

const Shortlist = ({ shortlist, activeListing, setActiveListing, mapRef }) => {
  const [addingNew, setAddingNew] = useState(false);

  return (
    <aside className="shortlist-container">
      <h1 className="shortlist-title">ShortListing</h1>
      <button
        className="add-new-listing"
        onClick={() => setAddingNew(!addingNew)}
      >
        {addingNew
          ? "Close"
          : `Shortlist ${shortlist.length > 0 ? "another" : "a"} listing`}
      </button>
      <div className="shortlist-subcontainer">
        <div
          className={`shortlist-addnew-wrapper${addingNew ? " active" : ""}`}
        >
          HELLO
        </div>
        <div
          className={`shortlist-listing-wrapper${addingNew ? "" : " active"}`}
        >
          {shortlist.length > 0 ? (
            shortlist.map((listing) => (
              <ListingCard
                key={listing.address}
                listing={listing}
                activeListing={activeListing}
                setActiveListing={setActiveListing}
                mapRef={mapRef}
              />
            ))
          ) : (
            <p>No listings shortlisted</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Shortlist;
