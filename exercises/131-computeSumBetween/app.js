function computeSumBetween(num1, num2) {
    // your code here
    let suma = 0;
    if (num1 < num2) {
        for (let i = num1; i < num2; i++) {
            suma += i;
        }
        return suma;
    } else {
        return 0;
    }
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
