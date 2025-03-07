function getLongestWordOfMixedElements(arr) {
    // your code here
    let str = "";
    if (Array.isArray(arr) && arr.length != 0) {
        for (let x of arr) {
            if (typeof x === "string" && str === "") { str = x; }
            if (str.length < x.length) { str = x; }
        }
        return str;
    } else {
        return "";
    }
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
