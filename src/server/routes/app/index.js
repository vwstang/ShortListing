import express from "express";

const app = express.Router();

app.get("/", async (req, res) => {
  return res.send("hello");
});

export default app;
