
const app = express();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// my data
const data = require("./data/data");
// activate cors and bp?
app.use(cors());
app.use(bodyParser.json());

// get route in js
app.get('/', function (request, response) {
    response.json(data.teams);
    response.json(data.cites);
      console.log("get route log from app.js ");
});

// post route in js
app.post("/", (request, response) => {
  response.json(" hpost route from app.js ");
});


//
app.listen(process.env.PORT || 9000,() => {
  console.log("port is working ");
}

);
