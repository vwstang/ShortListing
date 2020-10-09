import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Shortlist from "./components/Shortlist";
import ListingsMap from "./components/ListingsMap";

const App = () => {
  const [shortlist, setShortlist] = useState(null);
  const [hideList, setHideList] = useState(false);

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
      <div className="page-container">
        <Shortlist
          shortlist={shortlist}
          hideList={hideList}
          setHideList={setHideList}
        />
        <ListingsMap hideList={hideList} />
      </div>
    );
  }
};

export default App;
