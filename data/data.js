// heroku restart -a infinite-plateau-10584
// to clear out added answers


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
  state: "Indiana",
  country: "USA"
},{
  id: 26,
  name: "Miami",
  state: "Florida",
  country: "USA"
},{
  id: 27,
  name: "Jacksonville",
  state: "Florida",
  country: "USA"
},{
  id: 28,
  name: "Bethelehem",
  state: "Pennsylvania",
  country: "USA"
},{
  id: 29,
  name: "Charleston",
  state: "South Carolina",
  country: "USA"
},{
  id: 30,
  name: "Charlotte",
  state: "North Carolina",
  country: "USA"
},{
  id: 31,
  name: "Colorado Springs",
  state: "Colorado",
  country: "USA"
},{
  id: 32,
  name: "Cincinnati",
  state: "Ohio",
  country: "USA"
},{
  id: 33,
  name: "Harrisburg",
  state: "Pennsylvania",
  country: "USA"
},{
  id: 34,
  name: "Louisville",
  state: "Kentucky",
  country: "USA"
},{
  id: 35,
  name: "Oklahoma City",
  state: "Oklahoma",
  country: "USA"
},{
  id: 36,
  name: "Orange County",
  state: "California",
  country: "USA"
},{
  id: 37,
  name: "Ottawa",
  state: "Ontario",
  country: "Canada"
},{
  id: 38,
  name: "Pittsburg",
  state: "Pennsylvania",
  country: "USA"
},{
  id: 39,
  name: "Reno",
  state: "Nevada",
  country: "USA"
},{
  id: 40,
  name: "Richmond",
  state: "Virgina",
  country: "USA"
},{
  id: 41,
  name: "Rochester",
  state: "New York",
  country: "USA"
},{
  id: 42,
  name: "Sacramento",
  state: "California",
  country: "USA"
},{
  id: 43,
  name: "St. Louis",
  state: "Missouri",
  country: "USA"
},{
  id: 44,
  name: "San Antonio",
  state: "Texas",
  country: "USA"
},{
  id: 45,
  name: "Springfield",
  state: "Missouri",
  country: "USA"
},{
  id: 46,
  name: "Tampa Bay",
  state: "Florida",
  country: "USA"
},{
  id: 47,
  name: "Tulsa",
  state: "Oklahoma",
  country: "USA"
},{
  id: 48,
  name: "Corpus Christi",
  state: "Texas",
  country: "USA"
},{
  id: 49,
  name: "Long Island",
  state: "New York",
  country: "USA"
},{
  id: 50,
  name: "Denver",
  state: "Colorado",
  country: "USA"
}
];

