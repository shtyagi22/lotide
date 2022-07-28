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

const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  }
  else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


assertArrayEqual([1, 2, 3], [1, 2, 3])// => true
assertArrayEqual([1, 2, 3], [3, 2, 1])// => false
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3])// => false
