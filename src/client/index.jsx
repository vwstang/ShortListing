import React, { useState, useEffect } from "react";
import axios from "axios";
import ShortlistMap from "./components/ShortlistMap";

const App = (props) => {
  const [shortlist, setShortlist] = useState(null);

  useEffect(() => {
    (async () => {
      const { data: listings } = await axios.get("/api/listings/all");
      if (listings.length > 0) {
        setShortlist(listings);
      } else {
        console.info("Fetching listings resulted in no results.");
      }
    })();
  }, []);

  if (!shortlist) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <ShortlistMap />
        {shortlist.length > 0 ? (
          shortlist.map((listing) => <p>{listing.address}</p>)
        ) : (
          <p>No listings shortlisted</p>
        )}
      </>
    );
  }
};

export default App;
