const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  else {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false
      }
    }
    return true
  }
}

const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}


const without = function (arr1, arr2) {
  let withoutArray = []
  for (i = 0; i < arr1.length; i++) {
    withoutArray = arr1.filter(function (fil) {
      return fil != arr2[i]
    })
  }
  return withoutArray
}



//console.log(without([1, 2, 3], [1,2])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
























