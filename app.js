const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();


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
