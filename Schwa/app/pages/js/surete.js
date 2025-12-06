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
      
      document.getElementById('lessonBadge').textContent = this.category;
      
      
      document.getElementById('lessonTitle').textContent = this.title;
      document.getElementById('lessonDescription').textContent = this.description;
      document.getElementById('lessonLevel').textContent = this.level;
      
      
      document.getElementById('structureBox').innerHTML = `<p>${this.structure}</p>`;
      
      
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

// A1, verb to be
const toBe = new Lesson(
  'A1',
  'Verb "to Be"',
  'Learn how to use the verb "to be", essential for introducing yourself and describing things',
  'Grammar',
  '<b>Subject</b> + <b class="blue">am/is/are</b><br><br>' +
  '<b>I</b> <b class="indigo">am</b><br><br>' +
  '<b>You/We/They</b> <b class="indigo">are</b><br><br>' +
  '<b>He/She/It</b> <b class="indigo">is</b><br>',
  [
    {sentence: 'I am learning English.', translation: 'J\'apprends l\'anglais.'},
    {sentence: 'You are my best friend.', translation: 'Tu es mon meilleur ami.'},
    {sentence: 'He is a doctor.', translation: 'Il est médecin.'},
    {sentence: 'We are happy.', translation: 'Nous sommes heureux.'},
    {sentence: 'They are students.', translation: 'Ils sont étudiants.'}
  ],
  [
    'Use "am" only with "I"',
    'Use "is" with he, she, it, and singular nouns',
    'Use "are" with you, we, they, and plural nouns',
    'Negative: add "not" after the verb (I am not, She is not/isn\'t)',
    'Questions: put the verb before the subject (Am I? Is she? Are they?)'
  ]
);
// A1, simple present
const simplePresent = new Lesson(
  'A1',
  'Simple Present Tense',
  'Learn how to talk about habits, routines, facts, and general truths',
  'Grammar',
  '<b>Subject</b> + <b class="blue">verb (base form)</b><br>' +
  '<b>He/She/It</b> + <b class="indigo">verb + s/es</b>',
  [
    {sentence: 'I work every day.', translation: 'Je travaille tous les jours.'},
    {sentence: 'She plays tennis on Sundays.', translation: 'Elle joue au tennis le dimanche.'},
    {sentence: 'They live in Paris.', translation: 'Ils habitent à Paris.'},
    {sentence: 'He watches TV in the evening.', translation: 'Il regarde la télé le soir.'},
    {sentence: 'We speak English.', translation: 'Nous parlons anglais.'}
  ],
  [
    'Add -s or -es to verbs with he/she/it',
    'Verbs ending in -ch, -sh, -ss, -x, -o add -es (watches, goes)',
    'Verbs ending in consonant + y: change y to -ies (study → studies)',
    'Use for habits, routines, and facts',
    'Negative: use "do not/don\'t" or "does not/doesn\'t" + base verb'
  ]
);

