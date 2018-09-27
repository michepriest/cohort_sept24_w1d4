var result = [];

function findWaldo(arr, found) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      result = i; 
      found();  
    }
  }

  console.log(result)
}

function actionWhenFound() {
  console.log("Found Waldo at index " + result + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
