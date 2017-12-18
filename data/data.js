var cities = [{
  id: 1,
  name: "denver",
  state: "colorado",
  country: "usa"
}, {
  id: 2,
  name: "phoenix",
  state: "arizona",
  country: "usa"
}, {
  id: 3,
  name: "portland",
  state: "oregon",
  country: "usa"
}, {
  id: 4,
  name: "salt lake",
  state: "utah",
  country: "usa"
}, {
  id: 5,
  name: "los angeles",
  state: "california",
  country: "usa"
}];


var teams = [{
  city: "denver",
  team: "colorado rapids",
  division: "mls",
  website: "http://www.nba.com/nuggets/"
}, {
  city: "phoenix",
  team: "phoenix rising fc",
  division: "nasl",
  website: "http://www.phxrisingfc.com/"
}, {
  city: "portland",
  team: "portland timbers",
  division: "mls",
  website: "http://www.timbers.com/"
},{
  city: "salt lake city",
  team: "real salt lake fc",
  division: "mls",
  website: "http://rsl.com/"
}, {
  city: "los angeles",
  team: "LAFC",
  division: "mls",
  website: "https://www.lafc.com/"
}];



// function combine(data1, data2) {
//   var result = [];
//   for (let i = 0; i < data1.length; i++) {
//     result.push(data1[i]);
//     for (let j = 0; j < data2.length; j++) {
//       if (result[i].name === data2[j].city) {
//         result[i].team = data2[j].team
//         result[i].division = data2[j].division
//         result[i].website = data2[j].website
//       }
//     }
//   }
//   return result;
// }
// console.log(combine(cities, teams));

module.exports = {
  // jabba,
  cities,
  teams
}
