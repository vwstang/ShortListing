import React from "react";

const Shortlist = ({ shortlist, hideList, setHideList }) => {
  return (
    <aside className="shortlist-container">
      <h2 className="shortlist-title">Shortlisted</h2>
      {shortlist.length > 0 ? (
        shortlist.map((listing) => (
          <p key={listing.address}>{listing.address}</p>
        ))
      ) : (
        <p>No listings shortlisted</p>
      )}
      <button
        className="showHideShortlist"
        onClick={() => setHideList(!hideList)}
      >
        Hide
      </button>
    </aside>
  );
};

export default Shortlist;
