var result = [];

function findWaldo(arr, found) {
  arr.forEach(function(word, i) {
    if (word === "Waldo") {
      result = i; 
      found(i);  
      }
  })
};

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
