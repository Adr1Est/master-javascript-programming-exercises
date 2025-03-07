function convertScoreToGrade(score) {
    // your code here
    let letra;
    if (score <= 100 && score >= 90) {
        return letra = "A";
    } else if (score < 90 && score >= 80) {
        return letra = "B";
    } else if (score < 80 && score >= 70) {
        return letra = "C";
    } else if (score < 70 && score >= 60) {
        return letra = "D";
    } else if (score < 60 && score >= 0) {
        return letra = "F"
    } else {
        return letra = "INVALID SCORE";
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
