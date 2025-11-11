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
// ]

let question = questions[0].question
questions[0].incorrect_answers.push(questions[0].correct_answer) //aggiungere Math 
let answer = questions[0].incorrect_answers
console.log(question)
console.log(answer)



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