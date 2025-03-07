function isOddWithoutModulo(num) {
    // your code here
    let division = num / 2;
    let check = Math.abs(division).toString().split("");
    console.log("Check => " + check);
    if (check.length > 1) {
        return true;
    } else { return false; }
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
