const takeUntil = function (array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return result
    }
    else {
      result.push(array[i])
    }
  }
  //return result //why the function is still returning value?
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [2, 3, 4, 5, 6, 7, 8, 9];
const results3 = takeUntil(data3, x => x >= 7);
console.log(results3);


/***const takeUntil = (parameter1, aFunction) => {    
  const results = []    
  for(let i=0; i<parameter1.length, i++){     
    const value = parameter1[i]     
     if(aFunction(value)){       
      // stop stop stop!!!!!!        
      return results      }
      else 
      {         results.push(value)      }  
      } }     
      const aFunction = (oneParameter) => true | false    
      const oranges = [good, good, good, good, bad, good , bad]  
      const getOnlyGoodOranges = (orange) => orange === bad;   
      const goodOrangesOnly = takeUntil(oranges, getOnlyGoodOranges)***/