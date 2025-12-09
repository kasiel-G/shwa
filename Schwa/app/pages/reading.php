<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reading Lessons</title>
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/darkmode.css" id="darklink">
</head>
<body>
    <?php require "../INC/hearder2.php" ?>
    
<section>
<div class="container">
    <h1>📖 Reading Lessons</h1>
    <p class="lesson-count">Dive into <strong id="totalLessons">0</strong> captivating reading materials</p>

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
        <h3>Simple Dialogues</h3>
        <p>Read short conversations between people in everyday situations.</p>
        <button onclick="startLesson('simpleDialogues')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Picture Stories</h3>
        <p>Follow simple narratives with images to support comprehension.</p>
        <button onclick="startLesson('pictureStories')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Basic Instructions</h3>
        <p>Understand simple written directions and how-to guides.</p>
        <button onclick="startLesson('basicInstructions')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Shopping Lists & Menus</h3>
        <p>Practice reading real-world documents like menus and lists.</p>
        <button onclick="startLesson('shoppingMenus')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Personal Profiles</h3>
        <p>Read short biographies and self-introductions.</p>
        <button onclick="startLesson('personalProfiles')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Signs & Labels</h3>
        <p>Understand common signs, labels, and public notices.</p>
        <button onclick="startLesson('signsLabels')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Simple Emails</h3>
        <p>Read basic personal emails and messages.</p>
        <button onclick="startLesson('simpleEmails')">Start Lesson</button>
      </div>

      <!-- A2 LESSONS -->
      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Short Stories</h3>
        <p>Enjoy simple narratives with clear plots and characters.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Postcards & Letters</h3>
        <p>Read personal correspondence from friends and family.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Travel Brochures</h3>
        <p>Explore descriptions of destinations and tourist attractions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Blog Posts</h3>
        <p>Read simple online articles about everyday topics.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Recipe Cards</h3>
        <p>Follow cooking instructions and ingredient lists.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Product Reviews</h3>
        <p>Understand customer opinions and ratings online.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Event Invitations</h3>
        <p>Read invitations to parties, weddings, and gatherings.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Simple News Articles</h3>
        <p>Practice reading short news stories on current events.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B1 LESSONS -->
      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Magazine Articles</h3>
        <p>Read longer articles on lifestyle, culture, and interests.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Short Novels</h3>
        <p>Dive into adapted or simplified fiction for learners.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Biographies</h3>
        <p>Learn about famous people's lives and achievements.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Opinion Pieces</h3>
        <p>Read editorials and understand different viewpoints.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Movie & Book Reviews</h3>
        <p>Explore critical analyses of entertainment and literature.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Job Advertisements</h3>
        <p>Understand professional job postings and requirements.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Informational Texts</h3>
        <p>Read factual content about science, history, and society.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Comics & Graphic Novels</h3>
        <p>Enjoy visual storytelling with speech bubbles and panels.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B2 LESSONS -->
      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Contemporary Fiction</h3>
        <p>Read modern novels and literary short stories.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Newspaper Editorials</h3>
        <p>Analyze persuasive writing on current issues.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Research Summaries</h3>
        <p>Understand simplified academic research findings.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Business Reports</h3>
        <p>Read professional reports and business correspondence.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Essays & Analysis</h3>
        <p>Explore argumentative and analytical writing styles.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Technical Manuals</h3>
        <p>Follow complex instructions and specifications.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Historical Accounts</h3>
        <p>Read detailed descriptions of historical events.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Cultural Commentary</h3>
        <p>Understand critical perspectives on society and culture.</p>
        <button>Start Lesson</button>
      </div>

      <!-- C1 LESSONS -->
      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Classic Literature</h3>
        <p>Read unabridged works from renowned authors.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Academic Papers</h3>
        <p>Navigate scholarly articles and research publications.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Legal Documents</h3>
        <p>Understand contracts, laws, and legal terminology.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Philosophy Texts</h3>
        <p>Engage with complex philosophical arguments and theories.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Poetry Analysis</h3>
        <p>Interpret meaning, metaphor, and literary devices in poems.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Critical Theory</h3>
        <p>Read advanced literary and cultural criticism.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Scientific Journals</h3>
        <p>Comprehend specialized scientific research papers.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Political Discourse</h3>
        <p>Analyze sophisticated political writing and speeches.</p>
        <button>Start Lesson</button>
      </div>
    </div>
  </div>
</section>

<?php require "../INC/footer.php" ?>

<script src="js/darkmode.js"></script>
<script src="js/nav.js"></script>
<script>
  // Function to start a lesson
  function startLesson(lessonKey) {
    localStorage.setItem('readingLessonNav', lessonKey);
    window.location.href = 'workreading.php';
  }
</script>
</body>
</html>