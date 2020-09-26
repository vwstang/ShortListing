import express from "express";
import listings from "./listings";

const api = express.Router();

api.use("/listings", listings);

export default api;
