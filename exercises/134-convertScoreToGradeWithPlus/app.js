function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score > 100 || score < 0) {
        return "INVALID SCORE";
    } else {
        if (score <= 100 && score >= 90) {
            if (score <= 100 && score >= 98) { return "A+"; }
            if (score <= 92 && score >= 90) { return "A-"; }
            return "A";
        }
        if (score < 90 && score >= 80) {
            if (score <= 89 && score >= 88) { return "B+"; }
            if (score <= 82 && score >= 80) { return "B-"; }
            return "B";
        }
        if (score < 80 && score >= 70) {
            if (score <= 79 && score >= 78) { return "C+"; }
            if (score <= 72 && score >= 70) { return "C-"; }
            return "C";
        }
        if (score < 70 && score >= 60) {
            if (score <= 69 && score >= 68) { return "D+"; }
            if (score <= 62 && score >= 60) { return "D-"; }
            return "D";
        }
        if (score < 60 && score >= 0) {
            return "F";
        }
    }
}


let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
