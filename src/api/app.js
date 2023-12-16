require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cors = require("cors");

// call all module route here
const router = require("./server/routes/app.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

app.use(cors());
app.use("/api", router);
app.use("/", (req, res) => {
  res.json({
    message:
      "Selamat Datang di API SecondHand, Silhakan cek dokumentasi disini: https://documenter.getpostman.com/view/20277894/UzXKVy2P"
  });
});

module.exports = app;
