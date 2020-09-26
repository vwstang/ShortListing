import db from "../../db/index";

export const insListing = (payload) => {
  console.log(payload);
  db.get("listings").push({ url: payload.url }).write();
  return true;
};
