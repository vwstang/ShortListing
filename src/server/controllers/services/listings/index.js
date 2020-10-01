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
    url: payload.url
  };
  db.get("listings").push(newListing).write();
  return true;
};
