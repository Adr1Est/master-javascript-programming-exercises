function removeFromFrontOfNew(arr) {
    // your code here
    let newarr = [];
    for (let i = 1; i < arr.length; i++) {
        newarr.push(arr[i]);
    }
    return newarr; /*return arr.slice(1);*/
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
