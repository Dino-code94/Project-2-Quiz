const questions = [
  {
    question: "What is the title of Green Day's album released in 2004?",
    correctAnswer: "American Idiot"
  },
  {
    question: "Which Green Day song includes the lyrics 'I walk a lonely road, the only one that I have ever known'?",
    correctAnswer: "Boulevard of Broken Dreams"
  },
  {
    question: "What is Green Day's genre?",
    correctAnswer: "Punk rock"
  },
  {
    question: "What year was Green Day formed?",
    correctAnswer: "1987"
  },
  {
    question: "Which member of Green Day is the lead vocalist and guitarist?",
    correctAnswer: "Billie Joe Armstrong"
  },
  {
    question: "What is the name of Green Day's debut album?",
    correctAnswer: "39/Smooth"
  },
  {
    question: "Which Green Day album features the song 'Wake Me Up When September Ends'?",
    correctAnswer: "American Idiot"
  },
  {
    question: "In which city was Green Day formed?",
    correctAnswer: "Oakland"
  },
  {
    question: "What Green Day album was released in 2009?",
    correctAnswer: "21st Century Breakdown"
  },
  {
    question: "Which Green Day song was used as the theme for the 'American Idiot' musical?",
    correctAnswer: "American Idiot"
  }
];

function startQuiz() {

  document.getElementById("welcome-message").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";

  showQuestion();
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    document.getElementById("feedback").textContent = "Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
  }

  document.getElementById("next-btn").style.display = "inline-block";
  document.getElementById("answer").disabled = true;
  document.querySelector("button").disabled = true;
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }


  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").disabled = false;
  document.querySelector("button").disabled = false;
  document.getElementById("next-btn").style.display = "none";
}



function showQuestion() {

  const questionContainer = document.getElementById("question");
  questionContainer.innerHTML = '';


  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${question.question}</p>`;

  // Create the input field dynamically
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = "answer";
  inputField.placeholder = "Your answer here";
  questionContainer.appendChild(inputField);

  // Create the submit button dynamically
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.onclick = checkAnswer;
  questionContainer.appendChild(submitButton);

  // Hide feedback and next button until the question is answered
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
}


function showResults() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <h1>Quiz Finished!</h1>
    <p>Your score: ${score} out of ${questions.length}</p>
    <button onclick="restartQuiz()">Play Again</button>
  `;
}

function restartQuiz() {
  
  score = 0;
  currentQuestionIndex = 0;
  
  
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `
    <div id="welcome-message">
      <h1>Welcome to the Green Day Quiz!</h1>
      <p>Test your knowledge about Green Day's music and history!</p>
      <button id="start-btn" onclick="startQuiz()">Start Quiz</button>
    </div>
    <div id="quiz-content" style="display:none;">
      <div id="question"></div>
      <p id="feedback"></p>
      <button id="next-btn" style="display:none;" onclick="nextQuestion()">Next Question</button>
    </div>
  `;

  
  showQuestion();
}
