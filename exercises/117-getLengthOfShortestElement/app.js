function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length != 0) {
        let shortest = arr[0].length;
        for (let word of arr) {
            if (shortest > word.length) { shortest = word.length }
        }
        return shortest;
    } else {
        return 0;
    }
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
