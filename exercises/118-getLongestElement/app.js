function getLongestElement(arr) {
    // your code here
    if (arr.length != 0) {
        let longest = arr[0];
        for (let word of arr) {
            if (longest.length < word.length) { longest = word }
        }
        return longest;
    } else {
        return "";
    }
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
