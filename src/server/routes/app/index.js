import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../../client";
import { compilePage, genScriptTags } from "../../utilities";

const app = express.Router();

app.get("/", async (__req, res) => {
  const react = renderToString(<App />);

  const tags = genScriptTags([{ name: "script.js", version: 1 }]);

  const context = [{ details: react, ip: "{{react}}" }];

  const compiledHTML = compilePage("../../pages/index.html", context, {
    tags,
    insertionPoint: "{{scripts}}"
  });

  return res.send(compiledHTML);
});

export default app;
