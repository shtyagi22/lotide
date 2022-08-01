/***const eqArrays = function (arr1, arr2) {
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
***/

const middle = function (array) {
  const index = Math.floor(array.length / 2)
  const median = []
  if (array.length === 1 || array.length === 2) {
    return median
  }
  else if (array.length % 2 === 0) {
    median.push(array[index - 1], array[index])

  }
  else {
    median.push(array[index])
  }
  return median

}
module.exports = middle;


// TEST CODE
/***console.log(middle([1])) // => []
console.log(middle([1, 2])) // => [])

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
***/

