<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vocabulary Lessons</title>
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/darkmode.css">
</head>
<body>
    <?php require "../INC/hearder2.php" ?>
    
<section>
<div class="container">
    <h1>📚 Vocabulary Lessons</h1>
    <p class="lesson-count">Master <strong id="totalLessons">0</strong> essential vocabulary topics</p>

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
        <h3>Greetings & Introductions</h3>
        <p>Learn essential words to greet people and introduce yourself.</p>
        <button onclick="startLesson('greetingsIntros')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Numbers & Counting</h3>
        <p>Master numbers from 0 to 100 and learn how to count.</p>
        <button onclick="startLesson('numbersCounting')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Family Members</h3>
        <p>Learn names of family members and relationships.</p>
        <button onclick="startLesson('familyMembers')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Colors</h3>
        <p>Learn basic and common colors to describe objects.</p>
        <button onclick="startLesson('colors')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Food & Drinks</h3>
        <p>Essential vocabulary for meals, foods, and beverages.</p>
        <button onclick="startLesson('foodDrinks')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Animals</h3>
        <p>Learn names of pets, farm animals, and wild animals.</p>
        <button onclick="startLesson('animals')">Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Days & Months</h3>
        <p>Learn days of the week and months of the year.</p>
        <button onclick="startLesson('daysMonths')">Start Lesson</button>
      </div>

      <!-- A2 LESSONS -->
      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Weather & Seasons</h3>
        <p>Describe weather conditions and talk about seasons.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Clothes & Accessories</h3>
        <p>Learn vocabulary for clothing, shoes, and accessories.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Body Parts & Health</h3>
        <p>Essential vocabulary for describing the body and health.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>House & Furniture</h3>
        <p>Learn words for rooms, furniture, and household items.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Jobs & Professions</h3>
        <p>Vocabulary for different occupations and workplaces.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Transportation</h3>
        <p>Learn words for vehicles and ways of traveling.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Hobbies & Activities</h3>
        <p>Talk about free time activities and interests.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Places in Town</h3>
        <p>Essential vocabulary for locations and buildings in a city.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B1 LESSONS -->
      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Emotions & Feelings</h3>
        <p>Express a wide range of emotions and psychological states.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Technology & Internet</h3>
        <p>Modern vocabulary for digital devices and online activities.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Education & Learning</h3>
        <p>Academic vocabulary for school, university, and studying.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Money & Shopping</h3>
        <p>Financial vocabulary and shopping expressions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Travel & Tourism</h3>
        <p>Essential words for trips, hotels, and sightseeing.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Nature & Environment</h3>
        <p>Vocabulary for natural features and environmental topics.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Sports & Fitness</h3>
        <p>Learn sports terminology and exercise vocabulary.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Entertainment & Media</h3>
        <p>Vocabulary for movies, TV, music, and entertainment.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B2 LESSONS -->
      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Business & Economy</h3>
        <p>Professional vocabulary for business and economics.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Politics & Society</h3>
        <p>Discuss political systems and social issues.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Science & Innovation</h3>
        <p>Technical vocabulary for scientific topics.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Law & Justice</h3>
        <p>Legal terminology and court-related vocabulary.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Medicine & Healthcare</h3>
        <p>Advanced medical vocabulary and healthcare terms.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Art & Culture</h3>
        <p>Vocabulary for discussing art, literature, and culture.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Abstract Concepts</h3>
        <p>Express complex ideas and philosophical concepts.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Idioms & Expressions</h3>
        <p>Common English idioms and figurative language.</p>
        <button>Start Lesson</button>
      </div>

      <!-- C1 LESSONS -->
      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Academic Writing</h3>
        <p>Advanced vocabulary for essays and research papers.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Formal & Informal Register</h3>
        <p>Master different levels of formality in English.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Collocations</h3>
        <p>Natural word combinations used by native speakers.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Nuanced Meanings</h3>
        <p>Subtle differences between similar words.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Phrasal Verbs Advanced</h3>
        <p>Complex phrasal verbs and their multiple meanings.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Literary Devices</h3>
        <p>Metaphor, symbolism, and rhetorical techniques.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Specialized Terminology</h3>
        <p>Field-specific vocabulary for professionals.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Rare & Archaic Words</h3>
        <p>Uncommon vocabulary found in classical literature.</p>
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
    localStorage.setItem('vocabularyLessonNav', lessonKey);
    window.location.href = 'workvocabulary.php';
  }
  
</script>
</body>
</html>