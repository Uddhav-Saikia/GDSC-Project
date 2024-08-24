//animation on text appearance

function animate(){
  document.getElementById("main_head").style.opacity=1;
  document.getElementById("main_head").style.transform='translateX(0px)';  

}

//DARK MODE

document.addEventListener('DOMContentLoaded', () => {
  const switchInput = document.getElementById('Switch');

  // Check localStorage for saved theme
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      switchInput.checked = true;
  }

  // Toggle dark mode on switch change
  switchInput.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
      // Save the theme in localStorage
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
});

//complete screen overlay (splash screen of sorts)
let fl=1;
let splashScreen = document.getElementById('splash');
splashScreen.addEventListener('click',()=>{
  animate();
  splashScreen.remove();
})



//for the thing on top...like progress bar types
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

//scroll positioning for sidebar

window.addEventListener('scroll', function() {
  var element = document.getElementById('home');
  var scrollPosition = window.scrollY || window.pageYOffset;
  let windowHeight= window.innerHeight;
  let VH = windowHeight/100;

  if (scrollPosition > -50*VH && scrollPosition < 80*VH) { 
    element.style.left = '0'; 
    element.style.backgroundColor = '#a6483ed1'; 
    if (localStorage.getItem('theme') === 'dark') {
      var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-color');
      element.style.backgroundColor = col_1; 
	}
  } else {
    element.style.left = '-70px';
    element.style.backgroundColor = '#a6483e86';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-hover');
		element.style.backgroundColor = col_1; 
	  }
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('quiz_tab');
  var scrollPosition = window.scrollY || window.pageYOffset;
  let windowHeight= window.innerHeight;
  let VH = windowHeight/100;

  if (scrollPosition > 80*VH && scrollPosition < 200*VH) { 
    element.style.left = '0'; 
    element.style.backgroundColor = '#a6483ed1';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar_color');
		element.style.backgroundColor = col_1; 
	  }
  } else {
    element.style.left = '-70px';
    element.style.backgroundColor = '#a6483e86';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-hover');
		element.style.backgroundColor = col_1; 
	  }
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('slides_v');
  var scrollPosition = window.scrollY || window.pageYOffset;
  let windowHeight= window.innerHeight;
  let VH = windowHeight/100;

  if (scrollPosition > 200*VH && scrollPosition < 325*VH) { 
    element.style.left = '0'; 
    element.style.backgroundColor = '#a6483ed1';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-color');
		element.style.backgroundColor = col_1; 
	  }
  } else {
    element.style.left = '-70px';
    element.style.backgroundColor = '#a6483e86';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-hover');
		element.style.backgroundColor = col_1; 
	  }
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('anon_txt');
  var scrollPosition = window.scrollY || window.pageYOffset;
  let windowHeight= window.innerHeight;
  let VH = windowHeight/100;

  if (scrollPosition > 325*VH && scrollPosition < 480*VH) { 
    element.style.left = '0'; 
    element.style.backgroundColor = '#a6483ed1';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-color');
		element.style.backgroundColor = col_1; 
	  }
  } else {
    element.style.left = '-70px';
    element.style.backgroundColor = '#a6483e86';
	if (localStorage.getItem('theme') === 'dark') {
		var col_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--sidebar-hover');
		element.style.backgroundColor = col_1; 
	  }
  }
});


//floating the quiz bar upwards 

window.addEventListener('scroll', function() {
  const box = document.querySelector('.quiz-container');
  const scrollPosition = window.scrollY;
  const moveUp = scrollPosition * 0.15;
  box.style.transform = `translateY(-${moveUp}px)`;
});

window.addEventListener('scroll', function() {
  const box = document.querySelector('.slide-container');
  const scrollPosition = window.scrollY;
  const moveUp = scrollPosition * 0.03;
  let vh=scrollPosition/100;
  if(scrollPosition > 90*vh)
  box.style.transform = `translateX(-${moveUp}px)`;
});

window.addEventListener('scroll', function() {
  const box = document.querySelector('.anonymous-messages');
  const scrollPosition = window.scrollY;
  const moveUp = scrollPosition * 0.1;
  box.style.transform = `translateY(-${moveUp}px)`;
});

window.addEventListener('scroll', function() {
  const box = document.querySelector('.slide_box_ani');
  const scrollPosition = window.scrollY;
  const moveUp = scrollPosition * 0.15;
  box.style.transform = `translateY(-${moveUp}px)`;
});

window.addEventListener('scroll', function() {
  const box = document.querySelector('.bar');
  const scrollPosition = window.scrollY;
  const moveUp = scrollPosition * 0.5;
  box.style.transform = `translateY(-${moveUp}px)`;
});


function iconsFunc() {
  const icons = document.querySelectorAll('.icon');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  icons.forEach(icon => {
      observer.observe(icon);
  });
}

document.addEventListener('DOMContentLoaded', () => setTimeout(iconsFunc(),1000));

