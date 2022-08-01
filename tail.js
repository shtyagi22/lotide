/***const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};***/

const tail = function (arr1) {
  const arr2 = arr1.slice(1)
  return arr2

}

module.exports = tail;
