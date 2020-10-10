import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Shortlist from "./components/Shortlist";
import ListingsMap from "./components/ListingsMap";
import Loading from "./components/Loading";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [mapload, setMapload] = useState(true);
  const [shortlist, setShortlist] = useState(null);
  const [hideList, setHideList] = useState(false);
  const [activeListing, setActiveListing] = useState(null);

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

  useEffect(() => {
    if (shortlist && mapload) setIsReady(true);
  }, [shortlist, mapload]);

  if (!isReady) {
    return <Loading />;
  } else {
    return (
      <div className="page-container">
        <Shortlist
          shortlist={shortlist}
          hideList={hideList}
          setHideList={setHideList}
          activeListing={activeListing}
          setActiveListing={setActiveListing}
        />
        <ListingsMap
          shortlist={shortlist}
          hideList={hideList}
          setMapload={setMapload}
          activeListing={activeListing}
          setActiveListing={setActiveListing}
        />
      </div>
    );
  }
};

export default App;
