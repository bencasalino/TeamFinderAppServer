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
}, {
  id: 3,
  name: "Portland",
  state: "Oregon",
  country: "USA"
}, {
  id: 4,
  name: "Salt Lake City",
  state: "Utah",
  country: "USA"
}, {
  id: 5,
  name: "Los Angeles",
  state: "California",
  country: "USA"
}

];


var teams = [{
  city: "Denver",
  team: "COLORADO Rapids FC",
  division: "MLS",
  website: "http://www.nba.com/nuggets/",
  image: "rapids.gif"
}, {
  city: "Phoenix",
  team: "Phoenix Rising FC",
  division: "NASL",
  website: "http://www.phxrisingfc.com/"
}, {
  city: "Portland",
  team: "Portland Timbers",
  division: "MLS",
  website: "http://www.timbers.com/"
},{
  city: "Salt Lake City",
  team: "Real Salt Lake",
  division: "MLS",
  website: "http://rsl.com/"
}, {
  city: "Los Angeles",
  team: "LAFC",
  division: "MLS",
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