// A1, Articles
const articles = new Lesson(
  'A2',
  'Articles: A, An, The',
  'Learn when to use indefinite articles (a, an) and the definite article (the)',
  'Grammar',
  '<b class="blue">A</b> + consonant sound<br>' +
  '<b class="blue">An</b> + vowel sound (a, e, i, o, u)<br>' +
  '<b class="indigo">The</b> + specific/known noun',
  [
    {sentence: 'I have a car.', translation: 'J\'ai une voiture.'},
    {sentence: 'She is an engineer.', translation: 'Elle est ingénieure.'},
    {sentence: 'The car is red.', translation: 'La voiture est rouge.'},
    {sentence: 'I saw an elephant at the zoo.', translation: 'J\'ai vu un éléphant au zoo.'},
    {sentence: 'The sun rises in the east.', translation: 'Le soleil se lève à l\'est.'}
  ],
  [
    'Use "a" before consonant sounds (a book, a university)',
    'Use "an" before vowel sounds (an apple, an hour)',
    'Use "the" for specific or previously mentioned things',
    'Use "the" with unique things (the sun, the moon, the internet)',
    'No article needed for general plural nouns or uncountable nouns'
  ]
);
// A1, plural Form
const plurals = new Lesson(
  'A2',
  'Plural Forms: Regular and Irregular',
  'Learn how to form regular and irregular plurals in English',
  'Grammar',
  '<b>Regular:</b> noun + <b class="blue">-s/-es</b><br>' +
  '<b>Irregular:</b> <b class="indigo">special forms</b>',
  [
    {sentence: 'I have two books.', translation: 'J\'ai deux livres.'},
    {sentence: 'There are three boxes.', translation: 'Il y a trois boîtes.'},
    {sentence: 'The children are playing.', translation: 'Les enfants jouent.'},
    {sentence: 'I saw many mice.', translation: 'J\'ai vu beaucoup de souris.'},
    {sentence: 'Those women are doctors.', translation: 'Ces femmes sont médecins.'}
  ],
  [
    'Regular: add -s (book → books, car → cars)',
    'Words ending in -s, -sh, -ch, -x, -z: add -es (box → boxes)',
    'Words ending in consonant + y: change to -ies (baby → babies)',
    'Irregular plurals: man → men, woman → women, child → children',
    'Some words don\'t change: sheep → sheep, fish → fish'
  ]
)

// A1 - Basic Questions (What, Where, When, Who, Why, How)
const basicQuestions = new Lesson(
  'A1',
  'Basic Questions',
  'Learn how to ask questions using What, Where, When, Who, Why, and How',
  'Grammar',
  '<b class="blue">What</b> = things/information<br>' +
  '<b class="blue">Where</b> = places/locations<br>' +
  '<b class="blue">When</b> = time<br>' +
  '<b class="indigo">Who</b> = people<br>' +
  '<b class="indigo">Why</b> = reasons<br>' +
  '<b class="indigo">How</b> = manner/method',
  [
    {sentence: 'What is your name?', translation: 'Quel est ton nom ?'},
    {sentence: 'Where do you live?', translation: 'Où habites-tu ?'},
    {sentence: 'When is your birthday?', translation: 'Quand est ton anniversaire ?'},
    {sentence: 'Who is your teacher?', translation: 'Qui est ton professeur ?'},
    {sentence: 'Why are you happy?', translation: 'Pourquoi es-tu heureux ?'},
    {sentence: 'How are you today?', translation: 'Comment vas-tu aujourd\'hui ?'}
  ],
  [
    'Use "What" to ask about things, names, or information',
    'Use "Where" to ask about places or locations',
    'Use "When" to ask about time (day, month, year, hour)',
    'Use "Who" to ask about people or identity',
    'Use "Why" to ask about reasons or causes',
    'Use "How" to ask about manner, method, or condition'
  ]
);

// A1 - There is / There are (existOrNot)
const existOrNot = new Lesson(
  'A1',
  'There is / There are',
  'Learn how to talk about the existence or presence of something',
  'Grammar',
  '<b class="blue">There is</b> + singular noun<br>' +
  '<b class="blue">There is</b> + uncountable noun<br>' +
  '<b class="indigo">There are</b> + plural noun',
  [
    {sentence: 'There is a book on the table.', translation: 'Il y a un livre sur la table.'},
    {sentence: 'There are three cats in the garden.', translation: 'Il y a trois chats dans le jardin.'},
    {sentence: 'There is some milk in the fridge.', translation: 'Il y a du lait dans le frigo.'},
    {sentence: 'Is there a problem?', translation: 'Y a-t-il un problème ?'},
    {sentence: 'Are there any questions?', translation: 'Y a-t-il des questions ?'},
    {sentence: 'There aren\'t any apples left.', translation: 'Il ne reste plus de pommes.'}
  ],
  [
    'Use "There is" with singular nouns (There is a dog)',
    'Use "There is" with uncountable nouns (There is water)',
    'Use "There are" with plural nouns (There are many people)',
    'Questions: "Is there...?" or "Are there...?"',
    'Negative: "There isn\'t" or "There aren\'t"',
    'Common with: a/an, some, any, many, much, a lot of'
  ]
);



