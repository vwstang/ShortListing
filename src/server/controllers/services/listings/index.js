import db from "../../db/index";

export const selListing = () => {
  return db.get("listings").value();
};

export const insListing = (payload) => {
  const newListing = {
    ...(payload.mlsid && { mlsid: payload.mlsid }),
    ...(payload.address && { address: payload.address }),
    ...(payload.city && { city: payload.city }),
    ...(payload.district && { district: payload.district }),
    ...(payload.ewmajor && { ewmajor: payload.ewmajor }),
    ...(payload.nsmajor && { nsmajor: payload.nsmajor }),
    ...(payload.mlsinfo && { mlsinfo: payload.mlsinfo }),
    ...(payload.virtualtour && { virtualtour: payload.virtualtour }),
    ...(payload.sqftrange && { sqftrange: payload.sqftrange }),
    ...(payload.frontage && { frontage: payload.frontage }),
    ...(payload.lotdepth && { lotdepth: payload.lotdepth }),
    ...(payload.bedrooms && { bedrooms: payload.bedrooms }),
    ...(payload.dens && { dens: payload.dens }),
    ...(payload.bathrooms && { bathrooms: payload.bathrooms }),
    ...(payload.basement && { basement: payload.basement }),
    ...(payload.parking && { parking: payload.parking }),
    ...(payload.exposure && { exposure: payload.exposure }),
    ...(payload.listprice && { listprice: payload.listprice }),
    ...(payload.comparable && { comparable: payload.comparable }),
    ...(payload.proptax && { proptax: payload.proptax }),
    ...(payload.url && { url: payload.url })
  };
  db.get("listings").push(newListing).write();
  return true;
};