// ****************************************************************************
var teams = [
  {
    city: "Denver",
    team: "Colorado Rapids FC",
    division: "images/mls.png",
    website: "https://www.coloradorapids.com/",
    image: "images/col.gif"
  },
  {
    city: "Bethelehem",
    team: "Bethelehem Steel FC",
    division: "images/usl.png",
    website: "http://www.bethlehemsteelfc.com/",
    image: "images/beth.png"
  },
  {
    city: "Charleston",
    team: "Charleston Battery",
    division: "images/usl.png",
    website: "http://www.charlestonbattery.com/",
    image: "images/char.gif"
  },
  {
    city: "Charlotte",
    team: "Charlotte Independence",
    division: "images/usl.png",
    website: "http://www.charlotteindependence.com/",
    image: "images/cha.png"
  },
  {
    city: "Colorado Springs",
    team: "Springs Switcbacks FC",
    division: "images/usl.png",
    website: "http://www.switchbacksfc.com/",
    image: "images/cosp.png"
  },
  {
    city: "Cincinnati",
    team: "FC Cincinnati",
    division: "images/nasl.png",
    website: "http://www.fccincinnati.com/",
    image: "images/cin.png"
  },
  {
    city: "Harrisburg",
    team: "Harrisburg Islanders",
  division: "images/usl.png",
    website: "http://cityislanders.com/",
    image: "images/harris.png"
  },
  {
    city: "Louisville",
    team: "Louisville City FC",
  division: "images/usl.png",
    website: "http://www.louisvillecityfc.com/",
    image: "images/lou.png"
  },
  {
    city: "Orange County",
    team: "Orange County SC",
  division: "images/usl.png",
    website: "http://www.orangecountysoccer.com/",
    image: "images/orgco.png"
  },
  {
    city: "Oklahoma City",
    team: "OKC Energy FC",
  division: "images/usl.png",
    website: "http://www.energyfc.com/",
    image: "images/okc.png"
  },
  {
    city: "Ottawa",
    team: "Ottawa Fury FC",
  division: "images/usl.png",
    website: "http://www.ottawafuryfc.com/",
    image: "images/ott.png"
  },
  {
    city: "Pittsburg",
    team: "Pittsburg Riverounds",
  division: "images/usl.png",
    website: "http://www.riverhounds.com/",
    image: "images/pitt.gif"
  },
  {
    city: "Richmond",
    team: "Richmond Kickers",
  division: "images/usl.png",
    website: "http://www.richmondkickers.com/",
    image: "images/rich.gif"
  },
  {
    city: "Reno",
    team: "Reno 1868 FC",
  division: "images/usl.png",
    website: "http://www.reno1868fc.com/",
    image: "images/reno.png"
  },
  {
    city: "Corpus Christi",
    team: "Rio Grande Valley FC",
  division: "images/usl.png",
    website: "http://www.rgvfc.com/",
    image: "images/rio.png"
  },
  {
    city: "Rochester",
    team: "Rochester Rhinos",
  division: "images/usl.png",
    website: "http://www.rhinossoccer.com/",
    image: "images/roch.png"
  },
  {
    city: "Sacramento",
    team: "Sacramento FC",
  division: "images/usl.png",
    website: "http://www.sacrepublicfc.com/",
    image: "images/sac.png"
  },
  {
    city: "St. Louis",
    team: "St. Louis FC",
  division: "images/usl.png",
    website: "http://www.saintlouisfc.com/",
    image: "images/lou.png"
  },
  {
    city: "San Antonio",
    team: "San Antonio FC",
  division: "images/usl.png",
    website: "http://www.sanantoniofc.com/",
    image: "images/san.png"
  },
  {
    city: "Springfield",
    team: "Swope Park Rangers",
  division: "images/usl.png",
    website: "https://www.sportingkc.com/rangers",
    image: "images/kc2.png"
  },
  {
    city: "Tampa Bay",
    team: "Tampa Bay Rowdies",
  division: "images/usl.png",
    website: "http://www.rowdiessoccer.com/",
    image: "images/tb.png"
  },
  {
    city: "Tulsa",
    team: "Tulsa Roughnecks FC",
  division: "images/usl.png",
    website: "http://www.roughnecksfc.com/",
    image: "images/tul.png"
  },
{
  city: "Atlanta",
  team: "Atlanta United FC",
  division: "images/mls.png",
  website: "https://www.atlutd.com/",
  image: "images/atl.png"
},
{
  city: "Chicago",
  team: "Chicago Fire FC",
  division: "images/mls.png",
  website: "https://www.chicago-fire.com/",
  image: "images/chi.gif"
},
{
  city: "Columbus",
  team: "Columbus Crew",
  division: "images/mls.png",
  website: "https://www.columbuscrewsc.com/",
  image: "images/col.png"
},
{
  city: "District of Columbia",
  team: "D.C. United",
  division: "images/mls.png",
  website: "https://www.dcunited.com/",
  image: "images/dc.png"
},
{
  city: "Montreal",
  team: "Montreal Impact FC",
  division: "images/mls.png",
  website: "https://www.impactmontreal.com/",
  image: "images/mon.gif"
},
{
  city: "New England",
  team: "New England Revolution",
  division: "images/mls.png",
  website: "https://www.revolutionsoccer.net/",
  image: "images/ne.gif"
},
{
  city: "New York City",
  team: "NYFC",
  division: "images/mls.png",
  website: "https://www.nycfc.com/",
  image: "images/nyfc.png"
},
{
  city: "New Jersey",
  team: "New York Red Bulls",
  division: "images/mls.png",
  website: "https://www.newyorkredbulls.com/",
  image: "images/nyrb2.png"
},
{
  city: "Orlando",
  team: "Orlando United FC",
  division: "images/mls.png",
  website: "https://www.orlandocitysc.com/",
  image: "images/orl.png"
},
{
  city: "Philadelphia",
  team: "Philadelphia Union",
  division: "images/mls.png",
  website: "https://www.philadelphiaunion.com/",
  image: "images/phi.gif"
},
{
  city: "Toronto",
  team: "Toronto FC",
  division: "images/mls.png",
  website: "https://www.torontofc.ca/",
  image: "images/tor.gif"
},
{
  city: "Dallas",
  team: "FC Dallas",
  division: "images/mls.png",
  website: "https://www.fcdallas.com/",
  image: "images/dal.gif"
},
{
  city: "Houston",
  team: "Houston Dynamo",
  division: "images/mls.png",
  website: "https://www.houstondynamo.com/",
  image: "images/hou.gif"
},
{
  city: "Los Angeles",
  team: "LAFC",
  division: "images/mls.png",
  website: "https://www.lafc.com/",
  image: "images/lafc.png"
},
{
  city: "Minnesota",
  team: "Minnesota United",
  division: "images/mls.png",
  website: "https://www.mnufc.com/",
  image: "images/min.png"
},
{
  city: "Portland",
  team: "Portland Timbers",
  division: "images/mls.png",
  website: "https://www.timbers.com/",
  image: "images/poralt.gif"
},
{
  city: "Salt Lake City",
  team: "Real Salt Lake",
  division: "images/mls.png",
  website: "https://www.rsl.com/",
  image: "images/rsl.png"
},
{
  city: "San Jose",
  team: "San Jose Earthquakes",
  division: "images/mls.png",
  website: "https://www.sjearthquakes.com/",
  image: "images/saj.png"
},
{
  city: "Seattle",
  team: "Seattle Sounders",
  division: "images/mls.png",
  website: "https://www.soundersfc.com/",
  image: "images/sea.gif"
},
{
  city: "Kansas City",
  team: "Sporting KC",
  division: "images/mls.png",
  website: "https://www.sportingkc.com/",
  image: "images/kc.png"
},
{
  city: "Vancouver",
  team: "Vancouver Whitecaps",
  division: "images/mls.png",
  website: "https://www.whitecapsfc.com/",
  image: "images/van.gif"
},
{
  city: "Anaheim",
  team: "LA Galaxy",
  division: "images/mls.png",
  website: "https://www.lagalaxy.com/",
  image: "images/lag.png"
},
{
  city: "Phoenix",
  team: "Phoenix Rising FC",
  division: "images/usl.png",
  website: "www.phxrisingfc.com",
  image: "images/phx.png"
}, {
  city: "San Francisco",
  team: "San Francisco Deltas",
  division: "images/nasl.png",
  website: "https://sfdeltas.com/",
  image: "images/sf.png"
}
, {
  city: "Indianapolis",
  team: "Indy Eleven",
  division: "images/nasl.png",
  website: "http://www.indyeleven.com/",
  image: "images/ind.png"
}, {
  city: "Miami",
  team: "Miami FC",
  division: "images/nasl.png",
  website: "http://www.miamifc.com/",
  image: "images/mia.png"
}, {
  city: "Jacksonville",
  team: "Jacksonville FC",
  division: "images/nasl.png",
  website: "www.armadafc.com",
  image: "images/jack.png"
}, {
  city: "Long Island",
  team: "New York Cosmos",
  division: "images/nasl.png",
  website: "http://www.nycosmos.com/",
  image: "images/nycos.gif"
}
];


// for testing TDD
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