// Basic Questions - Questions
const basicQuestionsQuestions = [
  {
    question: '_____ is your favorite color?',
    options: ['What', 'Where', 'When', 'Who'],
    correct: 0,
    explanation: 'Use "What" to ask about things or preferences. "What is your favorite color?" asks about a thing.'
  },
  {
    question: '_____ do you go to school?',
    options: ['What', 'Where', 'When', 'How'],
    correct: 1,
    explanation: 'Use "Where" to ask about places or locations. "Where do you go to school?" asks about a place.'
  },
  {
    question: '_____ is your best friend?',
    options: ['What', 'Where', 'When', 'Who'],
    correct: 3,
    explanation: 'Use "Who" to ask about people or identity. "Who is your best friend?" asks about a person.'
  },
  {
    question: '_____ do you wake up in the morning?',
    options: ['What', 'Where', 'When', 'Who'],
    correct: 2,
    explanation: 'Use "When" to ask about time. "When do you wake up?" asks about what time something happens.'
  },
  {
    question: '_____ do you like English?',
    options: ['What', 'Where', 'Why', 'Who'],
    correct: 2,
    explanation: 'Use "Why" to ask about reasons. "Why do you like English?" asks for a reason or explanation.'
  },
  {
    question: '_____ do you spell your name?',
    options: ['What', 'Where', 'When', 'How'],
    correct: 3,
    explanation: 'Use "How" to ask about manner or method. "How do you spell your name?" asks about the way to do something.'
  },
  {
    question: '_____ are you from?',
    options: ['What', 'Where', 'When', 'Who'],
    correct: 1,
    explanation: 'Use "Where" to ask about places of origin. "Where are you from?" asks about your country or city.'
  },
  {
    question: '_____ is your phone number?',
    options: ['What', 'Where', 'When', 'Who'],
    correct: 0,
    explanation: 'Use "What" to ask about information or specific details. "What is your phone number?" asks for specific information.'
  },
  {
    question: '_____ are you so tired?',
    options: ['What', 'Where', 'Why', 'How'],
    correct: 2,
    explanation: 'Use "Why" to ask about reasons or causes. "Why are you so tired?" asks for the reason of being tired.'
  },
  {
    question: '_____ old are you?',
    options: ['What', 'Where', 'When', 'How'],
    correct: 3,
    explanation: 'Use "How" in the expression "How old" to ask about age. "How old are you?" asks about someone\'s age.'
  }
];

// There is / There are - Questions
const existOrNotQuestions = [
  {
    question: '_____ a computer in the office.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 0,
    explanation: 'Use "There is" with singular nouns. "Computer" is singular, so we use "There is a computer".'
  },
  {
    question: '_____ five apples in the basket.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 1,
    explanation: 'Use "There are" with plural nouns. "Five apples" is plural, so we use "There are five apples".'
  },
  {
    question: '_____ some water in the bottle.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 0,
    explanation: 'Use "There is" with uncountable nouns. "Water" is uncountable, so we use "There is some water".'
  },
  {
    question: '_____ many cars on the street.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 1,
    explanation: 'Use "There are" with plural nouns. "Many cars" is plural, so we use "There are many cars".'
  },
  {
    question: '_____ a park near your house?',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 2,
    explanation: 'For questions with singular nouns, use "Is there". "A park" is singular, so we ask "Is there a park?"'
  },
  {
    question: '_____ any cookies left?',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 3,
    explanation: 'For questions with plural nouns, use "Are there". "Cookies" is plural, so we ask "Are there any cookies?"'
  },
  {
    question: '_____ a lot of students in the classroom.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 1,
    explanation: 'Use "There are" with plural nouns. "A lot of students" is plural, so we use "There are".'
  },
  {
    question: '_____ any milk in the fridge?',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 2,
    explanation: 'For questions with uncountable nouns, use "Is there". "Milk" is uncountable, so we ask "Is there any milk?"'
  },
  {
    question: 'No, _____ any problems with the project.',
    options: ['there is', 'there are', 'there isn\'t', 'there aren\'t'],
    correct: 3,
    explanation: 'For negative with plural nouns, use "there aren\'t". "Problems" is plural, so we use "there aren\'t any problems".'
  },
  {
    question: '_____ a beautiful garden behind the house.',
    options: ['There is', 'There are', 'Is there', 'Are there'],
    correct: 0,
    explanation: 'Use "There is" with singular nouns. "A garden" is singular, so we use "There is a beautiful garden".'
  }
];

