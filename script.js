// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



const quizData = [
  {
      question: "Why do we love you?",
      options: ["Cause you are cool", "You are smart", "You are stupid", "all of the above"],
      correct: 2
  },
  {
      question: "How old are you now?",
      options: ["19", "20", "21", "22"],
      correct: 2
  },
  {
      question: "How old do you look?",
      options: ["7", "20", "25", "70"],
      correct: 3
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quizData[currentQuestion].question;
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
      option.innerText = quizData[currentQuestion].options[index];
      option.disabled = false;
      option.style.backgroundColor = "#433D8B";
  });
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("result").innerText = "";
}

function selectAnswer(index) {
  const options = document.querySelectorAll(".option");
  if (index === quizData[currentQuestion].correct) {
      options[index].style.backgroundColor = "#28a745";
      let x= document.getElementById("result");
      x.innerText = "Correct!";
      score++;
  } else {
      options[index].style.backgroundColor = "#dc3545";
      let x= document.getElementById("result");
      x.innerText = "Incorrect!";
  }
  options.forEach(option => option.disabled = true);
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("quiz").innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();
