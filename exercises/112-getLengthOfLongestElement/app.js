function getLengthOfLongestElement(arr) {
    // Your code here
    if (Array.isArray(arr) && arr.length != 0) {
        let longest = arr[0].length;
        for (let x of arr) {
            if (longest < x.length) { longest = x.length }
        }
        return longest;
    } else {
        return 0;
    }
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
