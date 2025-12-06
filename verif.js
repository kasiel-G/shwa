 class Lesson {
      constructor(level, title, description, category, structure, examples, notes) {
        this.level = level;
        this.title = title;
        this.description = description;
        this.category = category;
        this.structure = structure;
        this.examples = examples;
        this.notes = notes;
      }

      render() {
        // Update badge
        document.getElementById('lessonBadge').textContent = this.category;
        
        // Update title and description
        document.getElementById('lessonTitle').textContent = this.title;
        document.getElementById('lessonDescription').textContent = this.description;
        document.getElementById('lessonLevel').textContent = this.level;
        
        // Update structure
        document.getElementById('structureBox').innerHTML = `<p>${this.structure}</p>`;
        
        // Render examples
        const examplesContainer = document.getElementById('examplesContainer');
        examplesContainer.innerHTML = '';
        this.examples.forEach(example => {
          const div = document.createElement('div');
          div.className = 'example';
          div.innerHTML = `
            <p class="example-sentence">📊 ${example.sentence}</p>
            <p class="translation">${example.translation}</p>
          `;
          examplesContainer.appendChild(div);
        });
        
        // Render notes
        const notesList = document.getElementById('notesList');
        notesList.innerHTML = '';
        this.notes.forEach(note => {
          const li = document.createElement('li');
          li.textContent = note;
          notesList.appendChild(li);
        });
      }
    }

    // DONNÉES
    const presentPerfect = new Lesson(
      'B1',
      'Present Perfect Tense',
      'Learn how to express experiences and actions connected to the present',
      'Grammar',
      '<b>Subject</b> + <b class="blue">have/has</b> + <b class="indigo">past participle</b>',
      [
        { sentence: 'I have visited Paris three times.', translation: "J'ai visité Paris trois fois." },
        { sentence: 'She has lived here since 2020.', translation: 'Elle vit ici depuis 2020.' },
        { sentence: 'They have just finished their homework.', translation: 'Ils viennent juste de finir leurs devoirs.' }
      ],
      [
        'Use Present Perfect for experiences without a specific time',
        'Actions that started in the past and continue now',
        'Recent actions with "just", "already", "yet"'
      ]
    );

    const questions = [
      {
        question: 'I _____ to London last year.',
        options: ['have been', 'went', 'have gone', 'go'],
        correct: 1,
        explanation: 'Use simple past "went" because "last year" is a specific time in the past.'
      },
      {
        question: 'She _____ three books this month.',
        options: ['read', 'has read', 'have read', 'reads'],
        correct: 1,
        explanation: 'Use present perfect "has read" for actions in an unfinished time period (this month).'
      },
      {
        question: 'They _____ in this city since 2015.',
        options: ['live', 'lived', 'have lived', 'are living'],
        correct: 2,
        explanation: 'Use present perfect "have lived" with "since" for actions that started in the past and continue now.'
      },
      {
        question: 'Have you ever _____ sushi?',
        options: ['ate', 'eaten', 'eat', 'eating'],
        correct: 1,
        explanation: 'Use present perfect "eaten" (past participle) with "have" for life experiences.'
      },
      {
        question: 'We _____ already _____ our homework.',
        options: ['have / finished', 'had / finished', 'has / finished', 'are / finishing'],
        correct: 0,
        explanation: 'Use "have finished" with "already" for recently completed actions.'
      },
      {
        question: 'He _____ just _____ from work.',
        options: ['have / arrived', 'has / arrived', 'had / arrived', 'is / arriving'],
        correct: 1,
        explanation: 'Use "has arrived" with "just" for very recent actions. "He" takes "has".'
      },
      {
        question: 'I _____ never _____ to Japan.',
        options: ['have / been', 'has / been', 'am / being', 'was / been'],
        correct: 0,
        explanation: 'Use "have been" with "never" for life experiences you haven\'t had.'
      },
      {
        question: '_____ you _____ the new movie yet?',
        options: ['Did / see', 'Have / seen', 'Has / seen', 'Do / see'],
        correct: 1,
        explanation: 'Use "Have you seen" with "yet" to ask about recent experiences.'
      },
      {
        question: 'My parents _____ married for 25 years.',
        options: ['are', 'were', 'have been', 'has been'],
        correct: 2,
        explanation: 'Use "have been" for states that started in the past and continue to the present.'
      },
      {
        question: 'She _____ her keys. She can\'t find them anywhere.',
        options: ['lost', 'has lost', 'loses', 'is losing'],
        correct: 1,
        explanation: 'Use "has lost" when the past action has a present result (she still can\'t find them).'
      }
    ];































































































































































































































































































































































































    // ÉTAT
    let currentQuestion = 0;
    let score = 0;
    let correct = 0;
    let incorrect = 0;
    let answered = false;

    // INITIALISATION
    document.addEventListener('DOMContentLoaded', () => {
      presentPerfect.render();
      loadQuestion();
      updateStats();
    });

    // NAVIGATION TABS
    document.getElementById('btnLesson').addEventListener('click', () => {
      switchView('lesson');
      stopTimer();
      // resetTimer();
    });

    document.getElementById('btnExercise').addEventListener('click', () => {
      switchView('exercise');
      startTimer();
    });

    document.getElementById('startExercises').addEventListener('click', () => {
      switchView('exercise');
      startTimer();
    });

    function switchView(view) {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      
      if (view === 'lesson') {
        document.getElementById('btnLesson').classList.add('active');
        document.getElementById('lessonView').classList.add('active');
      } else {
        document.getElementById('btnExercise').classList.add('active');
        document.getElementById('exerciseView').classList.add('active');
      }
    }

    // EXERCICES
    let timerInterval = null;
    let totalSeconds = 0;
    function startTimer() {
      if (timerInterval) return;
      
      timerInterval = setInterval(() => {
        totalSeconds++;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        document.getElementById('timerDisplay').textContent = 
          minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      }, 1000);
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }

    function resetTimer() {
      stopTimer();
      totalSeconds = 0;
      document.getElementById('timerDisplay').textContent = '0:00';
    }

    function loadQuestion() {
      const q = questions[currentQuestion];
      answered = false;
      
      document.getElementById('questionText').textContent = q.question;
      document.getElementById('currentQuestionNum').textContent = currentQuestion + 1;
      document.getElementById('totalQuestions').textContent = questions.length;
      
      // Generate options
      const optionsContainer = document.getElementById('optionsContainer');
      optionsContainer.innerHTML = '';
      
      q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.innerHTML = `<span>${option}</span>`;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
      });
      
      // Hide explanation and next button
      document.getElementById('explanationBox').classList.add('hidden');
      document.getElementById('nextQuestion').classList.add('hidden');
      
      // Update progress
      const progress = ((currentQuestion + 1) / questions.length) * 100;
      document.getElementById('exerciseProgress').style.width = progress + '%';
    }

    function selectAnswer(index) {
      if (answered) return;
      
      answered = true;
      const q = questions[currentQuestion];
      const options = document.querySelectorAll('.option');
      
      // Check answer
      if (index === q.correct) {
        options[index].classList.add('correct');
        options[index].innerHTML += '<span class="option-icon">✓</span>';
        score += 10;
        correct++;
      } else {
        options[index].classList.add('wrong');
        options[index].innerHTML += '<span class="option-icon">✗</span>';
        options[q.correct].classList.add('correct');
        options[q.correct].innerHTML += '<span class="option-icon">✓</span>';
        incorrect++;
      }
      
      // Disable all options
      options.forEach(opt => opt.disabled = true);
      
      // Show explanation
      const explanationBox = document.getElementById('explanationBox');
      explanationBox.innerHTML = `<strong>Explication:</strong> ${q.explanation}`;
      explanationBox.classList.remove('hidden');
      
      // Show next button
      document.getElementById('nextQuestion').classList.remove('hidden');
      
      // Update stats
      updateStats();
    }

    document.getElementById('nextQuestion').addEventListener('click', () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        alert(`Quiz terminé! Score final: ${score} points`);
        // Reset
        currentQuestion = 0;
        score = 0;
        correct = 0;
        incorrect = 0;
        loadQuestion();
        updateStats();
        resetTimer();
      }
    });

    function updateStats() {
      document.getElementById('scoreValue').textContent = score;
      document.getElementById('correctCount').textContent = correct;
      document.getElementById('incorrectCount').textContent = incorrect;
      
      const total = correct + incorrect;
      const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
      document.getElementById('accuracyValue').textContent = accuracy + '%';
    }