import React, { useState } from "react";
import swal from "sweetalert";
import AddNew from "./components/AddNew";
import ListingCard from "./components/ListingCard";

const Shortlist = ({ shortlist, activeListing, setActiveListing, mapRef }) => {
  const [addingNew, setAddingNew] = useState(false);
  const [uncommittedChgs, setUncommittedChgs] = useState(false);

  return (
    <aside
      className="shortlist-container"
      onClick={() => {
        if (activeListing) {
          setActiveListing(null);
        }
      }}
    >
      <h1 className="shortlist-title">ShortListing</h1>
      <button
        className="shortlist-addnew-button"
        onClick={async () => {
          if (addingNew) {
            let cancelConfirmed = true;
            if (uncommittedChgs) {
              cancelConfirmed = await swal({
                title: "Cancel shortlisting",
                text: "Unsaved changes will be lost. Are you sure?",
                icon: "warning",
                buttons: {
                  confirm: {
                    text: "Yes",
                    value: true
                  },
                  cancel: {
                    text: "No",
                    value: false,
                    visible: true
                  }
                },
                closeOnClickOutside: false
              });
            }
            if (cancelConfirmed) {
              setAddingNew(false);
              setUncommittedChgs(false);
            }
          } else {
            setAddingNew(true);
          }
        }}
      >
        {addingNew
          ? "Close"
          : `Shortlist ${shortlist.length > 0 ? "another" : "a"} listing`}
      </button>
      <div className="shortlist-subcontainer">
        <div
          className={`shortlist-addnew-wrapper${addingNew ? " active" : ""}`}
        >
          <AddNew
            active={addingNew}
            uncommittedChgs={uncommittedChgs}
            setUncommittedChgs={setUncommittedChgs}
          />
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
