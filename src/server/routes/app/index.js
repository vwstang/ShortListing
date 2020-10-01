import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../../../client";
import { compilePage, genScriptTags } from "../../utilities";

const app = express.Router();

app.get("/", async (__req, res) => {
  const app = renderToString(<App />);
  const tags = genScriptTags([{ name: "script.js", version: 1 }]);
  const context = { react: app, script: tags };
  const html = compilePage("../../pages/index.html", context);
  return res.send(html);
});

export default app;
