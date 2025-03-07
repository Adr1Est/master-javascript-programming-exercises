function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let auxiliar = "";
    if (word1.length > auxiliar.length) { auxiliar = word1 };
    if (word2.length > auxiliar.length) { auxiliar = word2 };
    if (word3.length > auxiliar.length) { auxiliar = word3 };
    return auxiliar;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
