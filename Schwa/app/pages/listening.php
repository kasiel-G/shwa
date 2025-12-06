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
<h1>🎧 Listening Lessons</h1>
    <p class="lesson-count">Practice with <strong id="totalLessons">0</strong> authentic audio exercises</p>

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
        <span class="lesson-level">A1</span>
        <h3>Simple Introductions</h3>
        <p>Listen to people introducing themselves with names, ages, and nationalities.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Numbers & Prices</h3>
        <p>Practice understanding numbers in shopping and everyday contexts.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Daily Routines</h3>
        <p>Hear people talking about their typical day and activities.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Simple Questions</h3>
        <p>Listen to basic questions about time, location, and personal information.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>At the Restaurant</h3>
        <p>Understand basic restaurant conversations and ordering food.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Directions & Places</h3>
        <p>Learn to follow simple directions and understand location descriptions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Weather Talk</h3>
        <p>Practice listening to simple weather forecasts and descriptions.</p>
        <button>Start Lesson</button>
      </div>

      <!-- A2 LESSONS -->
      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Shopping Conversations</h3>
        <p>Listen to dialogues in stores, markets, and during transactions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Phone Calls</h3>
        <p>Understand common telephone conversations and messages.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Travel & Tourism</h3>
        <p>Practice with airport announcements and hotel check-ins.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Making Plans</h3>
        <p>Listen to people arranging meetings and social events.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Personal Stories</h3>
        <p>Hear narratives about past experiences and memories.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Health & Medical</h3>
        <p>Understand conversations at the doctor's office and pharmacies.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>At Work</h3>
        <p>Listen to basic workplace conversations and instructions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>TV & Radio Clips</h3>
        <p>Practice with short segments from broadcasts and shows.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B1 LESSONS -->
      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>News Reports</h3>
        <p>Understand news stories on current events and topics.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Interviews</h3>
        <p>Listen to interviews with interesting people about their lives.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Presentations</h3>
        <p>Follow short talks and presentations on various subjects.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Debates & Discussions</h3>
        <p>Practice understanding different viewpoints in conversations.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Podcast Episodes</h3>
        <p>Engage with podcast content on culture, lifestyle, and more.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Movie Scenes</h3>
        <p>Watch and understand dialogue from popular films.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Advertisements</h3>
        <p>Analyze persuasive language in commercials and ads.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Instructions & Tutorials</h3>
        <p>Follow step-by-step guides and how-to explanations.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B2 LESSONS -->
      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Documentary Clips</h3>
        <p>Watch and comprehend educational documentary segments.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Academic Lectures</h3>
        <p>Listen to university-style lectures on various subjects.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Business Meetings</h3>
        <p>Understand professional discussions and negotiations.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>TED Talks</h3>
        <p>Practice with inspiring talks on innovation and ideas.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Different Accents</h3>
        <p>Train your ear with British, American, Australian, and other accents.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Comedy & Humor</h3>
        <p>Understand jokes, stand-up comedy, and humorous content.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Fast-Paced Conversations</h3>
        <p>Challenge yourself with rapid natural speech patterns.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Technical Explanations</h3>
        <p>Follow complex technical and scientific discussions.</p>
        <button>Start Lesson</button>
      </div>

      <!-- C1 LESSONS -->
      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Political Speeches</h3>
        <p>Analyze rhetoric and argumentation in political discourse.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Literary Readings</h3>
        <p>Listen to excerpts from novels, poetry, and literature.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Expert Interviews</h3>
        <p>Understand specialists discussing complex topics in depth.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Academic Conferences</h3>
        <p>Follow presentations at professional and academic conferences.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Historical Recordings</h3>
        <p>Listen to significant speeches and recordings from history.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Philosophical Discussions</h3>
        <p>Engage with abstract and philosophical conversations.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Nuanced Debates</h3>
        <p>Practice with sophisticated arguments and counter-arguments.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Regional Dialects</h3>
        <p>Master understanding of various regional dialects and idioms.</p>
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
    </body>
</html>