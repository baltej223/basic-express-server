import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(8000);
