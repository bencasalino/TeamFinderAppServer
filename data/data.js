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
  name: "District of Columbia",
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
  name: "New Jersey",
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
},{
  id: 22,
  name: "Anaheim",
  state: "California",
  country: "USA"
},{
  id: 23,
  name: "Phoenix",
  state: "Arizona",
  country: "USA"
},{
  id: 24,
  name: "San Francisco",
  state: "California",
  country: "USA"
},{
  id: 25,
  name: "Indianapolis",
  state: "Indiani",
  country: "USA"
},{
  id: 26,
  name: "Miami",
  state: "Florida",
  country: "USA"
},{
  id: 27,
  name: "New York",
  state: "New York",
  country: "USA"
},{
  id: 28,
  name: "Jacksonville",
  state: "Florida",
  country: "USA"
}
];

// ****************************************************************************
var teams = [
  {
    city: "Indianapolis",
    team: "Indy Eleven",
    division: "images/nasl.png",
    website: "http://www.atl.com/",
    image: "images/ind.png"
  },
  {
    city: "Miami",
    team: "Miami FC",
    division: "images/nasl.png",
    website: "http://www.atl.com/",
    image: "images/mia.png"
  },
  {
    city: "New York",
    team: "NY Cosmos",
    division: "images/nasl.png",
    website: "http://www.atl.com/",
    image: "images/nycos.gif"
  },
  {
    city: "Jacksonville",
    team: "Jacksonville Armada",
  division: "images/nasl.png",
    website: "http://www.armadafc.com/",
    image: "images/jack.png"
  },
{
  city: "Atlanta",
  team: "Atlanta United FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/atl.png"
},
{
  city: "Chicago",
  team: "Chicago Fire FC",
  division: "images/mls.png",
  website: "http://www.chi.com/",
  image: "images/chi.gif"
},
{
  city: "Columbus",
  team: "Columbus Crew",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/col.png"
},
{
  city: "District of Columbia",
  team: "D.C. United",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/dc.png"
},
{
  city: "Montreal",
  team: "Montreal Impact FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/mon.gif"
},
{
  city: "New England",
  team: "New England Revolution",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/ne.gif"
},
{
  city: "New York City",
  team: "NYFC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/nyfc.png"
},
{
  city: "New Jersey",
  team: "New York Red Bulls",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/nyrb2.png"
},
{
  city: "Orlando",
  team: "Orlando United FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/orl.png"
},
{
  city: "Philadelphia",
  team: "Philadelphia Union",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/phi.gif"
},
{
  city: "Toronto",
  team: "Toronto FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/tor.gif"
},
{
  city: "Dallas",
  team: "FC Dallas",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/dal.gif"
},
{
  city: "Houston",
  team: "Houston Dynamo",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/hou.gif"
},
{
  city: "Los Angeles",
  team: "LAFC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/lafc.png"
},
{
  city: "Minnesota",
  team: "Minnesota United",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/min.png"
},
{
  city: "Portland",
  team: "Portland Timbers",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/poralt.gif"
},
{
  city: "Salt Lake City",
  team: "Real Salt Lake",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/rsl.png"
},
{
  city: "San Jose",
  team: "San Jose Earthquakes",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/saj.png"
},
{
  city: "Seattle",
  team: "Seattle Sounders",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/sea.gif"
},
{
  city: "Kansas City",
  team: "Sporting KC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/kc.png"
},
{
  city: "Vancouver",
  team: "Vancouver Whitecaps",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/van.gif"
},
{
  city: "Anaheim",
  team: "LA Galaxy",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/lag.png"
},
{
  city: "Phoenix",
  team: "Phoenix Rising FC",
  division: "images/usl.png",
  website: "http://www.atl.com/",
  image: "images/phx.png"
}, {
  city: "San Francisco",
  team: "San Francisco Deltas",
  division: "images/nasl.png",
  website: "http://www.atl.com/",
  image: "images/sf.png"
}
];



function combine(data1, data2) {
  var result = [];
  for (let i = 0; i < data1.length; i++) {
    result.push(data1[i]);
    for (let j = 0; j < data2.length; j++) {
      if (result[i].name === data2[j].city) {
        result[i].team = data2[j].team
        result[i].division = data2[j].division
        result[i].website = data2[j].website
        result[i].image = data2[j].image
      }
    }
  }
  return result;
}
// combine(cities, teams);

// console.log(combine(cities, teams));

module.exports = {
  combine,
  cities,
  teams
}
