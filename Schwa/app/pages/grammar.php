<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/darkmode.css">
</head>
<body>
    <?php
        require "../INC/hearder2.php"
    ?>
<section>
<div class="container">
    <h1>📚 Grammar Lessons</h1>
    <p class="lesson-count">Explore <strong id="totalLessons">0</strong> comprehensive grammar lessons</p>

    <!-- Filter buttons -->
    <div class="filter-bar">
      <button class="filter-btn active" data-level="all">All</button>
      <button class="filter-btn" data-level="A1">A1</button>
      <button class="filter-btn" data-level="A2">A2</button>
      <button class="filter-btn" data-level="B1">B1</button>
      <button class="filter-btn" data-level="B2">B2</button>
      <button class="filter-btn" data-level="C1">C1-C2</button>
    </div>

    <!-- Lesson cards -->
    <div class="lesson-grid" id="lessonGrid">
      <!-- A1 LESSONS -->
      <div class="lesson-card" data-level="A1">
        <span class="status-icon validated">✓</span>
        <span class="lesson-level">A1</span>
        <h3>Verb "to be"</h3>
        <p>Master the foundation of English: am, is, are. Essential for introducing yourself and describing things.</p>
        <button id="toBe">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
      <span class="status-icon completed">✓</span>
        <span class="lesson-level">A1</span>
        <h3>Simple Present Tense</h3>
        <p>Learn how to use verbs in the present tense for daily routines and habits.</p>
        <button id="simplePresent">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Articles (a, an, the)</h3>
        <p>Understand when to use "a", "an", and "the" correctly in sentences.</p>
        <button id="articles">Start Lesson</button>
      </div>

      <!-- <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Personal Pronouns</h3>
        <p>Learn about I, you, he, she, it, we, they and how to use them properly.</p>
        <button>Start Lesson</button>
      </div> -->

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Plural Forms</h3>
        <p>Discover how to make nouns plural: regular and irregular forms.</p>
        <button id="plurals">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Basic Questions</h3>
        <p>Ask questions using What, Where, When, Who, Why, and How.</p>
        <button id="basicQuestions">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>There is / There are</h3>
        <p>Learn to describe what exists or is present in a place.</p>
        <button id="existOrnot">Start Lesson</button>
      </div>

      <!-- A2 LESSONS -->
      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Past Simple Tense</h3>
        <p>Understand how to describe past actions and experiences clearly.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Present Continuous</h3>
        <p>Express actions happening right now using the -ing form.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Future Simple (will)</h3>
        <p>Talk about future plans, predictions, and spontaneous decisions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Comparatives & Superlatives</h3>
        <p>Learn how to compare things, people, and ideas effectively.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Prepositions of Time</h3>
        <p>Master in, on, at for times, days, and dates.</p>
        <button>Start Lesson</button>
      </div>

      <!-- <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Countable vs Uncountable</h3>
        <p>Understand the difference and use much, many, a lot of correctly.</p>
        <button>Start Lesson</button>
      </div> -->

      <!-- <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Some / Any / No</h3>
        <p>Learn when to use these quantifiers in positive, negative, and questions.</p>
        <button>Start Lesson</button>
      </div> -->

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Possessive Adjectives</h3>
        <p>Show ownership using my, your, his, her, its, our, their.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B1 LESSONS -->
      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Present Perfect</h3>
        <p>Explore how to talk about experiences and events connected to the present.</p>
        <!-- <a href="workpage.php">trait_exists</a> -->
        <button id="presentPerfect">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Modal Verbs</h3>
        <p>Understand how to express ability, obligation, and advice using modal verbs.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Past Continuous</h3>
        <p>Describe actions that were in progress at a specific time in the past.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Used to / Would</h3>
        <p>Talk about past habits and states that are no longer true.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Relative Clauses</h3>
        <p>Connect sentences using who, which, that, where, and when.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Passive Voice</h3>
        <p>Learn to focus on actions rather than who performs them.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Reported Speech</h3>
        <p>Report what someone said without using their exact words.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Adverbs of Frequency</h3>
        <p>Express how often something happens: always, usually, sometimes, never.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B2 LESSONS -->
      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>First Conditional</h3>
        <p>Talk about real possibilities and likely future results.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Second Conditional</h3>
        <p>Discuss hypothetical situations and their imaginary results.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Third Conditional</h3>
        <p>Imagine how the past could have been different.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Future Perfect</h3>
        <p>Talk about actions that will be completed by a specific time in the future.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Gerunds vs Infinitives</h3>
        <p>Know when to use -ing forms or "to" + verb after certain verbs.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Phrasal Verbs</h3>
        <p>Master common verb + preposition combinations used in everyday English.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Wish / If only</h3>
        <p>Express regrets about the present or past, and desires for change.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Linking Words</h3>
        <p>Connect ideas smoothly using moreover, however, therefore, and more.</p>
        <button>Start Lesson</button>
      </div>

      <!-- C1 LESSONS -->
      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Advanced Passive Structures</h3>
        <p>Master complex passive constructions with reporting verbs and modals.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Inversion for Emphasis</h3>
        <p>Use inverted word order to add drama and formality to your English.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Subjunctive Mood</h3>
        <p>Express wishes, demands, and suggestions in formal English.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Mixed Conditionals</h3>
        <p>Combine different conditional forms to express complex time relationships.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Cleft Sentences</h3>
        <p>Use "it" and "what" clefts to emphasize specific information.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Advanced Modals of Deduction</h3>
        <p>Make sophisticated speculations about past, present, and future.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Ellipsis and Substitution</h3>
        <p>Avoid repetition by omitting or replacing words naturally.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Discourse Markers</h3>
        <p>Structure complex arguments and narratives with advanced connectors.</p>
        <button>Start Lesson</button>
      </div>
    </div>
  </div>
</section>

<?php
        require "../INC/footer.php"
    ?>
    <script src="js/darkmode.js"></script>
    <script src="js/nav.js"></script>
    <script src="js/worknav.js"></script>
    </body>
</html>