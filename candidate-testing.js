const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 
  const name = input.question("Enter your name: ");
  candidateName = (name);
} 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
  for (i = 0; i < questions.length; i++) {
      candidateAnswers[i] = input.question(questions[i]);
      candidateAnswers.push(candidateAnswers[i]);
      console.log();
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log(`Thank you for completing the quiz. Read below to compare your answers to the answer key and view your grade.

Quiz results for: ${candidateName}

Question 1. Who was the first American woman in space?
Candidate's Answer: ${candidateAnswers[0]}
Correct Answer:  ${correctAnswers[0]}

Question 2. True or false: 5 kilometer == 5000 meters?
Candidate's Answer: ${candidateAnswers[1]}
Correct Answer:  ${correctAnswers[1]}

Question 3. (5 + 3)/2 * 10 = ?
Candidate's Answer: ${candidateAnswers[2]}
Correct Answer:  ${correctAnswers[2]}

Question 4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?
Candidate's Answer: ${candidateAnswers[3]}
Correct Answer:  ${correctAnswers[3]}

Question 5. What is the minimum crew size for the ISS?
Candidate's Answer: ${candidateAnswers[4]}
Correct Answer:  ${correctAnswers[4]}
`);

let numberCorrectAnswers = Number(0);
let numberQuizQuestions = questions.length

for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
       numberCorrectAnswers = numberCorrectAnswers + 1;
    }
  }


  let grade = (numberCorrectAnswers) / (numberQuizQuestions) * 100;

  if (grade >=80) {
      quizResult = "Candidate has passed the quiz.";
  } else {
      quizResult = "Candidate has failed the quiz.";
  }
  
  console.log(`Candidate's quiz results have been graded. \nGrade: ${grade}% \n${numberCorrectAnswers} out of 5 questions answered correctly. \n${quizResult}`)

  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome, ${candidateName}! \n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};