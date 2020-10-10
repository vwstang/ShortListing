import React from "react";

const Shortlist = ({ shortlist, hideList, setHideList }) => {
  return (
    <aside className="shortlist-container">
      <button
        className={`showHideShortlist${hideList ? ' collapsed' : ''}`}
        onClick={() => setHideList(!hideList)}
      ></button>
      <h2 className="shortlist-title">Shortlisted</h2>
      {shortlist.length > 0 ? (
        shortlist.map((listing) => (
          <p key={listing.address}>{listing.address}</p>
        ))
      ) : (
        <p>No listings shortlisted</p>
      )}
    </aside>
  );
};

export default Shortlist;
