import express from "express";
import { selListing, insListing } from "../../../controllers/services/listings";

const listings = express.Router();

listings.get("/all", async (req, res) => {
  const allListings = selListing();
  return res.json(allListings);
});

listings.post("/", async (req, res) => {
  insListing(req.body);
  return res.sendStatus(204);
});

export default listings;
