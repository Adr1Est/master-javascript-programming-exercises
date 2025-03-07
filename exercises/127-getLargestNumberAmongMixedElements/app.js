function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    let num = -Infinity;
    let hayNumero = false;

    for (let x of arr) {
        if (typeof x === "number") {
            hayNumero = true;
            if (x > num) {
                num = x;
            }
        }
    }
    return (hayNumero) ? num : 0;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
