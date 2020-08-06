const express = require("express");
const app = express();

const tf = require("@tensorflow/tfjs");
const tfcore = require("@tensorflow/tfjs-node");
const mobilenet = require("@tensorflow-models/mobilenet");

const server = require("http").Server(app);

const port = process.env.PORT || 80;




server.listen(port, (req, res) => {
  console.log(`Server is up and running @ port ${port}`)
})
