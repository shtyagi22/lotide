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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`)
  }
  else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`)
  }
}


const letterPositions = function (str1) {
  let results = {};
  for (let i = 0; i < str1.length; i++) {
    if (results[str1[i]]) {
      results[str1[i]].push(i)
    }
    else {
      results[str1[i]] = []
      results[str1[i]].push(i)

    }
  }
  return results;
};


console.log(letterPositions("lighthouse in the house"))

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

