import db from "../../db/index";

export const selListing = (payload) => {
  // if (payload)
}

export const insListing = (payload) => {
  console.log(payload);
  db.get("listings").push({ url: payload.url }).write();
  return true;
};
