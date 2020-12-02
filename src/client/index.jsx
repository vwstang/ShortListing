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
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { data: listings } = await axios.get("/api/listings/all");
      if (listings.length > 0) {
        setShortlist(listings);
      } else {
        console.info("Fetching listings resulted in no results.");
        setShortlist([]);
      }
    })();
  }, []);

  useEffect(() => {
    if (shortlist && mapload) {
      // REVIEW: for any other way to wait for all CSS to finish loading
      setTimeout(() => {
        setIsReady(true);
      }, 1000);
    }
  }, [shortlist, mapload]);

  if (!isReady) {
    return <Loading />;
  } else {
    return (
      <div className="page-container">
        <Shortlist
          mapRef={mapRef}
          shortlist={shortlist}
          activeListing={activeListing}
          setActiveListing={setActiveListing}
        />
        <ListingsMap
          mapRef={mapRef}
          shortlist={shortlist}
          hideList={hideList}
          setHideList={setHideList}
          setMapload={setMapload}
          activeListing={activeListing}
          setActiveListing={setActiveListing}
        />
      </div>
    );
  }
};

export default App;
