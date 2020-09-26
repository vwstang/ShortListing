import express from "express";
import { insListing } from "../../../controllers/services/listings";

const listings = express.Router();

listings.get("/", async (req, res) => {});

listings.post("/", async (req, res) => {
  insListing(req.body);
  return res.sendStatus(204);
});

export default listings;
