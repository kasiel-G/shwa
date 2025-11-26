<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>English Level Test 🇺🇸</title>
  <link rel="stylesheet" href="css/test.css">
  <link rel="stylesheet" href="/app/pages/css/header.css">
  <!-- <style>
    body {
      font-family: "Poppins", sans-serif;
      background: #F9FAFB;
      color: #1F2937;
      margin: 0;
      padding: 20px;
    }

    .container {
      background: white;
      border-radius: 20px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      max-width: 750px;
      margin: auto;
      padding: 2rem;
    }

    h2 {
      color: #1E3A8A;
      text-align: center;
    }

    .progress {
      background: #E5E7EB;
      border-radius: 10px;
      height: 10px;
      margin: 1rem 0 2rem;
      overflow: hidden;
    }

    .progress-bar {
      background: #1E3A8A;
      height: 100%;
      width: 0%;
      transition: width 0.3s ease-in-out;
    }

    .question {
      background: #EFF6FF;
      border-radius: 15px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    .question p {
      font-weight: bold;
    }

    label {
      display: block;
      margin: .4rem 0;
      cursor: pointer;
    }

    button {
      background: #DC2626;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 16px;
      border-radius: 30px;
      cursor: pointer;
      display: block;
      margin: 1.5rem auto;
      transition: 0.2s;
    }

    button:hover {
      background: #B91C1C;
      transform: scale(1.05);
    }

  </style> -->
</head>
<body>
  <?php
    require "../INC/hearder2.php"
  ?>
  <div class="container">
    <h2>🇺🇸 English Level Test</h2>
    <p style="text-align:center;">Answer all 10 questions to discover your English level</p>

    <div class="progress">
      <div class="progress-bar" id="progressBar"></div>
    </div>

    <form id="englishTest">

      <div class="question">
        <p>1️⃣ Choose the correct sentence:</p>
        <label><input type="radio" name="q1" value="wrong"> She go to school every day.</label>
        <label><input type="radio" name="q1" value="correct"> She goes to school every day.</label>
        <label><input type="radio" name="q1" value="wrong"> She going to school every day.</label>
      </div>

      <div class="question">
        <p>2️⃣ What is the past of “eat”?</p>
        <label><input type="radio" name="q2" value="wrong"> eated</label>
        <label><input type="radio" name="q2" value="correct"> ate</label>
        <label><input type="radio" name="q2" value="wrong"> eaten</label>
      </div>

      <div class="question">
        <p>3️⃣ Choose the synonym of “happy”:</p>
        <label><input type="radio" name="q3" value="wrong"> sad</label>
        <label><input type="radio" name="q3" value="correct"> glad</label>
        <label><input type="radio" name="q3" value="wrong"> tired</label>
      </div>

      <div class="question">
        <p>4️⃣ Fill in the blank: “If I _____ time, I would travel.”</p>
        <label><input type="radio" name="q4" value="correct"> had</label>
        <label><input type="radio" name="q4" value="wrong"> have</label>
        <label><input type="radio" name="q4" value="wrong"> has</label>
      </div>

      <div class="question">
        <p>5️⃣ Choose the correct question form:</p>
        <label><input type="radio" name="q5" value="wrong"> You are tired?</label>
        <label><input type="radio" name="q5" value="correct"> Are you tired?</label>
        <label><input type="radio" name="q5" value="wrong"> Tired you are?</label>
      </div>

      <div class="question">
        <p>6️⃣ What does “I have been studying” mean?</p>
        <label><input type="radio" name="q6" value="correct"> I started studying and I’m still studying now.</label>
        <label><input type="radio" name="q6" value="wrong"> I studied once.</label>
        <label><input type="radio" name="q6" value="wrong"> I will study later.</label>
      </div>

      <div class="question">
        <p>7️⃣ Which is a correct comparative form?</p>
        <label><input type="radio" name="q7" value="wrong"> more fast</label>
        <label><input type="radio" name="q7" value="correct"> faster</label>
        <label><input type="radio" name="q7" value="wrong"> fastly</label>
      </div>

      <div class="question">
        <p>8️⃣ What is the opposite of “cheap”?</p>
        <label><input type="radio" name="q8" value="correct"> expensive</label>
        <label><input type="radio" name="q8" value="wrong"> low</label>
        <label><input type="radio" name="q8" value="wrong"> poor</label>
      </div>

      <div class="question">
        <p>9️⃣ Choose the right article: “I saw ___ elephant.”</p>
        <label><input type="radio" name="q9" value="correct"> an</label>
        <label><input type="radio" name="q9" value="wrong"> a</label>
        <label><input type="radio" name="q9" value="wrong"> the</label>
      </div>

      <div class="question">
        <p>🔟 Choose the correct translation: “Je travaille depuis deux heures.”</p>
        <label><input type="radio" name="q10" value="correct"> I have been working for two hours.</label>
        <label><input type="radio" name="q10" value="wrong"> I worked since two hours.</label>
        <label><input type="radio" name="q10" value="wrong"> I am working two hours ago.</label>
      </div>

      <button type="button" onclick="calculateLevel()">See My Level 🚀</button>
    </form>
  </div>

  <script>
    function calculateLevel() {
      const total = 10;
      const answers = document.querySelectorAll('input[type="radio"]:checked');
      const progress = (answers.length / total) * 100;
      document.getElementById("progressBar").style.width = progress + "%";

      let score = 0;
      let mistakes = [];

      document.querySelectorAll(".question").forEach((q, i) => {
        const chosen = q.querySelector('input[type="radio"]:checked');
        if (chosen) {
          if (chosen.value === "correct") {
            score++;
          } else {
            mistakes.push(q.querySelector("p").innerText);
          }
        }
      });

      let level = "";
      if (score <= 3) level = "A1 (Beginner)";
      else if (score <= 5) level = "A2 (Elementary)";
      else if (score <= 7) level = "B1 (Intermediate)";
      else if (score <= 9) level = "B2 (Upper-Intermediate)";
      else level = "C1-C2 (Advanced)";

      localStorage.setItem("score", score);
      localStorage.setItem("level", level);
      localStorage.setItem("mistakes", JSON.stringify(mistakes));

      window.location.href = "result.php";
    }

    function toggleProfileMenu() {
      const menu = document.getElementById('profile-menu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    document.addEventListener('click', (e) => {
      const profile = document.querySelector('.profile');
      const menu = document.getElementById('profile-menu');
      if (!profile.contains(e.target)) {
        menu.style.display = 'none';
      }
    });
  </script>

</body>
</html>
