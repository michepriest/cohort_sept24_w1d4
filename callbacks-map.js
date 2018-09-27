var words = ["ground", "control", "to", "major", "tom"];

function myNewArray(words, cb) {
  var newArray = [];
  for(var i = 0; i < words.length; i++) {
    newArray.push(cb(words[i], i, words))
  }
  return newArray;
};

function wordLength(word) {  
  return word.length;
};

function upperCaseWord(word) {
  return word.toUpperCase();
};

function reverseWord(word) {
  return word.split('').reverse().join('');
};

console.log(myNewArray(words, reverseWord));