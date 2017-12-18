var cities = [{
  id: 1,
  name: "Denver",
  state: "Colorado",
  country: "USA"
}, {
  id: 2,
  name: "Phoenix",
  state: "Arizona",
  country: "USA"
}
];


var teams = [{
  city: "Denver",
  team: "Colorado Rapids FC",
  division: "MLS",
  website: "http://www.nba.com/nuggets/",
  image: "rapids.gif"
}, {
  city: "Phoenix",
  team: "Phoenix Rising FC",
  division: "NASL",
  website: "http://www.phxrisingfc.com/",
  image: "rapids.gif"
}
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
