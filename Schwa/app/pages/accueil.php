<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="css/main2.css"> 
    <link rel="stylesheet" href="css/darkmode.css">
    <!-- <link rel="stylesheet" href="css/grammar.css"> -->
</head>
<body>
    <?php
        require "../INC/hearder2.php"
    ?>

<section>
    <div class="lessonbox">
      <img src="../../public/IMG/boky.jpg" alt="Grammar">
      <h2>Grammar</h2>
      <p>Maîtrisez les fondations de l’anglais : Explorez les règles essentielles, les structures de phrases et les subtilités grammaticales pour écrire et parler avec précision.</p>
      <button onclick="location.href='grammar.php'">Start Lesson</button>
    </div>

    <div class="lessonbox">
      <img src="../../public/IMG/dude having fun.jpg" alt="Vocabulary">
      <h2>Vocabulary</h2>
      <p>Exprimez-vous avec naturel : Découvrez des mots, expressions idiomatiques et phrases courantes pour enrichir votre anglais du quotidien.</p>
      <button onclick="location.href='vocabulary.php'">Start Lesson</button>
    </div>

    <div class="lessonbox">
      <img src="../../public/IMG/dude having fun.jpg" alt="Listening">
      <h2>Listening</h2>
      <p>Affinez votre oreille : Écoutez des conversations authentiques et développez votre compréhension orale à travers des dialogues variés.</p>
      <button onclick="location.href='listening.php'">Start Lesson</button>
    </div>

    <div class="lessonbox">
      <img src="../../public/IMG/studying.jpg" alt="Reading">
      <h2>Reading</h2>
      <p>Plongez dans les textes : Lisez des histoires, articles et bandes dessinées pour améliorer votre fluidité et votre compréhension écrite.</p>
      <button onclick="location.href='reading.php'">Start Lesson</button>
    </div>

    <div class="lessonbox">
      <img src="../../public/IMG/study group.jpg" alt="Cultural Insights">
      <h2>Cultural Insights</h2>
      <p>Apprenez des faits fascinants, des coutumes et des perspectives du monde anglophone pour élargir votre horizon.</p>
      <button onclick="location.href='culture.php'">Start Lesson</button>
    </div>
  </section>


    <?php
        require "../INC/footer.php"
    ?>
    <script src="js/darkmode.js"></script>
</body>
</html>