class ReadingLesson {
    constructor(level, title, description, category, text, vocabulary, comprehensionTips) {
      this.level = level;
      this.title = title;
      this.description = description;
      this.category = category;
      this.text = text;
      this.vocabulary = vocabulary;
      this.comprehensionTips = comprehensionTips;
    }
  
    render() {
      document.getElementById('lessonBadge').textContent = this.category;
      document.getElementById('lessonTitle').textContent = this.title;
      document.getElementById('lessonDescription').textContent = this.description;
      document.getElementById('lessonLevel').textContent = this.level;
      
      
      document.getElementById('readingText').innerHTML = `<p>${this.text}</p>`;
      
      
      const vocabContainer = document.getElementById('vocabularyContainer');
      vocabContainer.innerHTML = '';
      this.vocabulary.forEach(item => {
        const div = document.createElement('div');
        div.className = 'vocab-item';
        div.innerHTML = `
          <p class="vocab-word"><strong>${item.word}</strong></p>
          <p class="vocab-translation">${item.translation}</p>
        `;
        vocabContainer.appendChild(div);
      });
      
      
      const tipsList = document.getElementById('comprehensionTips');
      tipsList.innerHTML = '';
      this.comprehensionTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
      });
    }
  }
  
  // ==================== A1 READING LESSONS ====================
  
  // 1. Simple Dialogues
  const simpleDialogues = new ReadingLesson(
    'A1',
    'Simple Dialogues',
    'Read short conversations between people in everyday situations',
    'Reading',
    `<strong>At the Coffee Shop</strong><br><br>
    <em>Sarah:</em> Hello! Can I have a coffee, please?<br>
    <em>Waiter:</em> Of course! Hot or cold?<br>
    <em>Sarah:</em> Hot, please. With milk.<br>
    <em>Waiter:</em> Sure. Anything else?<br>
    <em>Sarah:</em> No, thank you. How much is it?<br>
    <em>Waiter:</em> Three dollars, please.<br>
    <em>Sarah:</em> Here you are.<br>
    <em>Waiter:</em> Thank you! Have a nice day!<br>
    <em>Sarah:</em> You too!`,
    [
      { word: 'coffee', translation: 'café' },
      { word: 'hot', translation: 'chaud' },
      { word: 'cold', translation: 'froid' },
      { word: 'milk', translation: 'lait' },
      { word: 'how much', translation: 'combien' }
    ],
    [
      'Focus on the question words: Can I...? How much...?',
      'Notice polite expressions: please, thank you',
      'Pay attention to simple present tense',
      'Identify who is speaking in each line'
    ]
  );
  
  // 2. Picture Stories
  const pictureStories = new ReadingLesson(
    'A1',
    'Picture Stories',
    'Follow simple narratives with images to support comprehension',
    'Reading',
    `<strong>Tom's Day</strong><br><br>
    Tom wakes up at 7:00 AM. He is tired but happy. He gets out of bed and goes to the bathroom. He brushes his teeth and washes his face.<br><br>
    Then Tom goes to the kitchen. He makes breakfast. He eats bread with butter and drinks orange juice. His cat sits next to him.<br><br>
    At 8:00 AM, Tom leaves his house. He walks to the bus stop. The bus arrives at 8:15 AM. Tom goes to work. He has a good day!`,
    [
      { word: 'wakes up', translation: 'se réveille' },
      { word: 'tired', translation: 'fatigué' },
      { word: 'brushes', translation: 'brosse' },
      { word: 'breakfast', translation: 'petit-déjeuner' },
      { word: 'leaves', translation: 'quitte, part' }
    ],
    [
      'Follow the sequence of events: first, then, at 8:00',
      'Notice time expressions: at 7:00, at 8:00',
      'Pay attention to daily routine verbs',
      'Understand simple present for habitual actions'
    ]
  );
  
  // 3. Basic Instructions
  const basicInstructions = new ReadingLesson(
    'A1',
    'Basic Instructions',
    'Understand simple written directions and how-to guides',
    'Reading',
    `<strong>How to Make a Sandwich</strong><br><br>
    <strong>You need:</strong><br>
    • 2 slices of bread<br>
    • Butter<br>
    • Cheese<br>
    • Tomato<br><br>
    <strong>Steps:</strong><br>
    1. Take two slices of bread.<br>
    2. Put butter on the bread.<br>
    3. Add cheese on one slice.<br>
    4. Cut the tomato. Put it on the cheese.<br>
    5. Put the other slice on top.<br>
    6. Your sandwich is ready! Enjoy!`,
    [
      { word: 'slices', translation: 'tranches' },
      { word: 'butter', translation: 'beurre' },
      { word: 'add', translation: 'ajouter' },
      { word: 'cut', translation: 'couper' },
      { word: 'ready', translation: 'prêt' }
    ],
    [
      'Follow the numbered steps in order',
      'Notice imperative verbs: take, put, add, cut',
      'Understand the ingredients list first',
      'Pay attention to prepositions: on, on top'
    ]
  );
  
  // 4. Shopping Lists & Menus
  const shoppingMenus = new ReadingLesson(
    'A1',
    'Shopping Lists & Menus',
    'Practice reading real-world documents like menus and lists',
    'Reading',
    `<strong>Restaurant Menu - "Bella Pasta"</strong><br><br>
    <strong>Main Dishes:</strong><br>
    • Spaghetti with tomato sauce - $12<br>
    • Pizza Margherita - $15<br>
    • Chicken salad - $10<br><br>
    <strong>Drinks:</strong><br>
    • Water - $2<br>
    • Orange juice - $4<br>
    • Coffee - $3<br><br>
    <strong>Desserts:</strong><br>
    • Ice cream - $5<br>
    • Chocolate cake - $6<br><br>
    <em>Open Monday to Saturday, 11:00 AM - 10:00 PM</em>`,
    [
      { word: 'main dishes', translation: 'plats principaux' },
      { word: 'sauce', translation: 'sauce' },
      { word: 'salad', translation: 'salade' },
      { word: 'drinks', translation: 'boissons' },
      { word: 'desserts', translation: 'desserts' }
    ],
    [
      'Scan for prices and items quickly',
      'Notice the organization: dishes, drinks, desserts',
      'Look for opening hours at the bottom',
      'Understand currency symbols and numbers'
    ]
  );
  
  // 5. Personal Profiles
  const personalProfiles = new ReadingLesson(
    'A1',
    'Personal Profiles',
    'Read short biographies and self-introductions',
    'Reading',
    `<strong>Meet Anna!</strong><br><br>
    Hello! My name is Anna. I am 25 years old. I am from Italy, but I live in New York now. I am a teacher. I teach English to children.<br><br>
    I love my job! I also love reading books and cooking Italian food. On weekends, I visit museums or go to the park with my friends.<br><br>
    I have one brother and one sister. My brother lives in Rome. My sister lives in Milan. I miss them, but I call them every week.<br><br>
    Nice to meet you!`,
    [
      { word: 'years old', translation: 'ans (âge)' },
      { word: 'teach', translation: 'enseigner' },
      { word: 'weekends', translation: 'week-ends' },
      { word: 'miss', translation: 'manquer (à quelqu\'un)' },
      { word: 'call', translation: 'appeler' }
    ],
    [
      'Identify personal information: name, age, country',
      'Notice present simple for habits and routines',
      'Look for hobbies and interests',
      'Pay attention to family relationships'
    ]
  );
  
  // 6. Signs & Labels
  const signsLabels = new ReadingLesson(
    'A1',
    'Signs & Labels',
    'Understand common signs, labels, and public notices',
    'Reading',
    `<strong>Common Signs You See Every Day</strong><br><br>
    <strong>1. ENTRANCE</strong> - This is where you go in.<br><br>
    <strong>2. EXIT</strong> - This is where you go out.<br><br>
    <strong>3. PUSH / PULL</strong> - Instructions for opening doors.<br><br>
    <strong>4. OPEN / CLOSED</strong> - Shows if a shop is open or closed.<br><br>
    <strong>5. NO SMOKING</strong> - You cannot smoke here.<br><br>
    <strong>6. TOILETS / RESTROOMS</strong> - The bathroom.<br><br>
    <strong>7. INFORMATION</strong> - Ask questions here.<br><br>
    <strong>8. STOP</strong> - You must stop here.`,
    [
      { word: 'entrance', translation: 'entrée' },
      { word: 'exit', translation: 'sortie' },
      { word: 'push', translation: 'pousser' },
      { word: 'pull', translation: 'tirer' },
      { word: 'smoking', translation: 'fumer' }
    ],
    [
      'These are command words - very direct and short',
      'Signs use simple, clear language',
      'NO + verb means it is not allowed',
      'Learn these signs for daily life'
    ]
  );
  
  // 7. Simple Emails
  const simpleEmails = new ReadingLesson(
    'A1',
    'Simple Emails',
    'Read basic personal emails and messages',
    'Reading',
    `<strong>From:</strong> maria@email.com<br>
    <strong>To:</strong> john@email.com<br>
    <strong>Subject:</strong> Party on Saturday!<br><br>
    Hi John,<br><br>
    How are you? I hope you are well!<br><br>
    I have a party at my house on Saturday evening. It starts at 7:00 PM. Can you come? My address is 25 Park Street.<br><br>
    Please bring some snacks or drinks if you can. We will have music and games. It will be fun!<br><br>
    Let me know if you can come.<br><br>
    See you soon!<br>
    Maria`,
    [
      { word: 'hope', translation: 'espérer' },
      { word: 'party', translation: 'fête' },
      { word: 'address', translation: 'adresse' },
      { word: 'bring', translation: 'apporter' },
      { word: 'let me know', translation: 'fais-moi savoir' }
    ],
    [
      'Notice email structure: From, To, Subject',
      'Greetings: Hi, How are you?',
      'Main message: invitation with details',
      'Closing: See you soon, friendly tone'
    ]
  );
  
  // ==================== QUESTIONS FOR EACH LESSON ====================
  
  // Simple Dialogues Questions
  const simpleDialoguesQuestions = [
    {
      question: 'Where does this conversation happen?',
      options: ['At a coffee shop', 'At a restaurant', 'At home', 'At school'],
      correct: 0,
      explanation: 'The conversation happens at a coffee shop. Sarah orders coffee from a waiter.'
    },
    {
      question: 'What does Sarah want?',
      options: ['Tea', 'Cold coffee', 'Hot coffee with milk', 'Orange juice'],
      correct: 2,
      explanation: 'Sarah wants hot coffee with milk. She says "Hot, please. With milk."'
    },
    {
      question: 'How much does the coffee cost?',
      options: ['Two dollars', 'Three dollars', 'Four dollars', 'Five dollars'],
      correct: 1,
      explanation: 'The coffee costs three dollars. The waiter says "Three dollars, please."'
    },
    {
      question: 'What does Sarah say at the end?',
      options: ['Goodbye', 'See you later', 'You too!', 'Thank you very much'],
      correct: 2,
      explanation: 'Sarah responds to "Have a nice day!" with "You too!" This is a polite, common response.'
    },
    {
      question: 'Who is speaking first?',
      options: ['The waiter', 'Sarah', 'A customer', 'The manager'],
      correct: 1,
      explanation: 'Sarah speaks first. She says "Hello! Can I have a coffee, please?"'
    }
  ];
  
  // Picture Stories Questions
  const pictureStoriesQuestions = [
    {
      question: 'What time does Tom wake up?',
      options: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM'],
      correct: 1,
      explanation: 'Tom wakes up at 7:00 AM. The text says "Tom wakes up at 7:00 AM."'
    },
    {
      question: 'How does Tom feel when he wakes up?',
      options: ['Angry', 'Sad', 'Tired but happy', 'Excited'],
      correct: 2,
      explanation: 'Tom is tired but happy. The text clearly states "He is tired but happy."'
    },
    {
      question: 'What does Tom drink for breakfast?',
      options: ['Coffee', 'Tea', 'Milk', 'Orange juice'],
      correct: 3,
      explanation: 'Tom drinks orange juice. The text says "drinks orange juice."'
    },
    {
      question: 'How does Tom go to work?',
      options: ['By car', 'By bus', 'By train', 'He walks'],
      correct: 1,
      explanation: 'Tom goes to work by bus. He walks to the bus stop and takes the bus at 8:15 AM.'
    },
    {
      question: 'Who sits next to Tom at breakfast?',
      options: ['His dog', 'His cat', 'His friend', 'Nobody'],
      correct: 1,
      explanation: 'His cat sits next to him. The text says "His cat sits next to him."'
    }
  ];
  
  // Basic Instructions Questions
  const basicInstructionsQuestions = [
    {
      question: 'How many slices of bread do you need?',
      options: ['One', 'Two', 'Three', 'Four'],
      correct: 1,
      explanation: 'You need 2 slices of bread. The ingredients list says "2 slices of bread."'
    },
    {
      question: 'What do you put on the bread first?',
      options: ['Cheese', 'Tomato', 'Butter', 'Nothing'],
      correct: 2,
      explanation: 'You put butter on the bread first. Step 2 says "Put butter on the bread."'
    },
    {
      question: 'What should you do with the tomato?',
      options: ['Cut it', 'Wash it', 'Cook it', 'Throw it away'],
      correct: 0,
      explanation: 'You should cut the tomato. Step 4 says "Cut the tomato."'
    },
    {
      question: 'What is the last step?',
      options: ['Add cheese', 'Cut tomato', 'Put the other slice on top', 'Eat it'],
      correct: 2,
      explanation: 'The last step (step 5) is "Put the other slice on top."'
    },
    {
      question: 'How many ingredients do you need?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correct: 1,
      explanation: 'You need 4 ingredients: bread, butter, cheese, and tomato.'
    }
  ];
  
  // Shopping & Menus Questions
  const shoppingMenusQuestions = [
    {
      question: 'What is the name of the restaurant?',
      options: ['Bella Italia', 'Bella Pasta', 'Pasta House', 'Italian Restaurant'],
      correct: 1,
      explanation: 'The restaurant is called "Bella Pasta". This is shown at the top of the menu.'
    },
    {
      question: 'How much is the pizza?',
      options: ['$10', '$12', '$15', '$20'],
      correct: 2,
      explanation: 'The pizza costs $15. The menu shows "Pizza Margherita - $15".'
    },
    {
      question: 'What is the cheapest main dish?',
      options: ['Spaghetti', 'Pizza', 'Chicken salad', 'Ice cream'],
      correct: 2,
      explanation: 'Chicken salad is the cheapest main dish at $10.'
    },
    {
      question: 'When is the restaurant closed?',
      options: ['Monday', 'Sunday', 'Saturday', 'Never'],
      correct: 1,
      explanation: 'The restaurant is closed on Sunday. It is open Monday to Saturday.'
    },
    {
      question: 'How much is coffee and ice cream together?',
      options: ['$7', '$8', '$9', '$10'],
      correct: 1,
      explanation: 'Coffee is $3 and ice cream is $5. Together they cost $8.'
    }
  ];
  
  // Personal Profiles Questions
  const personalProfilesQuestions = [
    {
      question: 'How old is Anna?',
      options: ['23 years old', '24 years old', '25 years old', '26 years old'],
      correct: 2,
      explanation: 'Anna is 25 years old. She says "I am 25 years old."'
    },
    {
      question: 'Where is Anna from?',
      options: ['New York', 'Rome', 'Italy', 'Milan'],
      correct: 2,
      explanation: 'Anna is from Italy. She says "I am from Italy."'
    },
    {
      question: 'What is Anna\'s job?',
      options: ['Doctor', 'Teacher', 'Chef', 'Writer'],
      correct: 1,
      explanation: 'Anna is a teacher. She says "I am a teacher."'
    },
    {
      question: 'How many brothers and sisters does Anna have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correct: 1,
      explanation: 'Anna has two siblings: one brother and one sister.'
    },
    {
      question: 'How often does Anna call her family?',
      options: ['Every day', 'Every week', 'Every month', 'Every year'],
      correct: 1,
      explanation: 'Anna calls her family every week. She says "I call them every week."'
    }
  ];
  
  // Signs & Labels Questions
  const signsLabelsQuestions = [
    {
      question: 'Where do you go in?',
      options: ['EXIT', 'ENTRANCE', 'STOP', 'PUSH'],
      correct: 1,
      explanation: 'You go in at the ENTRANCE. The text says "This is where you go in."'
    },
    {
      question: 'What does "PULL" mean on a door?',
      options: ['Push the door', 'Pull the door toward you', 'Knock on the door', 'Open automatically'],
      correct: 1,
      explanation: 'PULL means you should pull the door toward you to open it.'
    },
    {
      question: 'If a sign says "NO SMOKING", what does it mean?',
      options: ['You can smoke', 'You cannot smoke here', 'Smoking area', 'Sell cigarettes'],
      correct: 1,
      explanation: 'NO SMOKING means you cannot smoke in that area. It is not allowed.'
    },
    {
      question: 'What is another word for "TOILETS"?',
      options: ['ENTRANCE', 'RESTROOMS', 'KITCHEN', 'EXIT'],
      correct: 1,
      explanation: 'RESTROOMS is another word for TOILETS. Both mean the bathroom.'
    },
    {
      question: 'Where can you ask questions?',
      options: ['At EXIT', 'At STOP', 'At INFORMATION', 'At ENTRANCE'],
      correct: 2,
      explanation: 'You can ask questions at INFORMATION. The text says "Ask questions here."'
    }
  ];
  
  // Simple Emails Questions
  const simpleEmailsQuestions = [
    {
      question: 'Who is sending the email?',
      options: ['John', 'Maria', 'Peter', 'Sarah'],
      correct: 1,
      explanation: 'Maria is sending the email. The "From" line shows maria@email.com and she signs "Maria".'
    },
    {
      question: 'When is the party?',
      options: ['Friday evening', 'Saturday evening', 'Sunday morning', 'Monday afternoon'],
      correct: 1,
      explanation: 'The party is on Saturday evening. Maria says "on Saturday evening."'
    },
    {
      question: 'What time does the party start?',
      options: ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'],
      correct: 1,
      explanation: 'The party starts at 7:00 PM. Maria says "It starts at 7:00 PM."'
    },
    {
      question: 'What is Maria\'s address?',
      options: ['15 Park Street', '20 Park Street', '25 Park Street', '30 Park Street'],
      correct: 2,
      explanation: 'Maria lives at 25 Park Street. She gives her address in the email.'
    },
    {
      question: 'What should John bring?',
      options: ['Money', 'A gift', 'Snacks or drinks', 'Nothing'],
      correct: 2,
      explanation: 'John should bring snacks or drinks. Maria says "Please bring some snacks or drinks."'
    }
  ];
  
  // ==================== LESSON SYSTEM ====================
  const readingLessonSystem = {
    'simpleDialogues': { lesson: simpleDialogues, questions: simpleDialoguesQuestions },
    'pictureStories': { lesson: pictureStories, questions: pictureStoriesQuestions },
    'basicInstructions': { lesson: basicInstructions, questions: basicInstructionsQuestions },
    'shoppingMenus': { lesson: shoppingMenus, questions: shoppingMenusQuestions },
    'personalProfiles': { lesson: personalProfiles, questions: personalProfilesQuestions },
    'signsLabels': { lesson: signsLabels, questions: signsLabelsQuestions },
    'simpleEmails': { lesson: simpleEmails, questions: simpleEmailsQuestions }
  };
  
  // ==================== EXERCISE LOGIC ====================
  let currentQuestion = 0;
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let answered = false;
  let currentLesson = localStorage.getItem('readingLessonNav');
  let timerInterval = null;
  let totalSeconds = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
    if (!currentLesson || !readingLessonSystem[currentLesson]) {
      alert("Aucune leçon sélectionnée. Retour à l'accueil.");
      window.location.href = 'reading.php';
      return;
    }
    
    readingLessonSystem[currentLesson].lesson.render();
    loadQuestion();
    updateStats();
  });
  
  
  document.getElementById('btnLesson').addEventListener('click', () => {
    switchView('lesson');
    stopTimer();
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
    const questions = readingLessonSystem[currentLesson].questions;
    const q = questions[currentQuestion];
    answered = false;
    
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('currentQuestionNum').textContent = currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerHTML = `<span>${option}</span>`;
      btn.addEventListener('click', () => selectAnswer(index));
      optionsContainer.appendChild(btn);
    });
    
    document.getElementById('explanationBox').classList.add('hidden');
    document.getElementById('nextQuestion').classList.add('hidden');
  }
  
  function selectAnswer(index) {
    if (answered) return;
    
    answered = true;
    const questions = readingLessonSystem[currentLesson].questions;
    const q = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
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
    
    options.forEach(opt => opt.disabled = true);
    
    const explanationBox = document.getElementById('explanationBox');
    explanationBox.innerHTML = `<strong>Explication:</strong> ${q.explanation}`;
    explanationBox.classList.remove('hidden');
    
    document.getElementById('nextQuestion').classList.remove('hidden');
    
    updateStats();
  }
  
  document.getElementById('nextQuestion').addEventListener('click', () => {
    const questions = readingLessonSystem[currentLesson].questions;
    
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      stopTimer();

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      let test = '';
      
      if (score >= 50) {
        test = 'valide';
      } else {
        test = 'non valide';
      }

      alert(`Quiz terminé! Score final: ${score} points, votre temps est de ${minutes} minutes et ${seconds} secondes.`);
      
      
      const dataToSend = {
          title: currentLesson,
          category: "Reading",
          level: readingLessonSystem[currentLesson].lesson.level,
          score: score,
          time: totalSeconds,
          status: test,
          date: new Date().toISOString()
      };
      
      console.log("Envoi des données:", dataToSend);
      
      // Envoyer les données
      fetch('./save_score.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      })
      .then(res => {
          console.log("Statut de la réponse:", res.status);
          if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
      })
      .then(data => {
          console.log("Réponse du serveur:", data);
          if (data.success) {
              console.log("Score enregistré avec succès !");
          } else {
              alert("Erreur: " + (data.error || "Erreur inconnue"));
          }
      })
      .catch(err => {
          console.error("Erreur d'envoi:", err);
          alert("Erreur lors de l'enregistrement du score: " + err.message);
      });
      
    
      localStorage.removeItem("readingLessonNav");
      currentQuestion = 0;
      score = 0;
      correct = 0;
      incorrect = 0;
      resetTimer();
      switchView('lesson');
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