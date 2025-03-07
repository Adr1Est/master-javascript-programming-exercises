function flipEveryNChars(input, n) {
    // your code here
    let str = "";
    for (let i = 0; i < input.length; i += n) {
        let letras = input.slice(i, i + n).split("");
        let reverseStr = letras.reverse().join("");
        str += reverseStr;
    }
    return str;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
