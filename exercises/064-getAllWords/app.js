function getAllWords(str) {
    // your code here

    let words = [];
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " " && i === str.length - 1) {
            word += str[i];
            words.push(word);
            word = "";
        } else if (str[i] != " ") {
            word += str[i];
        } else {
            words.push(word);
            word = "";
        }
    }
    return words;

    /*let words = str.split(' ');
    return words;*/
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
