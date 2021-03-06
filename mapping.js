var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

////// The following line is equivalent to the map that follows, it's just cuter (and harder to write).
// var result = input.map(obj => Math.sqrt(Math.pow([obj.x], 2) + Math.pow([obj.y], 2)));

var result = input.map(obj => {
  return Math.sqrt(Math.pow([obj.x], 2) + Math.pow([obj.y], 2));
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);