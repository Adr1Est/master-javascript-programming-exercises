function detectOutlierValue(string) {
    // your code here
    let arr = string.split(" ");
    let odd = 0;
    let even = 0;

    for (let x of arr) { (x % 2 === 0) ? even++ : odd++; }

    for (let e of arr) {
        if (odd < even && e % 2 != 0) { return arr.indexOf(e) + 1; }
        if (odd > even && e % 2 === 0) { return arr.indexOf(e) + 1; }
    }

}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
