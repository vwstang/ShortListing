import express from "express";
import { header } from "express-validator";
import { getHtmlFromUrl } from "../../../controllers/services/scretch";
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
      const html = await getHtmlFromUrl(scretchUrl);
      if (html === "NOT_HTML") return res.sendStatus(404);

      // Load to Cheerio

      return res.sendStatus(200);
    } catch (err) {
      console.error(err.message);
      console.error("[Occurrence]: routes.api.scretch.get.root");
      return res.sendStatus(500);
    }
  }
);

export default scretch;
