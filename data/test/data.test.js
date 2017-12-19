// asert
const assert = require("assert");
const data = require("../data");


// DATA 1
var dataSet1 = [{
  id: 1,
  name: "Atlanta",
  state: "Georgia",
  country: "USA"
}]

//DATA 2
var dataSet2 = [
{
  city: "Atlanta",
  team: "Atlanta United FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/atl.png"
}]

// COMBINED RESULT

var combinedResult = [
{
    id: 1,
  name: "Atlanta",
  state: "Georgia",
  country: "USA",
  team: "Atlanta United FC",
  division: "images/mls.png",
  website: "http://www.atl.com/",
  image: "images/atl.png"
}]



// the main function
describe("#combine", () => {
  it("should combine two sets of item data", () => {
    assert.deepEqual(data.combine(dataSet1, dataSet2), combinedResult)
  });
});
