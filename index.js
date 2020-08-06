const express = require("express");
const app = express();

const server = require("http").Server(app);

const port = process.env.PORT || 80;




server.listen(port, (req, res) => {
  console.log(`Server is up and running @ port ${port}`)
})
