// Views
const lessonView = document.getElementById("lessonView");
const exerciseView = document.getElementById("exerciseView");

// Tabs
const btnLesson = document.getElementById("btnLesson");
const btnExercise = document.getElementById("btnExercise");

// Navigation
btnLesson.onclick = () => switchView("lesson");
btnExercise.onclick = () => switchView("exercise");
document.getElementById("startExercises").onclick = () => switchView("exercise");

function switchView(view) {
  if (view === "lesson") {
    lessonView.classList.add("active");
    exerciseView.classList.remove("active");
    btnLesson.classList.add("active");
    btnExercise.classList.remove("active");
  } else {
    lessonView.classList.remove("active");
    exerciseView.classList.add("active");
    btnExercise.classList.add("active");
    btnLesson.classList.remove("active");
  }
}

// EXERCISE DATA
const exercise = {
  question: "I _____ to London last year.",
  options: ["go", "went", "have gone", "going"],
  correct: 1,
  explanation:
    "We use Past Simple (went) for completed actions in the past with a specific time reference (last year)."
};

// Elements
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const explanationBox = document.getElementById("explanationBox");
const nextQuestionBtn = document.getElementById("nextQuestion");
const scoreValue = document.getElementById("scoreValue");

// Init question
questionText.textContent = exercise.question;

exercise.options.forEach((opt, i) => {
  const btn = document.createElement("button");
  btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;

  btn.onclick = () => handleAnswer(btn, i);

  optionsContainer.appendChild(btn);
});

let answered = false;

// Handle Answer
function handleAnswer(btn, index) {
  if (answered) return;
  answered = true;

  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach((b, i) => {
    if (i === exercise.correct) b.classList.add("correct");
    else if (i === index) b.classList.add("wrong");
    b.disabled = true;
  });

  if (index === exercise.correct) {
    scoreValue.textContent = parseInt(scoreValue.textContent) + 10;
  }

  explanationBox.textContent = exercise.explanation;
  explanationBox.classList.remove("hidden");
  nextQuestionBtn.classList.remove("hidden");
}
