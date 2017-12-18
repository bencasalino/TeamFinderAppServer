var cities = [{
  id: 1,
  name: "Atlanta",
  state: "Georgia",
  country: "USA"
}, {
  id: 2,
  name: "Chicago",
  state: "Illinois",
  country: "USA"
}, {
  id: 3,
  name: "Columbus",
  state: "Ohio",
  country: "USA"
}, {
  id: 4,
  name: "Washington",
  state: "Washington",
  country: "USA"
}, {
  id: 5,
  name: "Montreal",
  state: "Quebec",
  country: "Canada"
}, {
  id: 6,
  name: "New England",
  state: "Massachusetts",
  country: "USA"
}, {
  id: 7,
  name: "New York City",
  state: "New York",
  country: "USA"
}, {
  id: 8,
  name: "Harrison",
  state: "New Jersey",
  country: "USA"
}, {
  id: 9,
  name: "Orlando",
  state: "Florida",
  country: "USA"
}, {
  id: 10,
  name: "Philadelphia",
  state: "Pennsylvania",
  country: "USA"
}, {
  id: 11,
  name: "Toronto",
  state: "Ontario",
  country: "Canada"
}, {
  id: 12,
  name: "Dallas",
  state: "Texas",
  country: "USA"
}, {
  id: 13,
  name: "Houston",
  state: "Texas",
  country: "USA"
}, {
  id: 14,
  name: "Los Angeles",
  state: "California",
  country: "USA"
}, {
  id: 15,
  name: "Minnesota",
  state: "Minneapolis",
  country: "USA"
}, {
  id: 16,
  name: "Portland",
  state: "Oregon",
  country: "USA"
}, {
  id: 17,
  name: "Salt Lake City",
  state: "Utah",
  country: "USA"
}, {
  id: 18,
  name: "San Jose",
  state: "California",
  country: "USA"
}, {
  id: 19,
  name: "Seattle",
  state: "Washington",
  country: "USA"
}, {
  id: 20,
  name: "Kansas City",
  state: "Kansas",
  country: "USA"
},{
  id: 21,
  name: "Vancouver",
  state: "British Columbia",
  country: "Canada"
} , {
  id: 22,
  name: "Carson",
  state: "California",
  country: "USA"
}


];


var teams = [
{
  city: "Atlanta",
  team: "Atlanta United FC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Chicago",
  team: "Chicago Fire FC",
  division: "MLS",
  website: "http://www.chi.com/",
  image: "atl.gif"
},
{
  city: "Columbus",
  team: "Columbus Crew",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Washington",
  team: "D.C. United",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Montreal",
  team: "Montreal Impact FC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "New England",
  team: "New England Revolution",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "New York",
  team: "New York City United",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Harrison",
  team: "New York Red Bulls",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Orlando",
  team: "Orlando United FC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Philadelphia",
  team: "Philadelphia Union",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Toronto",
  team: "Toronto FC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Dallas",
  team: "FC Dallas",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Houston",
  team: "Houston Dynamo",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Los Angeles",
  team: "LAFC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Minnesota",
  team: "Minnesota United",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Portland",
  team: "Portland Timbers",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Salt Lake City",
  team: "Real Salt Lake",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "San Jose",
  team: "San Jose Earthquakes",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Seattle",
  team: "Seattle Sounders",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Kansas City",
  team: "Sporting KC",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Vancouver",
  team: "Vancouver Whitecaps",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
},
{
  city: "Carson",
  team: "LA Galaxy",
  division: "MLS",
  website: "http://www.atl.com/",
  image: "atl.gif"
}
];



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
