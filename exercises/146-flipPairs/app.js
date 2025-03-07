function flipPairs(input) {
    // your code here
    let str = input.split("");
    let reverse = [];
    for (let x = 0; x < str.length; x++) {
        reverse.push(str[x + 1]);
        reverse.push(str[x]);
        x++;
    }
    return reverse.join("");
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
