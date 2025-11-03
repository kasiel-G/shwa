<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your English Test Results 🇺🇸</title>
  <style>
    body {
      font-family: "Poppins", sans-serif;
      background: #1E3A8A;
      color: white;
      text-align: center;
      margin: 0;
      padding: 2rem;
    }

    .card {
      background: white;
      color: #1F2937;
      border-radius: 25px;
      max-width: 600px;
      margin: auto;
      padding: 2rem;
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    }

    h2 {
      color: #DC2626;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      background: #FEE2E2;
      margin: 8px 0;
      border-radius: 10px;
      padding: 8px;
    }

    button {
      background: #DC2626;
      color: white;
      border: none;
      border-radius: 30px;
      padding: 12px 24px;
      margin-top: 1.5rem;
      cursor: pointer;
      font-size: 16px;
      transition: 0.2s;
    }

    button:hover {
      background: #B91C1C;
      transform: scale(1.05);
    }

  </style>
</head>
<body>

  <div class="card">
    <h2>🏆 Your English Level Result</h2>
    <p id="score"></p>
    <p id="level"></p>

    <div id="mistakesContainer"></div>

    <button onclick="retry()">🔁 Retry the Test</button>
    <button onclick="next()">✔ continue</button>
  </div>

  <script>
    const score = localStorage.getItem("score");
    const level = localStorage.getItem("level");
    const mistakes = JSON.parse(localStorage.getItem("mistakes") || "[]");

    document.getElementById("score").innerHTML = `<b>Score:</b> ${score}/10`;
    document.getElementById("level").innerHTML = `<b>Level:</b> ${level}`;

    const mistakesDiv = document.getElementById("mistakesContainer");
    if (mistakes.length > 0) {
      mistakesDiv.innerHTML = `
        <h3 style="color:#DC2626;">Mistakes to Review:</h3>
        <ul>${mistakes.map(q => `<li>❌ ${q}</li>`).join('')}</ul>
      `;
    } else {
      mistakesDiv.innerHTML = `<h3 style="color:#10B981;">Perfect score! 🎉 No mistakes!</h3>`;
    }

    function retry() {
      localStorage.clear();
      window.location.href = "test.php";
    }
    function next() {
      window.location.href = "main2.php";
    }
  </script>

</body>
</html>
