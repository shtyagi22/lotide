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


const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  else {
    for (key in object1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key])
      }
      else {

        if (object1[key] !== object2[key]) {
          return false
        }
      }
    }
    return true
  }
};

const assertObjectsEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)

  }
  else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)

  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual((eqObjects(ab, ba)), true);
assertObjectsEqual((eqObjects(ab, abc)), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual((eqObjects(cd, dc)), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual((eqObjects(cd, cd2)), false); // => false



















