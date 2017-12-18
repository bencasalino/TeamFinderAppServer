const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const data = require("./data/data");
const cities = data.cities
const teams = data.teams
var result = [];

function combine(data1, data2) {
  for (let i = 0; i < data1.length; i++) {
    result.push(data1[i]);
    for (let j = 0; j < data2.length; j++) {
      if (result[i].name === data2[j].city) {
        result[i].team = data2[j].team
        result[i].division = data2[j].division
        result[i].website = data2[j].website
      }
    }
  }
}
combine(cities, teams);

app.use(cors());
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.json(result);
  // response.json(data.cites);
});

app.post("/", (request, response) => {
  response.json(request.body);
});

app.listen(process.env.PORT || 9000, () => {
  console.log("this is the app js log");
});

// console.log(combine(cities, teams));
