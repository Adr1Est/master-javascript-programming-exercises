function findSmallestElement(arr) {
    // your code here
    if (arr.length != 0) {
        let maspequeno = arr[0];
        for (let x of arr) {
            if (maspequeno > x) { maspequeno = x }
        }
        return maspequeno;
    } else {
        return 0;
    }
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1