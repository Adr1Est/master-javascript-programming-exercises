function removeFromFront(arr) {
    // your code here
    arr.shift()
    return arr; /*arr.splice(1, arr.length);*/
}

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]
