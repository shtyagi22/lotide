const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = function (str1) {
  const result = {}
  for (item of str1) {
    if (result[item] === "\s+") {
      //do nothing
    }
    else {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1
      }
    }

  }
  return result;

}
module.exports = countLetters;

//console.log(countLetters("lighthouse in the house")) 