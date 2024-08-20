//for the thing on top
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("Bar").style.width = scrolled + "%";
}

// for quiz
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
      option.style.backgroundColor = "#EDF4F2";
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

// slide show part

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//anonymous message part

document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value;

  const newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.textContent = messageText;

  const messagesContainer = document.getElementById('messagesContainer');
  messagesContainer.appendChild(newMessage);

  messageInput.value = '';
});
