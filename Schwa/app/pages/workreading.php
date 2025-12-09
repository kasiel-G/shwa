<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reading Workpage</title>
    <link rel="icon" href="/public/IMG/minilogo.png" type="image/png" style="border-radius: 50%;">
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/darkmode.css">
    <link rel="stylesheet" href="css/workpage.css">
    <link rel="stylesheet" href="css/reading-workpage.css">
</head>
<body>
<?php require "../INC/hearder2.php"; ?>

<div class="work-container">
    <div class="tabs">
      <button id="btnLesson" class="tab active">📘 Leçon</button>
      <button id="btnExercise" class="tab">📊 Exercices</button>
    </div>

    <!-- LESSON VIEW -->
    <section id="lessonView" class="view active">
      <div class="card">
        <span class="badge" id="lessonBadge">Reading</span>
        
        <div class="lesson-header">
          <div>
            <h1 id="lessonTitle">Simple Dialogues</h1>
            <p class="subtitle" id="lessonDescription">Read short conversations between people in everyday situations</p>
          </div>
          
          <div class="circle-progress">
            <div class="circle" id="lessonLevel">A1</div>
            <p class="circle-label">niveau</p>
          </div>
        </div>
      </div>

      <div class="card">
        <h2 class="section-title">📖 Reading Text</h2>
        
        <div class="reading-box" id="readingText">
          <!-- Text content will be loaded here -->
        </div>

        <h3 class="subtitle2">📚 Vocabulary</h3>
        
        <div id="vocabularyContainer" class="vocabulary-grid">
          <!-- Vocabulary items will be loaded here -->
        </div>

        <div class="remember">
          <h3>💡 Comprehension Tips</h3>
          <ul id="comprehensionTips">
            <!-- Tips will be loaded here -->
          </ul>
        </div>

        <button id="startExercises" class="btn-primary">
          Commencer les exercices →
        </button>
      </div>
    </section>

    <!-- EXERCISE VIEW -->
    <section id="exerciseView" class="view">
      <div class="card">
        <h2>Exercice <span id="currentQuestionNum">1</span> sur <span id="totalQuestions">5</span></h2>
        <p class="subtitle">Comprehension Questions</p>

        <div class="stats">
          <div class="counter green">
            <div id="scoreValue">0</div>
            <p>Points</p>
          </div>
          <div class="counter blue">
            <div>⏱</div>
            <p id="timerDisplay">0:00</p>
          </div>
        </div>
      </div>

      <div class="card">
        <span class="badge purple">Choix Multiple</span>
        
        <h3 id="questionText" class="question">
          <!-- Question will be loaded here -->
        </h3>

        <div id="optionsContainer" class="options">
          <!-- Options will be loaded here -->
        </div>

        <div id="explanationBox" class="explanation hidden">
          <!-- Explanation will be loaded here -->
        </div>

        <div class="buttons-row">
          <button class="btn-secondary">Signaler un problème</button>
          <button id="nextQuestion" class="btn-primary hidden">Question suivante →</button>
        </div>
      </div>

      <div class="quick-stats">
        <div class="stat-card">
          <div class="stat-value green" id="correctCount">0</div>
          <p>Correct</p>
        </div>
        <div class="stat-card">
          <div class="stat-value red" id="incorrectCount">0</div>
          <p>Incorrect</p>
        </div>
        <div class="stat-card">
          <div class="stat-value blue" id="accuracyValue">0%</div>
          <p>Précision</p>
        </div>
      </div>
    </section>
  </div>

<?php require "../INC/footer.php"; ?>

<script src="js/darkmode.js"></script>
<script src="js/readingwork.js"></script>
</body>
</html>