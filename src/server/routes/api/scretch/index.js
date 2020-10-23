import express from "express";
import { header } from "express-validator";
import Scretch from "../../../controllers/services/scretch";
import { validateReq } from "../../../middlewares";

const scretch = express.Router();

scretch.get(
  "/",
  header("scretch-url").isURL().withMessage("Valid URL must be provided"),
  validateReq,
  async (req, res) => {
    try {
      // Retrieve HTML from specified URL
      const { "scretch-url": scretchUrl } = req.headers;

      // const scretch = new Scretch({ debugMode: true });
      const scretch = new Scretch();

      scretch.loadPage(scretchUrl);

      const result = await scretch.get({
        municipality: false,
        neighbourhood: false,
        housetype: false,
        housestyle: false,
        fronting: false,
        frontage: false,
        lotdepth: false,
        bedrooms: false,
        bathrooms: false,
        basement: false,
        kitchens: false,
        fireplace: false,
        centralvac: false,
        pool: false,
        garage: false,
        parking: false,
        taxes: false,
        taxyear: false,
        camfees: false,
        addlfees: false,
        virtualtour: false,
        liststatus: false,
        listprice: false,
        approxval: false
      });
      if (!result) {
        return res.sendStatus(404);
      } else {
        return res.json(result);
      }
    } catch (err) {
      console.error(err.message);
      console.error("[Occurrence]: routes.api.scretch.get.root");
      return res.sendStatus(500);
    }
  }
);

export default scretch;
