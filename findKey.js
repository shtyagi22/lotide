const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

const findKey = function (object1, callback) {
  for (const key in object1) {
    if (callback(object1[key])) {
      return key

    }


  }
  return undefined


}
module.experts = findKey;



//Test Code
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), "noma")// => "noma"

//console.log(findKey)