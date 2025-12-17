class VocabularyLesson {
    constructor(level, title, description, category, introduction, wordsList, usageTips) {
      this.level = level;
      this.title = title;
      this.description = description;
      this.category = category;
      this.introduction = introduction;
      this.wordsList = wordsList;
      this.usageTips = usageTips;
    }
  
    render() {
      document.getElementById('lessonBadge').textContent = this.category;
      document.getElementById('lessonTitle').textContent = this.title;
      document.getElementById('lessonDescription').textContent = this.description;
      document.getElementById('lessonLevel').textContent = this.level;
      
      
      document.getElementById('vocabIntroduction').innerHTML = `<p>${this.introduction}</p>`;
      
      
      const wordsContainer = document.getElementById('wordsListContainer');
      wordsContainer.innerHTML = '';
      this.wordsList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'word-card';
        div.innerHTML = `
          <div class="word-header">
            <span class="word-english">${item.word}</span>
            </div>
            <p class="word-translation">${item.translation}</p>
            <p class="word-example">"${item.example}"</p>
            <p class="example-translation"><em>${item.exampleTranslation}</em></p>
            `;
            wordsContainer.appendChild(div);
          });
          
          // <span class="word-type">${item.type}</span> possible averina iany... Question style
      // Render usage tips
      const tipsList = document.getElementById('usageTips');
      tipsList.innerHTML = '';
      this.usageTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
      });
    }
  }
  
  // ==================== A1 VOCABULARY LESSONS ====================
  
  // 1. Greetings & Introductions
  const greetingsIntros = new VocabularyLesson(
    'A1',
    'Greetings & Introductions',
    'Learn essential words and phrases to greet people and introduce yourself',
    'Vocabulary',
    'These are the most important words you need when meeting someone for the first time or greeting friends and family.',
    [
      { word: 'Hello', type: 'greeting', translation: 'Bonjour', example: 'Hello! How are you?', exampleTranslation: 'Bonjour ! Comment allez-vous ?' },
      { word: 'Hi', type: 'greeting', translation: 'Salut', example: 'Hi! Nice to meet you.', exampleTranslation: 'Salut ! Enchanté de te rencontrer.' },
      { word: 'Goodbye', type: 'greeting', translation: 'Au revoir', example: 'Goodbye! See you tomorrow.', exampleTranslation: 'Au revoir ! À demain.' },
      { word: 'Good morning', type: 'greeting', translation: 'Bonjour (matin)', example: 'Good morning! Did you sleep well?', exampleTranslation: 'Bonjour ! As-tu bien dormi ?' },
      { word: 'Good afternoon', type: 'greeting', translation: 'Bon après-midi', example: 'Good afternoon! How is your day?', exampleTranslation: 'Bon après-midi ! Comment se passe ta journée ?' },
      { word: 'Good evening', type: 'greeting', translation: 'Bonsoir', example: 'Good evening! Welcome to our home.', exampleTranslation: 'Bonsoir ! Bienvenue chez nous.' },
      { word: 'Good night', type: 'greeting', translation: 'Bonne nuit', example: 'Good night! Sweet dreams.', exampleTranslation: 'Bonne nuit ! Fais de beaux rêves.' },
      { word: 'Please', type: 'polite', translation: 'S\'il vous plaît', example: 'Can I have water, please?', exampleTranslation: 'Puis-je avoir de l\'eau, s\'il vous plaît ?' },
      { word: 'Thank you', type: 'polite', translation: 'Merci', example: 'Thank you for your help!', exampleTranslation: 'Merci pour votre aide !' },
      { word: 'You\'re welcome', type: 'polite', translation: 'De rien', example: 'You\'re welcome! Anytime.', exampleTranslation: 'De rien ! Quand tu veux.' },
      { word: 'Excuse me', type: 'polite', translation: 'Excusez-moi', example: 'Excuse me, where is the bathroom?', exampleTranslation: 'Excusez-moi, où sont les toilettes ?' },
      { word: 'Sorry', type: 'polite', translation: 'Désolé', example: 'Sorry, I\'m late!', exampleTranslation: 'Désolé, je suis en retard !' }
    ],
    [
      'Use "Hello" in formal situations, "Hi" with friends',
      'Always say "please" and "thank you" to be polite',
      'Good morning = before 12pm, Good afternoon = 12pm-6pm, Good evening = after 6pm',
      'Say "Good night" only when going to bed, not as a greeting'
    ]
  );
  
  // 2. Numbers & Counting
  const numbersCounting = new VocabularyLesson(
    'A1',
    'Numbers & Counting',
    'Master numbers from 0 to 100 and learn how to count in English',
    'Vocabulary',
    'Numbers are essential for daily life: telling time, shopping, giving phone numbers, and counting objects.',
    [
      { word: 'Zero', type: 'number', translation: 'Zéro', example: 'I have zero apples.', exampleTranslation: 'Je n\'ai aucune pomme.' },
      { word: 'One', type: 'number', translation: 'Un', example: 'I have one brother.', exampleTranslation: 'J\'ai un frère.' },
      { word: 'Two', type: 'number', translation: 'Deux', example: 'There are two cats.', exampleTranslation: 'Il y a deux chats.' },
      { word: 'Three', type: 'number', translation: 'Trois', example: 'I eat three meals a day.', exampleTranslation: 'Je mange trois repas par jour.' },
      { word: 'Four', type: 'number', translation: 'Quatre', example: 'My car has four doors.', exampleTranslation: 'Ma voiture a quatre portes.' },
      { word: 'Five', type: 'number', translation: 'Cinq', example: 'School starts at five o\'clock.', exampleTranslation: 'L\'école commence à cinq heures.' },
      { word: 'Ten', type: 'number', translation: 'Dix', example: 'I have ten fingers.', exampleTranslation: 'J\'ai dix doigts.' },
      { word: 'Twenty', type: 'number', translation: 'Vingt', example: 'The book costs twenty dollars.', exampleTranslation: 'Le livre coûte vingt dollars.' },
      { word: 'Fifty', type: 'number', translation: 'Cinquante', example: 'My mother is fifty years old.', exampleTranslation: 'Ma mère a cinquante ans.' },
      { word: 'One hundred', type: 'number', translation: 'Cent', example: 'There are one hundred students.', exampleTranslation: 'Il y a cent étudiants.' },
      { word: 'First', type: 'ordinal', translation: 'Premier', example: 'This is my first day at work.', exampleTranslation: 'C\'est mon premier jour au travail.' },
      { word: 'Second', type: 'ordinal', translation: 'Deuxième', example: 'She finished in second place.', exampleTranslation: 'Elle a fini en deuxième place.' }
    ],
    [
      'Learn numbers 1-10 first, then 11-20, then by tens (30, 40, 50...)',
      'Ordinal numbers (first, second, third) are used for order and dates',
      'Practice saying phone numbers and prices out loud',
      'Remember: 13-19 end in "-teen", 20-90 end in "-ty"'
    ]
  );
  
  // 3. Family Members
  const familyMembers = new VocabularyLesson(
    'A1',
    'Family Members',
    'Learn the names of family members and relationships',
    'Vocabulary',
    'Family vocabulary helps you talk about the people closest to you and understand family relationships.',
    [
      { word: 'Mother', type: 'noun', translation: 'Mère', example: 'My mother is a teacher.', exampleTranslation: 'Ma mère est professeure.' },
      { word: 'Father', type: 'noun', translation: 'Père', example: 'My father works in a bank.', exampleTranslation: 'Mon père travaille dans une banque.' },
      { word: 'Sister', type: 'noun', translation: 'Sœur', example: 'I have one sister.', exampleTranslation: 'J\'ai une sœur.' },
      { word: 'Brother', type: 'noun', translation: 'Frère', example: 'My brother is ten years old.', exampleTranslation: 'Mon frère a dix ans.' },
      { word: 'Parents', type: 'noun', translation: 'Parents', example: 'My parents live in Paris.', exampleTranslation: 'Mes parents habitent à Paris.' },
      { word: 'Grandmother', type: 'noun', translation: 'Grand-mère', example: 'My grandmother makes delicious cookies.', exampleTranslation: 'Ma grand-mère fait de délicieux biscuits.' },
      { word: 'Grandfather', type: 'noun', translation: 'Grand-père', example: 'My grandfather loves fishing.', exampleTranslation: 'Mon grand-père adore la pêche.' },
      { word: 'Daughter', type: 'noun', translation: 'Fille', example: 'She has one daughter.', exampleTranslation: 'Elle a une fille.' },
      { word: 'Son', type: 'noun', translation: 'Fils', example: 'Their son is a doctor.', exampleTranslation: 'Leur fils est médecin.' },
      { word: 'Aunt', type: 'noun', translation: 'Tante', example: 'My aunt visits us every summer.', exampleTranslation: 'Ma tante nous rend visite chaque été.' },
      { word: 'Uncle', type: 'noun', translation: 'Oncle', example: 'My uncle is very funny.', exampleTranslation: 'Mon oncle est très drôle.' },
      { word: 'Cousin', type: 'noun', translation: 'Cousin(e)', example: 'My cousin lives in London.', exampleTranslation: 'Mon cousin habite à Londres.' }
    ],
    [
      'Use "Mom/Dad" informally, "Mother/Father" formally',
      'Parents = mother + father together',
      'Grandparents = grandmother + grandfather',
      'Say "older/younger brother/sister" to show age difference'
    ]
  );
  
  // 4. Colors
  const colors = new VocabularyLesson(
    'A1',
    'Colors',
    'Learn basic and common colors to describe objects and things',
    'Vocabulary',
    'Colors help you describe the world around you. These are the most common colors you\'ll use every day.',
    [
      { word: 'Red', type: 'adjective', translation: 'Rouge', example: 'The apple is red.', exampleTranslation: 'La pomme est rouge.' },
      { word: 'Blue', type: 'adjective', translation: 'Bleu', example: 'The sky is blue.', exampleTranslation: 'Le ciel est bleu.' },
      { word: 'Yellow', type: 'adjective', translation: 'Jaune', example: 'The sun is yellow.', exampleTranslation: 'Le soleil est jaune.' },
      { word: 'Green', type: 'adjective', translation: 'Vert', example: 'The grass is green.', exampleTranslation: 'L\'herbe est verte.' },
      { word: 'Black', type: 'adjective', translation: 'Noir', example: 'I have a black cat.', exampleTranslation: 'J\'ai un chat noir.' },
      { word: 'White', type: 'adjective', translation: 'Blanc', example: 'The snow is white.', exampleTranslation: 'La neige est blanche.' },
      { word: 'Orange', type: 'adjective', translation: 'Orange', example: 'She likes orange juice.', exampleTranslation: 'Elle aime le jus d\'orange.' },
      { word: 'Purple', type: 'adjective', translation: 'Violet', example: 'Her dress is purple.', exampleTranslation: 'Sa robe est violette.' },
      { word: 'Pink', type: 'adjective', translation: 'Rose', example: 'The flowers are pink.', exampleTranslation: 'Les fleurs sont roses.' },
      { word: 'Brown', type: 'adjective', translation: 'Marron', example: 'He has brown eyes.', exampleTranslation: 'Il a les yeux marron.' },
      { word: 'Gray', type: 'adjective', translation: 'Gris', example: 'The clouds are gray.', exampleTranslation: 'Les nuages sont gris.' },
      { word: 'Dark', type: 'adjective', translation: 'Foncé', example: 'I like dark blue.', exampleTranslation: 'J\'aime le bleu foncé.' }
    ],
    [
      'Colors are adjectives - they describe nouns',
      'Colors come before the noun in English: "a red car"',
      'Add "dark" or "light" to make shades: dark blue, light green',
      'Some colors are also nouns (fruit): orange, lemon'
    ]
  );
  
  // 5. Food & Drinks
  const foodDrinks = new VocabularyLesson(
    'A1',
    'Food & Drinks',
    'Learn vocabulary for common foods, meals, and beverages',
    'Vocabulary',
    'Food vocabulary is essential for restaurants, shopping, and talking about your meals and preferences.',
    [
      { word: 'Bread', type: 'noun', translation: 'Pain', example: 'I eat bread for breakfast.', exampleTranslation: 'Je mange du pain au petit-déjeuner.' },
      { word: 'Water', type: 'noun', translation: 'Eau', example: 'Can I have some water, please?', exampleTranslation: 'Puis-je avoir de l\'eau, s\'il vous plaît ?' },
      { word: 'Coffee', type: 'noun', translation: 'Café', example: 'She drinks coffee every morning.', exampleTranslation: 'Elle boit du café chaque matin.' },
      { word: 'Tea', type: 'noun', translation: 'Thé', example: 'I prefer tea to coffee.', exampleTranslation: 'Je préfère le thé au café.' },
      { word: 'Milk', type: 'noun', translation: 'Lait', example: 'Do you have milk?', exampleTranslation: 'Avez-vous du lait ?' },
      { word: 'Egg', type: 'noun', translation: 'Œuf', example: 'I eat two eggs for breakfast.', exampleTranslation: 'Je mange deux œufs au petit-déjeuner.' },
      { word: 'Meat', type: 'noun', translation: 'Viande', example: 'He doesn\'t eat meat.', exampleTranslation: 'Il ne mange pas de viande.' },
      { word: 'Chicken', type: 'noun', translation: 'Poulet', example: 'We have chicken for dinner.', exampleTranslation: 'Nous avons du poulet pour le dîner.' },
      { word: 'Fish', type: 'noun', translation: 'Poisson', example: 'I love fish and chips.', exampleTranslation: 'J\'adore le fish and chips.' },
      { word: 'Rice', type: 'noun', translation: 'Riz', example: 'Rice is a popular food in Asia.', exampleTranslation: 'Le riz est un aliment populaire en Asie.' },
      { word: 'Fruit', type: 'noun', translation: 'Fruit', example: 'Eat fruit every day!', exampleTranslation: 'Mangez des fruits tous les jours !' },
      { word: 'Vegetable', type: 'noun', translation: 'Légume', example: 'I eat vegetables at lunch.', exampleTranslation: 'Je mange des légumes au déjeuner.' }
    ],
    [
      'Countable: egg, apple, banana (use a/an, one, two...)',
      'Uncountable: water, milk, rice (use some, any, much)',
      'Meals: breakfast, lunch, dinner',
      'Use "I like..." for preferences, "I eat/drink..." for habits'
    ]
  );
  
  // 6. Animals
  const animals = new VocabularyLesson(
    'A1',
    'Animals',
    'Learn names of common pets, farm animals, and wild animals',
    'Vocabulary',
    'Animal vocabulary helps you talk about pets, visit farms and zoos, and describe the natural world.',
    [
      { word: 'Dog', type: 'noun', translation: 'Chien', example: 'I have a big dog.', exampleTranslation: 'J\'ai un grand chien.' },
      { word: 'Cat', type: 'noun', translation: 'Chat', example: 'My cat sleeps all day.', exampleTranslation: 'Mon chat dort toute la journée.' },
      { word: 'Bird', type: 'noun', translation: 'Oiseau', example: 'I can hear birds singing.', exampleTranslation: 'J\'entends les oiseaux chanter.' },
      { word: 'Fish', type: 'noun', translation: 'Poisson', example: 'We have five fish in our tank.', exampleTranslation: 'Nous avons cinq poissons dans notre aquarium.' },
      { word: 'Horse', type: 'noun', translation: 'Cheval', example: 'She loves riding horses.', exampleTranslation: 'Elle adore monter à cheval.' },
      { word: 'Cow', type: 'noun', translation: 'Vache', example: 'Cows give us milk.', exampleTranslation: 'Les vaches nous donnent du lait.' },
      { word: 'Pig', type: 'noun', translation: 'Cochon', example: 'The pig is pink.', exampleTranslation: 'Le cochon est rose.' },
      { word: 'Chicken', type: 'noun', translation: 'Poule', example: 'Chickens lay eggs.', exampleTranslation: 'Les poules pondent des œufs.' },
      { word: 'Rabbit', type: 'noun', translation: 'Lapin', example: 'The rabbit has long ears.', exampleTranslation: 'Le lapin a de longues oreilles.' },
      { word: 'Mouse', type: 'noun', translation: 'Souris', example: 'There is a mouse in the house!', exampleTranslation: 'Il y a une souris dans la maison !' },
      { word: 'Lion', type: 'noun', translation: 'Lion', example: 'The lion is the king of animals.', exampleTranslation: 'Le lion est le roi des animaux.' },
      { word: 'Elephant', type: 'noun', translation: 'Éléphant', example: 'Elephants are very big.', exampleTranslation: 'Les éléphants sont très grands.' }
    ],
    [
      'Pets: dog, cat, bird, fish, rabbit',
      'Farm animals: cow, pig, chicken, horse, sheep',
      'Wild animals: lion, elephant, tiger, monkey',
      'Use "a" before consonant sounds: a dog, a cat'
    ]
  );
  
  // 7. Days & Months
  const daysMonths = new VocabularyLesson(
    'A1',
    'Days & Months',
    'Learn the days of the week and months of the year',
    'Vocabulary',
    'Knowing days and months helps you make plans, understand dates, and talk about schedules.',
    [
      { word: 'Monday', type: 'noun', translation: 'Lundi', example: 'I go to work on Monday.', exampleTranslation: 'Je vais au travail le lundi.' },
      { word: 'Tuesday', type: 'noun', translation: 'Mardi', example: 'Tuesday is the second day.', exampleTranslation: 'Mardi est le deuxième jour.' },
      { word: 'Wednesday', type: 'noun', translation: 'Mercredi', example: 'We have a meeting on Wednesday.', exampleTranslation: 'Nous avons une réunion mercredi.' },
      { word: 'Thursday', type: 'noun', translation: 'Jeudi', example: 'Thursday comes after Wednesday.', exampleTranslation: 'Jeudi vient après mercredi.' },
      { word: 'Friday', type: 'noun', translation: 'Vendredi', example: 'Friday is my favorite day!', exampleTranslation: 'Vendredi est mon jour préféré !' },
      { word: 'Saturday', type: 'noun', translation: 'Samedi', example: 'I relax on Saturday.', exampleTranslation: 'Je me détends le samedi.' },
      { word: 'Sunday', type: 'noun', translation: 'Dimanche', example: 'Sunday is a day of rest.', exampleTranslation: 'Dimanche est un jour de repos.' },
      { word: 'January', type: 'noun', translation: 'Janvier', example: 'January is the first month.', exampleTranslation: 'Janvier est le premier mois.' },
      { word: 'March', type: 'noun', translation: 'Mars', example: 'Spring begins in March.', exampleTranslation: 'Le printemps commence en mars.' },
      { word: 'July', type: 'noun', translation: 'Juillet', example: 'July is very hot.', exampleTranslation: 'Juillet est très chaud.' },
      { word: 'December', type: 'noun', translation: 'Décembre', example: 'Christmas is in December.', exampleTranslation: 'Noël est en décembre.' },
      { word: 'Weekend', type: 'noun', translation: 'Week-end', example: 'I love the weekend!', exampleTranslation: 'J\'adore le week-end !' }
    ],
    [
      'Days and months always start with a capital letter',
      'Use "on" with days: on Monday, on Friday',
      'Use "in" with months: in January, in December',
      'Weekend = Saturday + Sunday'
    ]
  );
  
  // ==================== QUESTIONS FOR EACH LESSON ====================
  
  // Greetings & Introductions Questions
  const greetingsIntrosQuestions = [
    {
      question: 'What do you say when you meet someone in the morning?',
      options: ['Good night', 'Good morning', 'Goodbye', 'Good evening'],
      correct: 1,
      explanation: 'Good morning is used when you meet someone before noon (12pm).'
    },
    {
      question: 'Which greeting is more informal and casual?',
      options: ['Hello', 'Good morning', 'Hi', 'Good evening'],
      correct: 2,
      explanation: 'Hi is an informal greeting used with friends and family. Hello is more formal.'
    },
    {
      question: 'What do you say when you want to be polite and ask for something?',
      options: ['Thank you', 'Please', 'Sorry', 'Goodbye'],
      correct: 1,
      explanation: 'Please is used when asking for something politely. Always use it to be courteous.'
    },
    {
      question: 'Someone says "Thank you" to you. What do you say?',
      options: ['Goodbye', 'Please', 'You\'re welcome', 'Good night'],
      correct: 2,
      explanation: 'You\'re welcome is the polite response to thank you. It means "de rien" in French.'
    },
    {
      question: 'When do you say "Good night"?',
      options: ['When you arrive', 'When you wake up', 'When you go to bed', 'In the afternoon'],
      correct: 2,
      explanation: 'Good night is said when you go to bed or leave at night. It\'s not a greeting.'
    },
    {
      question: 'What do you say when you leave someone?',
      options: ['Hello', 'Good morning', 'Goodbye', 'Please'],
      correct: 2,
      explanation: 'Goodbye is used when you leave or say farewell to someone.'
    },
    {
      question: 'Which is correct when you need someone\'s attention?',
      options: ['Sorry', 'Excuse me', 'Thank you', 'Goodbye'],
      correct: 1,
      explanation: 'Excuse me is used to get someone\'s attention politely or to pass by someone.'
    },
    {
      question: 'What greeting is used after 6pm?',
      options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      correct: 2,
      explanation: 'Good evening is used as a greeting after 6pm. Good night is only for saying goodbye at bedtime.'
    },
    {
      question: 'If you make a mistake, what should you say?',
      options: ['Please', 'Thank you', 'Sorry', 'Goodbye'],
      correct: 2,
      explanation: 'Sorry is used when you make a mistake, are late, or want to apologize.'
    },
    {
      question: 'Which greeting is used between 12pm and 6pm?',
      options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      correct: 1,
      explanation: 'Good afternoon is used between noon (12pm) and evening (6pm).'
    }
  ];
  
  // Numbers & Counting Questions
  const numbersCountingQuestions = [
    {
      question: 'How do you write the number 3 in words?',
      options: ['Tree', 'Three', 'Thee', 'Free'],
      correct: 1,
      explanation: 'The number 3 is written as "three" in English.'
    },
    {
      question: 'What comes after "nine"?',
      options: ['Eight', 'Ten', 'Eleven', 'Twenty'],
      correct: 1,
      explanation: 'After nine (9) comes ten (10).'
    },
    {
      question: 'How do you say "1er" in English?',
      options: ['One', 'First', 'Oneth', 'Firstone'],
      correct: 1,
      explanation: 'First is the ordinal number for 1. It\'s used for positions and dates (1st).'
    },
    {
      question: 'Which number comes between four and six?',
      options: ['Three', 'Five', 'Seven', 'Eight'],
      correct: 1,
      explanation: 'Five (5) comes between four (4) and six (6).'
    },
    {
      question: 'How many fingers do you have?',
      options: ['Five', 'Ten', 'Fifteen', 'Twenty'],
      correct: 1,
      explanation: 'Most people have ten fingers - five on each hand.'
    },
    {
      question: 'What is 10 + 10?',
      options: ['Ten', 'Twenty', 'Thirty', 'Fifteen'],
      correct: 1,
      explanation: 'Ten plus ten equals twenty (10 + 10 = 20).'
    },
    {
      question: 'How do you say "2ème" in English?',
      options: ['Two', 'Second', 'Twice', 'Twoth'],
      correct: 1,
      explanation: 'Second is the ordinal number for 2 (2nd). Used for positions and ranking.'
    },
    {
      question: 'What number comes before twenty?',
      options: ['Eighteen', 'Nineteen', 'Twenty-one', 'Fifteen'],
      correct: 1,
      explanation: 'Nineteen (19) comes just before twenty (20).'
    },
    {
      question: 'How do you say "0" in English?',
      options: ['Nothing', 'Zero', 'Null', 'Empty'],
      correct: 1,
      explanation: 'Zero is the word for 0 in English. You can also say "oh" when reading numbers.'
    },
    {
      question: 'What is half of one hundred?',
      options: ['Twenty', 'Thirty', 'Forty', 'Fifty'],
      correct: 3,
      explanation: 'Half of one hundred (100 ÷ 2) is fifty (50).'
    }
  ];
  
  // Family Members Questions
  const familyMembersQuestions = [
    {
      question: 'What do you call your mother\'s mother?',
      options: ['Aunt', 'Mother', 'Grandmother', 'Sister'],
      correct: 2,
      explanation: 'Your mother\'s mother (or father\'s mother) is your grandmother.'
    },
    {
      question: 'What is your father\'s brother to you?',
      options: ['Cousin', 'Uncle', 'Brother', 'Nephew'],
      correct: 1,
      explanation: 'Your father\'s brother (or mother\'s brother) is your uncle.'
    },
    {
      question: 'What do you call a male child of your parents?',
      options: ['Son', 'Brother', 'Cousin', 'Nephew'],
      correct: 1,
      explanation: 'A male child of your parents is your brother. If you have a brother, he is also your parents\' son.'
    },
    {
      question: 'Your aunt\'s or uncle\'s child is your _____.',
      options: ['Brother', 'Sister', 'Cousin', 'Nephew'],
      correct: 2,
      explanation: 'Your aunt\'s or uncle\'s child is your cousin. Cousins share grandparents.'
    },
    {
      question: 'What word describes both your mother and father together?',
      options: ['Grandparents', 'Parents', 'Family', 'Relatives'],
      correct: 1,
      explanation: 'Parents is the word for mother and father together.'
    },
    {
      question: 'A female child of your parents is your _____.',
      options: ['Daughter', 'Sister', 'Cousin', 'Niece'],
      correct: 1,
      explanation: 'A female child of your parents is your sister (from your perspective).'
    },
    {
      question: 'What do you call your father\'s father?',
      options: ['Uncle', 'Father', 'Grandfather', 'Brother'],
      correct: 2,
      explanation: 'Your father\'s father (or mother\'s father) is your grandfather.'
    },
    {
      question: 'If you are a parent, your male child is your _____.',
      options: ['Brother', 'Son', 'Nephew', 'Cousin'],
      correct: 1,
      explanation: 'Your male child is your son. Your female child is your daughter.'
    },
    {
      question: 'Your mother\'s sister is your _____.',
      options: ['Cousin', 'Aunt', 'Sister', 'Grandmother'],
      correct: 1,
      explanation: 'Your mother\'s sister (or father\'s sister) is your aunt.'
    },
    {
      question: 'Which word is the informal way to say "father"?',
      options: ['Pop', 'Dad', 'Papa', 'All of these'],
      correct: 3,
      explanation: 'Dad, Pop, and Papa are all informal ways to say father. Dad is the most common.'
    }
  ];
  
  // Colors Questions
  const colorsQuestions = [
    {
      question: 'What color is the sky on a sunny day?',
      options: ['Green', 'Blue', 'Yellow', 'Red'],
      correct: 1,
      explanation: 'The sky is blue on a sunny day. We often say "blue sky" or "clear blue sky".'
    },
    {
      question: 'What color is grass?',
      options: ['Brown', 'Yellow', 'Green', 'Blue'],
      correct: 2,
      explanation: 'Grass is green. Trees and leaves are also green.'
    },
    {
      question: 'What color is snow?',
      options: ['White', 'Gray', 'Blue', 'Silver'],
      correct: 0,
      explanation: 'Snow is white. Clouds can also be white.'
    },
    {
      question: 'Mix red and yellow to make _____.',
      options: ['Green', 'Orange', 'Purple', 'Brown'],
      correct: 1,
      explanation: 'Red + yellow = orange. Orange is also the name of a fruit!'
    },
    {
      question: 'What color is the sun usually drawn as?',
      options: ['Orange', 'Yellow', 'Red', 'White'],
      correct: 1,
      explanation: 'The sun is usually drawn or described as yellow, though it can appear orange at sunset.'
    },
    {
      question: 'At night, the sky is _____.',
      options: ['Blue', 'White', 'Black', 'Yellow'],
      correct: 2,
      explanation: 'At night, the sky is black (or very dark blue). We see stars in the black sky.'
    },
    {
      question: 'What color do you get when you mix black and white?',
      options: ['Brown', 'Gray', 'Blue', 'Silver'],
      correct: 1,
      explanation: 'Black + white = gray. Gray is between black and white.'
    },
    {
      question: 'What color is chocolate?',
      options: ['Black', 'Red', 'Brown', 'Purple'],
      correct: 2,
      explanation: 'Chocolate is brown. Wood and coffee are also brown.'
    },
    {
      question: 'Roses are often _____.',
      options: ['Blue', 'Red', 'Green', 'Yellow'],
      correct: 1,
      explanation: 'Roses are often red, but they can also be pink, white, yellow, or other colors.'
    },
    {
      question: 'What do we call very dark blue?',
      options: ['Light blue', 'Dark blue', 'Navy blue', 'Both B and C'],
      correct: 3,
      explanation: 'Very dark blue can be called "dark blue" or "navy blue". Navy blue is a specific shade.'
    }
  ];
  
  // Food & Drinks Questions
  const foodDrinksQuestions = [
    {
      question: 'What do you drink that comes from cows?',
      options: ['Water', 'Juice', 'Milk', 'Tea'],
      correct: 2,
      explanation: 'Milk comes from cows. We drink milk and use it in coffee, cereal, and cooking.'
    },
    {
      question: 'What do people usually drink in the morning to wake up?',
      options: ['Water', 'Milk', 'Coffee', 'Juice'],
      correct: 2,
      explanation: 'Many people drink coffee in the morning because it has caffeine and helps them wake up.'
    },
    {
      question: 'Which food comes from chickens?',
      options: ['Milk', 'Eggs', 'Bread', 'Fish'],
      correct: 1,
      explanation: 'Eggs come from chickens. We eat eggs for breakfast, in cakes, and many dishes.'
    },
    {
      question: 'What is the most common drink in the world?',
      options: ['Coffee', 'Tea', 'Milk', 'Water'],
      correct: 3,
      explanation: 'Water is the most common drink. Everyone needs water to survive.'
    },
    {
      question: 'What food is made from wheat and eaten for breakfast?',
      options: ['Rice', 'Bread', 'Meat', 'Fish'],
      correct: 1,
      explanation: 'Bread is made from wheat. We eat bread for breakfast, sandwiches, and with meals.'
    },
    {
      question: 'Which of these is a type of meat?',
      options: ['Apple', 'Chicken', 'Rice', 'Bread'],
      correct: 1,
      explanation: 'Chicken is a type of meat (from chickens). Other meats include beef, pork, and lamb.'
    },
    {
      question: 'What do vegetarians NOT eat?',
      options: ['Vegetables', 'Fruit', 'Meat', 'Bread'],
      correct: 2,
      explanation: 'Vegetarians do not eat meat or fish. They eat vegetables, fruits, grains, and dairy.'
    },
    {
      question: 'Which food grows in water?',
      options: ['Chicken', 'Bread', 'Fish', 'Egg'],
      correct: 2,
      explanation: 'Fish live and grow in water (oceans, rivers, lakes). We catch fish to eat.'
    },
    {
      question: 'What is a popular drink in Britain?',
      options: ['Coffee', 'Tea', 'Milk', 'Juice'],
      correct: 1,
      explanation: 'Tea is very popular in Britain. British people often drink tea in the afternoon.'
    },
    {
      question: 'Which is a grain that is popular in Asian countries?',
      options: ['Bread', 'Meat', 'Rice', 'Egg'],
      correct: 2,
      explanation: 'Rice is a grain that is very popular in Asian countries. It\'s eaten with almost every meal.'
    }
  ];
  
  // Animals Questions
  const animalsQuestions = [
    {
      question: 'Which animal is known as "man\'s best friend"?',
      options: ['Cat', 'Dog', 'Horse', 'Bird'],
      correct: 1,
      explanation: 'Dogs are called "man\'s best friend" because they are loyal, friendly pets.'
    },
    {
      question: 'Which animal says "meow"?',
      options: ['Dog', 'Cow', 'Cat', 'Bird'],
      correct: 2,
      explanation: 'Cats say "meow". This is the sound cats make when they communicate.'
    },
    {
      question: 'Which animal gives us milk?',
      options: ['Dog', 'Cow', 'Cat', 'Lion'],
      correct: 1,
      explanation: 'Cows give us milk. We drink cow\'s milk and make cheese, butter, and yogurt from it.'
    },
    {
      question: 'Which animal can fly?',
      options: ['Dog', 'Fish', 'Bird', 'Mouse'],
      correct: 2,
      explanation: 'Birds can fly. They have wings and feathers that help them fly in the sky.'
    },
    {
      question: 'Which animal lives in water?',
      options: ['Dog', 'Fish', 'Cat', 'Rabbit'],
      correct: 1,
      explanation: 'Fish live in water. They have gills to breathe underwater and fins to swim.'
    },
    {
      question: 'Which animal is the largest?',
      options: ['Cat', 'Dog', 'Mouse', 'Elephant'],
      correct: 3,
      explanation: 'Elephants are the largest land animals. They are very big and have long trunks.'
    },
    {
      question: 'Which animal has long ears and hops?',
      options: ['Cat', 'Rabbit', 'Dog', 'Fish'],
      correct: 1,
      explanation: 'Rabbits have long ears and hop (jump) to move around. They eat carrots and vegetables.'
    },
    {
      question: 'Which animal is called "the king of the jungle"?',
      options: ['Elephant', 'Tiger', 'Lion', 'Bear'],
      correct: 2,
      explanation: 'Lions are called "the king of the jungle" or "the king of animals" because they are powerful.'
    },
    {
      question: 'Which farm animal lays eggs?',
      options: ['Cow', 'Pig', 'Chicken', 'Horse'],
      correct: 2,
      explanation: 'Chickens lay eggs. We eat chicken eggs for breakfast and use them in baking.'
    },
    {
      question: 'Which animal is very small and says "squeak"?',
      options: ['Elephant', 'Horse', 'Mouse', 'Cow'],
      correct: 2,
      explanation: 'Mice are very small animals that make a "squeak" sound. They have long tails.'
    }
  ];
  
  // Days & Months Questions
  const daysMonthsQuestions = [
    {
      question: 'What is the first day of the week?',
      options: ['Sunday', 'Monday', 'Saturday', 'Tuesday'],
      correct: 1,
      explanation: 'Monday is traditionally the first day of the work/school week (though some calendars show Sunday first).'
    },
    {
      question: 'Which day comes after Friday?',
      options: ['Thursday', 'Sunday', 'Saturday', 'Monday'],
      correct: 2,
      explanation: 'Saturday comes after Friday. Saturday and Sunday together make the weekend.'
    },
    {
      question: 'What are Saturday and Sunday called together?',
      options: ['Week', 'Weekend', 'Weekdays', 'Holiday'],
      correct: 1,
      explanation: 'Saturday and Sunday together are called the weekend. Most people don\'t work on the weekend.'
    },
    {
      question: 'Which is the first month of the year?',
      options: ['December', 'February', 'January', 'March'],
      correct: 2,
      explanation: 'January is the first month of the year (month 1). The year starts on January 1st.'
    },
    {
      question: 'In which month is Christmas?',
      options: ['November', 'December', 'January', 'October'],
      correct: 1,
      explanation: 'Christmas is on December 25th. December is the last month of the year (month 12).'
    },
    {
      question: 'Which day comes between Tuesday and Thursday?',
      options: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      correct: 1,
      explanation: 'Wednesday comes between Tuesday and Thursday. It\'s in the middle of the work week.'
    },
    {
      question: 'How many days are in one week?',
      options: ['Five', 'Six', 'Seven', 'Eight'],
      correct: 2,
      explanation: 'There are seven days in one week: Monday through Sunday.'
    },
    {
      question: 'Which preposition do we use with days? "_____ Monday"',
      options: ['in', 'at', 'on', 'by'],
      correct: 2,
      explanation: 'We use "on" with days: on Monday, on Tuesday, on the weekend.'
    },
    {
      question: 'Which preposition do we use with months? "_____ January"',
      options: ['in', 'at', 'on', 'by'],
      correct: 0,
      explanation: 'We use "in" with months: in January, in December, in the summer.'
    },
    {
      question: 'What is the last day of the work week (before weekend)?',
      options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
      correct: 1,
      explanation: 'Friday is the last day of the work/school week. The weekend starts after Friday.'
    }
  ];
  
  // ==================== LESSON SYSTEM ====================
  const vocabularyLessonSystem = {
    'greetingsIntros': { lesson: greetingsIntros, questions: greetingsIntrosQuestions },
    'numbersCounting': { lesson: numbersCounting, questions: numbersCountingQuestions },
    'familyMembers': { lesson: familyMembers, questions: familyMembersQuestions },
    'colors': { lesson: colors, questions: colorsQuestions },
    'foodDrinks': { lesson: foodDrinks, questions: foodDrinksQuestions },
    'animals': { lesson: animals, questions: animalsQuestions },
    'daysMonths': { lesson: daysMonths, questions: daysMonthsQuestions }
  };
  
  // ==================== EXERCISE LOGIC ====================
  let currentQuestion = 0;
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let answered = false;
  let currentLesson = localStorage.getItem('vocabularyLessonNav');
  let timerInterval = null;
  let totalSeconds = 0;
  
  document.addEventListener('DOMContentLoaded', () => {
    if (!currentLesson || !vocabularyLessonSystem[currentLesson]) {
      alert("Aucune leçon sélectionnée. Retour à l'accueil.");
      window.location.href = 'vocabulary.php';
      return;
    }
    
    vocabularyLessonSystem[currentLesson].lesson.render();
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
  
  // Timer functions
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
  
  // Question loading
  function loadQuestion() {
    const questions = vocabularyLessonSystem[currentLesson].questions;
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
    const questions = vocabularyLessonSystem[currentLesson].questions;
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
    const questions = vocabularyLessonSystem[currentLesson].questions;
    
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
          category: "Vocabulary",
          level: vocabularyLessonSystem[currentLesson].lesson.level,
          score: score,
          time: totalSeconds,
          status: test,
          date: new Date().toISOString()
      };
      
      console.log("Envoi des données:", dataToSend);
      
      //envoie de donnee
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
      
      
      localStorage.removeItem("vocabularyLessonNav");
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