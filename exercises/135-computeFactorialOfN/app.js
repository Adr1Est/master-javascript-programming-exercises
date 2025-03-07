function computeFactorialOfN(n) {
    // your code here
    let producto = 1;
    for (let i = 1; i <= n; i++) {
        producto *= i;
    }
    return producto;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
