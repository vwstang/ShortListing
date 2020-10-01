import express from "express";
// import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../../client/hydrate";

const app = express.Router();

app.get("/", async (req, res) => {
  const app = renderToString(<App />);
  const html = `<html><body><div id="approot">${app}</div><script src="script.js"></script></body></html>`;

  return res.send(html);
});

export default app;
