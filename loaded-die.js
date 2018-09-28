function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var counter = 0; 

  //var result = list[arrayIndex]

  return function() {
    
    return list[counter++]; //0 - 5 1
    //arrayIndex = counter + 1; 1 - 4 2 
  }
} 

var rollLoadedDie = makeLoadedDie(); //RollloadedDie is reference to the Closure() and retaining values

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1


var anotherDie = makeLoadedDie(); //AnotherDie() a new reference to the closure() and retaining values
console.log(anotherDie());  
console.log(anotherDie());  
console.log(anotherDie());  









// var counter = 0;/* your code here */
  
// function(list, i) {
//   counter += val;
// }  
// return function() {

//   for (var i = 0; i < list.length; i++) {
//     val = list[i];
//     return val;
// }
// }