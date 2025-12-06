<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/profile.css">
    <link rel="stylesheet" href="css/darkmode.css">
</head>
<body>
    <?php
        require "../INC/hearder2.php"
    ?>
<section>
<div class="container">
<h1>🌍 Cultural Insights</h1>
    <p class="lesson-count">Discover <strong id="totalLessons">0</strong> fascinating cultural topics</p>

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
        <h3>English-Speaking Countries</h3>
        <p>Learn about the UK, USA, Canada, Australia, and where English is spoken.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Common Greetings</h3>
        <p>Discover how people say hello and goodbye in different cultures.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Popular Foods</h3>
        <p>Explore traditional dishes from English-speaking countries.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Major Holidays</h3>
        <p>Learn about Christmas, Thanksgiving, and other celebrations.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Famous Landmarks</h3>
        <p>Discover iconic places like Big Ben, Statue of Liberty, and more.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Basic Etiquette</h3>
        <p>Understand simple manners and polite behavior in English culture.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A1">
        <span class="lesson-level">A1</span>
        <h3>Sports & Games</h3>
        <p>Learn about popular sports like football, cricket, and baseball.</p>
        <button>Start Lesson</button>
      </div>

      <!-- A2 LESSONS -->
      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>British vs American English</h3>
        <p>Explore differences in vocabulary, spelling, and pronunciation.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Traditional Festivals</h3>
        <p>Discover unique celebrations and cultural events around the world.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Social Customs</h3>
        <p>Learn about tipping, queuing, and other social norms.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Music & Entertainment</h3>
        <p>Explore popular music genres and entertainment traditions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Family Life</h3>
        <p>Understand how families live and interact in different cultures.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Shopping Culture</h3>
        <p>Learn about shopping habits, markets, and consumer behavior.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Education Systems</h3>
        <p>Compare school systems in English-speaking countries.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="A2">
        <span class="lesson-level">A2</span>
        <h3>Public Transport</h3>
        <p>Discover how people travel in cities and between countries.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B1 LESSONS -->
      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Historical Events</h3>
        <p>Learn about important moments that shaped English-speaking nations.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Political Systems</h3>
        <p>Understand government structures and democratic processes.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Work Culture</h3>
        <p>Explore workplace norms, professionalism, and business etiquette.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Literature & Authors</h3>
        <p>Discover famous writers and their contributions to culture.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Cinema & Film</h3>
        <p>Explore the history and impact of English-language cinema.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Regional Differences</h3>
        <p>Learn about diversity within countries and regional identities.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Religion & Beliefs</h3>
        <p>Understand religious diversity and spiritual practices.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B1">
        <span class="lesson-level">B1</span>
        <h3>Media & Journalism</h3>
        <p>Explore news outlets, freedom of press, and media influence.</p>
        <button>Start Lesson</button>
      </div>

      <!-- B2 LESSONS -->
      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Immigration & Diversity</h3>
        <p>Examine multicultural societies and immigration experiences.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Social Movements</h3>
        <p>Learn about civil rights, feminism, and activism throughout history.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Economic Systems</h3>
        <p>Understand capitalism, trade, and economic development.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Environmental Attitudes</h3>
        <p>Explore how different cultures approach sustainability and nature.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Art & Architecture</h3>
        <p>Discover artistic movements and architectural styles.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Technology & Innovation</h3>
        <p>Learn about tech culture and digital transformation in society.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Healthcare Systems</h3>
        <p>Compare medical care approaches in different countries.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="B2">
        <span class="lesson-level">B2</span>
        <h3>Communication Styles</h3>
        <p>Understand direct vs indirect communication and cultural norms.</p>
        <button>Start Lesson</button>
      </div>

      <!-- C1 LESSONS -->
      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Colonial History</h3>
        <p>Examine the complex legacy of British colonialism worldwide.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Philosophical Traditions</h3>
        <p>Explore Enlightenment thinking and Anglo-American philosophy.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Legal Systems</h3>
        <p>Understand common law, justice systems, and legal traditions.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Class & Society</h3>
        <p>Analyze social stratification and class consciousness.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Cultural Appropriation</h3>
        <p>Discuss sensitive issues of borrowing and cultural exchange.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Language Evolution</h3>
        <p>Study how English has changed and spread globally.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Gender & Identity</h3>
        <p>Examine evolving concepts of gender roles and identity.</p>
        <button>Start Lesson</button>
      </div>

      <div class="lesson-card" data-level="C1">
        <span class="lesson-level">C1-C2</span>
        <h3>Global Influence</h3>
        <p>Analyze English-speaking nations' impact on world culture.</p>
        <button>Start Lesson</button>
      </div>
    </div>
  </div>

  <?php
        require "../INC/footer.php"
    ?>
    <script src="js/darkmode.js"></script>
    <script src="js/nav.js"></script>
    </body>
</html>