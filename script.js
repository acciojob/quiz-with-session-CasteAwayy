// "use strict";
let totalScore = 0;
// if (localStorage.getItem("score")) {
//   totalScore = localStorage.getItem("score");
// }

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

const options = document.querySelectorAll("#option");
const questionContainer = document.querySelector("#questions");

questions.forEach((question, idx) => {
  const choices = question.choices;
  let markup = `<div><h1 class="question-heading">${question.question}</h1>
            <ul class="options">
              <li class="option"><input type="radio" id="question${
                idx + 1
              }option1" value="${choices[0]}" name="answer${idx}"> ${
    choices[0]
  }</li>
              <li class="option"><input type="radio" id="question${
                idx + 1
              }option2" value="${choices[1]}" name="answer${idx}"> ${
    choices[1]
  }</li>
              <li class="option"><input type="radio" id="question${
                idx + 1
              }option3" value="${choices[2]}" name="answer${idx}"> ${
    choices[2]
  }</li>
              <li class="option"><input type="radio" id="question${
                idx + 1
              }option4" value="${choices[3]}" name="answer${idx}"> ${
    choices[3]
  }</li>
            </ul>
			</div>
    `;
  questionContainer.insertAdjacentHTML("beforeend", markup);
});

const input = document.querySelectorAll('[type="radio"]');
const btn_submit = document.querySelector("#submit");
const score = document.querySelector("#score span");
const selectedOptions = [];

if (localStorage.getItem("score")) {
  score.textContent = `Your score is ${localStorage.getItem("score")} out of 5.`;
}
if (sessionStorage.getItem("progress")) {
  const arr = sessionStorage.getItem("progress").split(",");
  arr.forEach((option) => {
    input.forEach((input) => {
      if (input.id == option) {
        input.setAttribute("checked", true);
      }
    });
  });
}
input.forEach((input) => {
  input.addEventListener("change", (e) => {
    const questionNumber = e.target.id.split("question")[1][0];
    if (questions[parseInt(questionNumber) - 1].answer == e.target.value) {
      console.log(
        questions[parseInt(questionNumber) - 1].answer,
        e.target.value
      );
      totalScore += 1;
      console.log(totalScore);
      localStorage.setItem("score", totalScore);
    }
    selectedOptions.push(e.target.id);
    sessionStorage.setItem("progress", selectedOptions);
  });
});

btn_submit.addEventListener("click", () => {
  score.textContent = `Your score is ${totalScore} out of 5.`;
});
