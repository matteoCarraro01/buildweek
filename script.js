const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// const matrix = [
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]
//   [category, type, difficulty, question, correct_answer, incorrect_answers]

//   const rows = Array.from({ length: 11 }, (_, i) => [i])

// const cols = [3], [4], [5]
// ]                                            FOR MATTIA 'NSE CANCELLA



let questionNumber = 0
let score = 0

function displayQuestion(i) {
  let question = questions[i].question;
  questions[i].incorrect_answers.push(questions[i].correct_answer);
  let answers = questions[i].incorrect_answers;


  questions[i].incorrect_answers = answers.sort(() => Math.random() - 0.5);

  document.getElementById('question').innerText = question;
  console.log(questions[i].incorrect_answers);
  const risposta1 = document.getElementById('btn1');
  risposta1.innerText = questions[i].incorrect_answers[0];
  const risposta2 = document.getElementById('btn2');
  risposta2.innerText = questions[i].incorrect_answers[1];
  const risposta3 = document.getElementById('btn3');
  risposta3.innerText = questions[i].incorrect_answers[2];
  const risposta4 = document.getElementById('btn4');
  risposta4.innerText = questions[i].incorrect_answers[3];
  risposta1.addEventListener('click', function (event) {
    rispostaClick(event.target.innerText, questionNumber, score)
  })
  risposta2.addEventListener('click', function (event) {
    rispostaClick(event.target.innerText, questionNumber, score)
  })
  risposta3.addEventListener('click', function (event) {
    rispostaClick(event.target.innerText, questionNumber, score)
  })
  risposta4.addEventListener('click', function (event) {
    rispostaClick(event.target.innerText, questionNumber, score)
  })
}


console.log(questions);
displayQuestion(questionNumber)

function rispostaClick(testoRisposta, questionNumber, score) {
  if (testoRisposta === questions[questionNumber].correct_answer) {
    score++

  }
  questionNumber++;
  if (questionNumber >= questions.length) {
    let result =
      console.log('quiz finito! Punteggio' + score.length)
  } else {
    displayQuestion(questionNumber)

  }
}





























//const questionButton = document.querySelector('.question');
// function global(questions) {
//   for (let i = 0; i <= 10; i++);
//   if (correct_answer === true) {
//     console.log(questions, 'okay')
//   } else
//     (incorrect_answers === false)
//   console.log(questions, 'no okay')

// }
// console.log(questions)

// function region(questions) {
//   questions
//   if (correct_answer === true) {
//     result = 'okay'
//   } else
//     (incorrect_answers === false)
//   result = 'no okay'
// }

// console.log(questions)