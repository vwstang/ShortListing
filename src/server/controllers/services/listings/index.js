import db from "../../db/index";

export const selListing = (payload) => {
  // if (payload)
};

export const insListing = (payload) => {
  console.log(payload);
  const newListing = {
    address: payload.address,
    city: payload.city,
    district: payload.district,
    ewmajor: payload.esmajor,
    nsmajor: payload.nsmajor,
    mlsinfo: payload.mlsinfo,
    virtualtour: payload.virtualtour,
    sqftrange: payload.sqftrange,
    frontage: payload.frontage,
    lotdepth: payload.lotdepth,
    bedrooms: payload.bedrooms,
    dens: payload.dens,
    bathrooms: payload.bathrooms,
    basement: payload.basement,
    parking: payload.parking,
    exposure: payload.exposure,
    listprice: payload.listprice,
    comparable: payload.comparable,
    proptax: payload.proptax,
    url: payload.url
  };
  db.get("listings").push(newListing).write();
  return true;
};