// ==================== PRESENT PERFECT QUESTIONS (Fixed) ====================
const presentPerfectQuestions = [
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
// lesson array
const lessonSystem = {
  'toBe': { lesson: toBe, questions: toBeQuestions },
  'simplePresent': { lesson: simplePresent, questions: simplePresentQuestions },
  'articles': { lesson: articles, questions: articlesQuestions },
  'plurals': { lesson: plurals, questions: pluralsQuestions },
  'presentPerfect': { lesson: presentPerfect, questions: presentPerfectQuestions },
  'basicQuestions': { lesson: basicQuestions, questions: basicQuestionsQuestions },
  'existOrNot': { lesson: existOrNot, questions: existOrNotQuestions }
};

// ==================== TO BE QUESTIONS ====================
const toBeQuestions = [
  {
    question: 'I _____ a student.',
    options: ['am', 'is', 'are', 'be'],
    correct: 0,
    explanation: 'Use "am" only with "I". The correct answer is "I am a student".'
  },
  {
    question: 'She _____ my sister.',
    options: ['am', 'is', 'are', 'be'],
    correct: 1,
    explanation: 'Use "is" with he, she, it, and singular nouns. "She is my sister" is correct.'
  },
  {
    question: 'They _____ happy today.',
    options: ['am', 'is', 'are', 'be'],
    correct: 2,
    explanation: 'Use "are" with they, we, you, and plural nouns. "They are happy" is correct.'
  },
  {
    question: '_____ you a teacher?',
    options: ['Am', 'Is', 'Are', 'Be'],
    correct: 2,
    explanation: 'For questions, put the verb before the subject. "Are you a teacher?" is the correct question form.'
  },
  {
    question: 'We _____ from France.',
    options: ['am', 'is', 'are', 'be'],
    correct: 2,
    explanation: 'Use "are" with "we". The correct answer is "We are from France".'
  },
  {
    question: 'It _____ cold today.',
    options: ['am', 'is', 'are', 'be'],
    correct: 1,
    explanation: 'Use "is" with "it" and singular subjects. "It is cold today" is correct.'
  },
  {
    question: 'I _____ not tired.',
    options: ['am', 'is', 'are', 'be'],
    correct: 0,
    explanation: 'For negative sentences with "I", use "am not". "I am not tired" is correct.'
  },
  {
    question: 'He _____ a doctor.',
    options: ['am', 'is', 'are', 'be'],
    correct: 1,
    explanation: 'Use "is" with "he". The correct answer is "He is a doctor".'
  },
  {
    question: '_____ they at home?',
    options: ['Am', 'Is', 'Are', 'Be'],
    correct: 2,
    explanation: 'For questions with "they", use "Are they". "Are they at home?" is the correct question.'
  },
  {
    question: 'You _____ very kind.',
    options: ['am', 'is', 'are', 'be'],
    correct: 2,
    explanation: 'Use "are" with "you". The correct answer is "You are very kind".'
  }
];

// ==================== SIMPLE PRESENT QUESTIONS ====================
const simplePresentQuestions = [
  {
    question: 'She _____ to school every day.',
    options: ['go', 'goes', 'going', 'went'],
    correct: 1,
    explanation: 'Add -es to verbs with he/she/it in simple present. "She goes to school" is correct.'
  },
  {
    question: 'I _____ English.',
    options: ['speak', 'speaks', 'speaking', 'spoke'],
    correct: 0,
    explanation: 'Use the base form of the verb with I, you, we, they. "I speak English" is correct.'
  },
  {
    question: 'They _____ football on Saturdays.',
    options: ['play', 'plays', 'playing', 'played'],
    correct: 0,
    explanation: 'Use the base form with plural subjects (they). "They play football" is correct.'
  },
  {
    question: 'He _____ TV every evening.',
    options: ['watch', 'watchs', 'watches', 'watching'],
    correct: 2,
    explanation: 'Verbs ending in -ch add -es with he/she/it. "He watches TV" is correct.'
  },
  {
    question: 'We _____ in New York.',
    options: ['live', 'lives', 'living', 'lived'],
    correct: 0,
    explanation: 'Use the base form with "we". "We live in New York" is correct.'
  },
  {
    question: 'She _____ her homework after dinner.',
    options: ['do', 'does', 'doing', 'did'],
    correct: 1,
    explanation: 'Use "does" (not "dos") with he/she/it. "She does her homework" is correct.'
  },
  {
    question: 'My brother _____ hard every day.',
    options: ['study', 'studys', 'studies', 'studying'],
    correct: 2,
    explanation: 'Verbs ending in consonant + y change to -ies with he/she/it. "Studies" is correct.'
  },
  {
    question: 'Do you _____ coffee?',
    options: ['like', 'likes', 'liking', 'liked'],
    correct: 0,
    explanation: 'After "do/does", always use the base form of the verb. "Do you like" is correct.'
  },
  {
    question: 'The sun _____ in the east.',
    options: ['rise', 'rises', 'rising', 'rose'],
    correct: 1,
    explanation: 'Use -s/-es with singular subjects (the sun = it). "The sun rises" is correct.'
  },
  {
    question: 'My parents _____ in a hospital.',
    options: ['work', 'works', 'working', 'worked'],
    correct: 0,
    explanation: 'Use the base form with plural subjects (parents = they). "My parents work" is correct.'
  }
];

// ==================== ARTICLES QUESTIONS ====================
const articlesQuestions = [
  {
    question: 'I have _____ cat.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 0,
    explanation: 'Use "a" before consonant sounds. "Cat" starts with a consonant sound, so "a cat" is correct.'
  },
  {
    question: 'She is _____ engineer.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: 'Use "an" before vowel sounds. "Engineer" starts with a vowel sound, so "an engineer" is correct.'
  },
  {
    question: '_____ car is red.',
    options: ['A', 'An', 'The', 'No article'],
    correct: 2,
    explanation: 'Use "the" when talking about a specific car that is already known. "The car is red" is correct.'
  },
  {
    question: 'I need _____ umbrella.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: 'Use "an" before vowel sounds. "Umbrella" starts with a vowel sound, so "an umbrella" is correct.'
  },
  {
    question: '_____ sun is very hot today.',
    options: ['A', 'An', 'The', 'No article'],
    correct: 2,
    explanation: 'Use "the" with unique things in nature. There is only one sun, so "the sun" is correct.'
  },
  {
    question: 'He is _____ honest man.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: 'Use "an" before vowel sounds. "Honest" starts with a vowel sound (h is silent), so "an honest man" is correct.'
  },
  {
    question: 'I saw _____ elephant at the zoo.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 1,
    explanation: 'Use "an" before vowel sounds. "Elephant" starts with a vowel sound, so "an elephant" is correct.'
  },
  {
    question: 'She goes to _____ school by bus.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 3,
    explanation: 'No article is needed before "school" when talking about the general activity of studying. "Goes to school" is correct.'
  },
  {
    question: 'This is _____ university.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 0,
    explanation: 'Use "a" before consonant sounds. "University" starts with a "yu" sound (consonant), so "a university" is correct.'
  },
  {
    question: 'I listened to _____ music yesterday.',
    options: ['a', 'an', 'the', 'no article'],
    correct: 3,
    explanation: 'No article is needed before uncountable nouns used in a general sense. "Listened to music" is correct.'
  }
];

// ==================== PLURALS QUESTIONS ====================
const pluralsQuestions = [
  {
    question: 'I have two _____.',
    options: ['book', 'books', 'bookes', 'book\'s'],
    correct: 1,
    explanation: 'Regular plural: add -s to most nouns. "Two books" is correct.'
  },
  {
    question: 'There are three _____ on the table.',
    options: ['box', 'boxs', 'boxes', 'box\'s'],
    correct: 2,
    explanation: 'Words ending in -x add -es to form plural. "Three boxes" is correct.'
  },
  {
    question: 'The _____ are playing in the park.',
    options: ['child', 'childs', 'children', 'childrens'],
    correct: 2,
    explanation: 'Irregular plural: "child" becomes "children", not "childs". "The children are playing" is correct.'
  },
  {
    question: 'I saw many _____ in the field.',
    options: ['sheep', 'sheeps', 'sheepes', 'sheep\'s'],
    correct: 0,
    explanation: 'Some words don\'t change in plural form. "Sheep" is both singular and plural. "Many sheep" is correct.'
  },
  {
    question: 'She has two _____.',
    options: ['babys', 'babies', 'baby', 'babyes'],
    correct: 1,
    explanation: 'Words ending in consonant + y change to -ies. "Baby" becomes "babies". "Two babies" is correct.'
  },
  {
    question: 'Those _____ are doctors.',
    options: ['woman', 'womans', 'women', 'womens'],
    correct: 2,
    explanation: 'Irregular plural: "woman" becomes "women". "Those women are doctors" is correct.'
  },
  {
    question: 'I need new _____.',
    options: ['shoe', 'shoes', 'shoos', 'shoe\'s'],
    correct: 1,
    explanation: 'Regular plural: add -s. "New shoes" is correct.'
  },
  {
    question: 'There are five _____ in the basket.',
    options: ['tomato', 'tomatos', 'tomatoes', 'tomatoe'],
    correct: 2,
    explanation: 'Words ending in -o add -es to form plural. "Five tomatoes" is correct.'
  },
  {
    question: 'The _____ are swimming in the pond.',
    options: ['fish', 'fishs', 'fishes', 'fish\'s'],
    correct: 0,
    explanation: 'Some words don\'t change in plural. "Fish" can be both singular and plural. "The fish are swimming" is correct.'
  },
  {
    question: 'I saw two _____ running.',
    options: ['mouse', 'mouses', 'mice', 'mices'],
    correct: 2,
    explanation: 'Irregular plural: "mouse" becomes "mice". "Two mice" is correct.'
  }
];
  
 // ÉTAT
  let currentQuestion = 0;
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let answered = false;
  let currentLesson = localStorage.getItem('lessonNav');
  const questions = lessonSystem[currentLesson].questions;
  // INITIALISATION
  document.addEventListener('DOMContentLoaded', () => {
    // presentPerfect.render();
    // toBe.render();
    // simplePresent.render();
    // articles.render();
    // plurals.render();
    if (!currentLesson || !lessonSystem[currentLesson]) {
      alert("Aucune leçon sélectionnée. Retour à l'accueil.");
      window.location.href = 'accueil.php';
      return; 
    }
    lessonSystem[currentLesson].lesson.render();
    loadQuestion();
    updateStats();
  });

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

  let timerInterval = null;
  let totalSeconds = 0;
  function startTimer() {
    if (timerInterval) {
      console.warn('Timer is already running.');
      return;
    };
    
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

    const q = lessonSystem[localStorage.getItem('lessonNav')].questions[currentQuestion];
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
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();

    } else {

      stopTimer();

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      alert(`Quiz terminé! Score final: ${score} points, votre temps est de ${minutes} minutes et ${seconds} secondes.`);
      currentQuestion = 0;
      score = 0;
      correct = 0;
      incorrect = 0;

      resetTimer();
      loadQuestion();
      updateStats();

      localStorage.removeItem("lessonNav");

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