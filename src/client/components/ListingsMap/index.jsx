import React, { useRef, useEffect } from "react";

let RL = false;
let Map = false;
let TileLayer = false;
let Marker = false;
let Popup = false;
if (global.window) {
  RL = require("react-leaflet");
  Map = RL.Map;
  TileLayer = RL.TileLayer;
  Marker = RL.Marker;
  Popup = RL.Popup;
}

const ListingsMap = (props) => {
  // const posWestway = [43.8346, -79.49707]; // Westway
  // const posBarli = [43.85702, -79.50328]; // Barli
  // const pos59Sedgeway = [43.84396, -79.55456]; // 59 Sedgeway
  // const pos53Sedgeway = [43.84391, -79.55473]; // 53 Sedgeway
  const listRefs = props.shortlist.reduce((refObj, listing) => {
    refObj[listing.address] = useRef(null);
    return refObj;
  }, {});

  useEffect(() => {
    /*
     * NOTE: activeListing useEffect hook
     *       Only need to check props.activeListing and not whether
     *       listRefs or props.mapRef is not ndefined as those will
     *       be set by the time activeListing can be anything but null
     */
    props.activeListing
      ? listRefs[props.activeListing].current.leafletElement.openPopup()
      : props.mapRef.current.leafletElement.closePopup();
  }, [props.activeListing]);

  /*
   * NOTE: mapCenterOrBounds
   *       - If no listings shortlisted, center on Toronto by default
   *       - If only one listing shortlisted, center on that
   *       - If more than one listing shortlisted, set map bounds
   */
  const mapCenterOrBounds = {
    ...(props.shortlist.length === 0 && { center: [43.6532, -79.3832] }),
    ...(props.shortlist.length === 1 && { center: props.shortlist[0] }),
    ...(props.shortlist.length > 0 && {
      bounds: props.shortlist.map((listing) => [
        listing.latitude,
        listing.longitude
      ])
    })
  };

  return (
    <>
      {/* NOTE: react-leaflet does not support server-side render, so global.window is required */}
      {global.window && (
        <div
          className={`map-container${props.hideList ? " full" : ""}`}
          onTransitionEnd={(e) => {
            if (props.mapRef && e.propertyName === "margin-left") {
              props.mapRef.current.leafletElement.invalidateSize(true);
            }
          }}
        >
          <button
            className={`showHideShortlist${props.hideList ? " collapsed" : ""}`}
            onClick={() => props.setHideList(!props.hideList)}
          ></button>
          <Map
            {...mapCenterOrBounds}
            zoom={15}
            whenReady={() => props.setMapload(true)}
            ref={props.mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {props.shortlist.length > 0 &&
              props.shortlist.map((listing) => (
                <Marker
                  ref={listRefs[listing.address]}
                  key={listing.address}
                  position={[listing.latitude, listing.longitude]}
                >
                  <Popup
                    onOpen={() => props.setActiveListing(listing.address)}
                    onClose={() => props.setActiveListing(null)}
                    closeButton={false}
                  >
                    {listing.address}
                  </Popup>
                </Marker>
              ))}
            {/* <Marker position={posWestway}>
              <Popup
                onOpen={() => props.setActiveListing("178 Westway Crescent")}
                onClose={() => props.setActiveListing(null)}
                closeButton={false}
              >
                Hello
              </Popup>
            </Marker>
            <Marker position={posBarli}>
              <Popup
                onOpen={() => props.setActiveListing("68 Barli Crescent")}
                onClose={() => props.setActiveListing(null)}
                closeButton={false}
              >
                Hello
              </Popup>
            </Marker>
            <Marker position={pos59Sedgeway}>
              <Popup
                onOpen={() => props.setActiveListing("59 Sedgeway Heights")}
                onClose={() => props.setActiveListing(null)}
                closeButton={false}
              >
                Hello
              </Popup>
            </Marker>
            <Marker position={pos53Sedgeway}>
              <Popup
                onOpen={() => props.setActiveListing("53 Sedgeway Heights")}
                onClose={() => props.setActiveListing(null)}
                closeButton={false}
              >
                Hello
              </Popup>
            </Marker> */}
          </Map>
        </div>
      )}
    </>
  );
};

export default ListingsMap;
