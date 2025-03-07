function findShortestElement(arr) {
    // your code here
    if (arr.length != 0) {
        let shortest = arr[0];
        for (let word of arr) {
            if (shortest.length > word.length) { shortest = word }
        }
        return shortest;
    } else {
        return "";
    }
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'