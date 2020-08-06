const express = require("express");
const app = express();

const tf = require("@tensorflow/tfjs");
const tfcore = require("@tensorflow/tfjs-node");
const mobilenet = require("@tensorflow-models/mobilenet");
const fs = require("fs");
const formidable = require("formidable");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const server = require("http").Server(app);

const port = process.env.PORT || 80;




server.listen(port, (req, res) => {
  console.log(`Server is up and running @ port ${port}`)
})
