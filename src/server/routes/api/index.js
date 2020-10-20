import express from "express";
import listings from "./listings";
import scretch from "./scretch";

const api = express.Router();

api.use("/listings", listings);
api.use("/scretch", scretch);

export default api;
