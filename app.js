// npm init
// npm install express -S
// npm install cors
// npm install - - save body-parser

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");


const data = require("./data/data");


app.use(cors());
app.use(bodyParser.json());


app.get('/', function (request, response) {
    response.json(data.jabba);
});

app.post("/", (request, response) => {
  response.json(" heyyyooo ");
});




app.listen(process.env.PORT || 9000,() => {
  console.log("skadjalsd");
}

);
