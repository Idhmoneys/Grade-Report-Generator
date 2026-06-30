// Grade Report Generator
// Turn a numeric score into a grade report. The report should include the letter grade, whether the student passed, and a short feedback message.

// should return "A", "B", "C", "D", or "F" based on the score.
function getLetterGrade(score) {
    switch(true){
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

// should return true when the score is 60 or higher.
function hasPassed(score) {
    return score >= 60 ? true : false;
}

// should return a short message for the grade.
function getFeedback(grade) {
    switch(true){
        case (grade === 'A' || grade === 'B'):
            return 'Excellent work';
        case (grade === 'C' || grade === 'D'):
            return 'You passed';
        default:
            return 'Excellent work';
    }
}

// should return one object with name, score, grade, passed, and feedback.
function createGradeReport(name, score) {
    // get letter grade
    const grade = getLetterGrade(score);
    // check is passed?
    const passed = hasPassed(score);
    // give feedback
    const feedback = getFeedback(grade);
    // returning grade report
    return {name, score, grade, passed, feedback}
}

// Sample checks:
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));


// Expected output:
console.log(
    { name: "Ava", score: 92, grade: "A", passed: true, feedback: "Excellent work" },
    { name: "Noah", score: 48, grade: "F", passed: false, feedback: "Keep practicing" }, 
    { name: "Mina", score: 75, grade: "C", passed: true, feedback: "You passed" }, 
    { name: "Sam", score: 60, grade: "D", passed: true, feedback: "You passed" }
    )