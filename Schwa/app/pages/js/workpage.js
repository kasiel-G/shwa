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
  '<b>Subject</b> + <b class="blue">verb (base form)</b><br><br>' +
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
  'A1',
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
  'A1',
  'Plural Forms: Regular and Irregular',
  'Learn how to form regular and irregular plurals in English',
  'Grammar',
  '<b>Regular:</b> noun + <b class="blue">-s/-es</b><br><br>' +
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

// A2 - Past Simple Tense
const pastSimple = new Lesson(
  'A2',
  'Past Simple Tense',
  'Learn how to describe past actions and experiences that are completed',
  'Grammar',
  '<b>Subject</b> + <b class="blue">verb + ed</b> (regular)<br><br>' +
  '<b>Subject</b> + <b class="indigo">irregular past form</b><br><br>' +
  '<b>Negative:</b> did not / didn\'t + base verb<br>' +
  '<b>Questions:</b> Did + subject + base verb?',
  [
    {sentence: 'I visited my grandmother yesterday.', translation: 'J\'ai rendu visite à ma grand-mère hier.'},
    {sentence: 'She studied English last year.', translation: 'Elle a étudié l\'anglais l\'année dernière.'},
    {sentence: 'They went to Paris in 2020.', translation: 'Ils sont allés à Paris en 2020.'},
    {sentence: 'He didn\'t watch TV last night.', translation: 'Il n\'a pas regardé la télé hier soir.'},
    {sentence: 'Did you see the movie?', translation: 'As-tu vu le film ?'}
  ],
  [
    'Regular verbs: add -ed (walk → walked, play → played)',
    'Verbs ending in -e: add -d only (love → loved)',
    'Verbs ending in consonant + y: change to -ied (study → studied)',
    'Irregular verbs have special forms (go → went, see → saw, eat → ate)',
    'Use for completed actions at a specific time in the past',
    'Time expressions: yesterday, last week, ago, in 2020'
  ]
);

// A2 - Present Continuous
const presentContinuous = new Lesson(
  'A2',
  'Present Continuous Tense',
  'Learn how to express actions happening right now or around now',
  'Grammar',
  '<b>Subject</b> + <b class="blue">am/is/are</b> + <b class="indigo">verb + ing</b><br><br>' +
  '<b>I</b> am verb-ing<br>' +
  '<b>He/She/It</b> is verb-ing<br>' +
  '<b>You/We/They</b> are verb-ing',
  [
    {sentence: 'I am learning English now.', translation: 'J\'apprends l\'anglais maintenant.'},
    {sentence: 'She is reading a book.', translation: 'Elle lit un livre.'},
    {sentence: 'They are playing football.', translation: 'Ils jouent au football.'},
    {sentence: 'We are not watching TV.', translation: 'Nous ne regardons pas la télé.'},
    {sentence: 'Are you listening to me?', translation: 'M\'écoutes-tu ?'}
  ],
  [
    'Add -ing to most verbs (play → playing, work → working)',
    'Verbs ending in -e: remove -e and add -ing (make → making)',
    'Short verbs with one vowel + consonant: double the consonant (run → running, sit → sitting)',
    'Use for actions happening right now: now, at the moment, currently',
    'Also used for temporary situations or future plans',
    'Negative: am/is/are + not + verb-ing'
  ]
);

// A2 - Future Simple (will)
const futureSimple = new Lesson(
  'A2',
  'Future Simple with "will"',
  'Learn how to talk about future plans, predictions, and spontaneous decisions',
  'Grammar',
  '<b>Subject</b> + <b class="blue">will</b> + <b class="indigo">base verb</b><br><br>' +
  '<b>Negative:</b> will not / won\'t + base verb<br>' +
  '<b>Questions:</b> Will + subject + base verb?',
  [
    {sentence: 'I will call you tomorrow.', translation: 'Je t\'appellerai demain.'},
    {sentence: 'She will be a doctor.', translation: 'Elle sera médecin.'},
    {sentence: 'They will visit us next week.', translation: 'Ils nous rendront visite la semaine prochaine.'},
    {sentence: 'It won\'t rain today.', translation: 'Il ne pleuvra pas aujourd\'hui.'},
    {sentence: 'Will you help me?', translation: 'M\'aideras-tu ?'}
  ],
  [
    'Use "will" for predictions about the future',
    'Use "will" for spontaneous decisions (I\'ll answer the phone)',
    'Use "will" for promises and offers (I\'ll help you)',
    'Contraction: will = \'ll (I\'ll, you\'ll, he\'ll)',
    'Negative contraction: will not = won\'t',
    'Time expressions: tomorrow, next week, in the future, soon'
  ]
);

// A2 - Comparatives & Superlatives
const comparatives = new Lesson(
  'A2',
  'Comparatives & Superlatives',
  'Learn how to compare things, people, and ideas effectively',
  'Grammar',
  '<b>Comparative:</b> adjective + <b class="blue">-er</b> + than<br>' +
  '<b>or</b> <b class="blue">more</b> + adjective + than<br><br>' +
  '<b>Superlative:</b> the + adjective + <b class="indigo">-est</b><br>' +
  '<b>or</b> the <b class="indigo">most</b> + adjective',
  [
    {sentence: 'Paris is bigger than Lyon.', translation: 'Paris est plus grand que Lyon.'},
    {sentence: 'This book is more interesting than that one.', translation: 'Ce livre est plus intéressant que celui-là.'},
    {sentence: 'She is the tallest student in the class.', translation: 'Elle est l\'étudiante la plus grande de la classe.'},
    {sentence: 'This is the most beautiful place.', translation: 'C\'est l\'endroit le plus beau.'},
    {sentence: 'He is better than me at tennis.', translation: 'Il est meilleur que moi au tennis.'}
  ],
  [
    'Short adjectives (1 syllable): add -er/-est (tall → taller → tallest)',
    'Adjectives ending in -e: add -r/-st (nice → nicer → nicest)',
    'Adjectives ending in consonant + y: change to -ier/-iest (happy → happier → happiest)',
    'Long adjectives (2+ syllables): use more/most (beautiful → more beautiful → most beautiful)',
    'Irregular forms: good → better → best, bad → worse → worst',
    'Use "than" after comparatives, "the" before superlatives'
  ]
);

// A2 - Prepositions of Time
const prepositionsTime = new Lesson(
  'A2',
  'Prepositions of Time: In, On, At',
  'Learn when to use in, on, and at for times, days, and dates',
  'Grammar',
  '<b class="blue">In</b> = months, years, seasons, parts of day<br>' +
  '<b class="blue">On</b> = days, dates<br>' +
  '<b class="indigo">At</b> = specific times, moments',
  [
    {sentence: 'I was born in 1995.', translation: 'Je suis né en 1995.'},
    {sentence: 'The meeting is on Monday.', translation: 'La réunion est lundi.'},
    {sentence: 'School starts at 8 o\'clock.', translation: 'L\'école commence à 8 heures.'},
    {sentence: 'We go swimming in summer.', translation: 'Nous nageons en été.'},
    {sentence: 'My birthday is on June 15th.', translation: 'Mon anniversaire est le 15 juin.'},
    {sentence: 'I drink coffee at breakfast.', translation: 'Je bois du café au petit-déjeuner.'}
  ],
  [
    'Use "in" for: months (in May), years (in 2023), seasons (in winter)',
    'Use "in" for parts of the day: in the morning, in the afternoon, in the evening',
    'Use "on" for: days (on Monday), dates (on May 5th)',
    'Use "at" for: specific times (at 9:00), at night, at noon, at midnight',
    'Use "at" for: at the weekend (British), at Christmas, at Easter',
    'Exception: "on" + day + morning/afternoon/evening (on Monday morning)'
  ]
);

// A2 - Possessive Adjectives
const possessiveAdjectives = new Lesson(
  'A2',
  'Possessive Adjectives',
  'Learn how to show ownership using my, your, his, her, its, our, their',
  'Grammar',
  '<b>I</b> → <b class="blue">my</b><br>' +
  '<b>You</b> → <b class="blue">your</b><br>' +
  '<b>He</b> → <b class="indigo">his</b><br>' +
  '<b>She</b> → <b class="indigo">her</b><br>' +
  '<b>It</b> → <b class="indigo">its</b><br>' +
  '<b>We</b> → <b class="blue">our</b><br>' +
  '<b>They</b> → <b class="blue">their</b>',
  [
    {sentence: 'This is my book.', translation: 'C\'est mon livre.'},
    {sentence: 'Is this your pen?', translation: 'Est-ce ton stylo ?'},
    {sentence: 'His name is John.', translation: 'Son nom est John.'},
    {sentence: 'Her car is red.', translation: 'Sa voiture est rouge.'},
    {sentence: 'The dog wagged its tail.', translation: 'Le chien a remué sa queue.'},
    {sentence: 'Our house is big.', translation: 'Notre maison est grande.'},
    {sentence: 'Their children are at school.', translation: 'Leurs enfants sont à l\'école.'}
  ],
  [
    'Possessive adjectives always come before a noun',
    'They don\'t change for singular or plural nouns (my book, my books)',
    'Use "his" for males, "her" for females, "its" for things/animals',
    'Don\'t confuse: its (possessive) vs it\'s (it is)',
    'Don\'t confuse: your (possessive) vs you\'re (you are)',
    'Don\'t confuse: their (possessive) vs they\'re (they are) vs there (place)'
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
  
const pastSimpleQuestions = [
  {
    question: 'I _____ to the cinema yesterday.',
    options: ['go', 'went', 'goes', 'going'],
    correct: 1,
    explanation: 'Use past simple "went" for completed actions in the past. "Yesterday" indicates a specific past time.'
  },
  {
    question: 'She _____ her homework last night.',
    options: ['finish', 'finishes', 'finished', 'finishing'],
    correct: 2,
    explanation: 'Regular past simple: add -ed to the base verb. "Finished" is correct for "last night".'
  },
  {
    question: 'They _____ in Paris in 2020.',
    options: ['live', 'lived', 'lives', 'living'],
    correct: 1,
    explanation: 'Use past simple "lived" for a completed period in the past. "In 2020" shows specific past time.'
  },
  {
    question: '_____ you see the movie last week?',
    options: ['Do', 'Does', 'Did', 'Done'],
    correct: 2,
    explanation: 'Questions in past simple use "Did" + subject + base verb. "Did you see" is correct.'
  },
  {
    question: 'He _____ not come to the party.',
    options: ['do', 'does', 'did', 'done'],
    correct: 2,
    explanation: 'Negative past simple: did not (didn\'t) + base verb. "He did not come" is correct.'
  },
  {
    question: 'We _____ a lot of fun at the beach.',
    options: ['have', 'has', 'had', 'having'],
    correct: 2,
    explanation: 'Irregular past form: "have" becomes "had" in past simple. "We had fun" is correct.'
  },
  {
    question: 'I _____ English when I was young.',
    options: ['study', 'studys', 'studied', 'studies'],
    correct: 2,
    explanation: 'Verbs ending in consonant + y change to -ied. "Study" becomes "studied".'
  },
  {
    question: 'She _____ her keys this morning.',
    options: ['lose', 'losed', 'lost', 'losing'],
    correct: 2,
    explanation: 'Irregular past form: "lose" becomes "lost" (not "losed"). "She lost her keys" is correct.'
  },
  {
    question: '_____ they play tennis yesterday?',
    options: ['Do', 'Does', 'Did', 'Done'],
    correct: 2,
    explanation: 'Questions in past simple: Did + subject + base verb. "Did they play" is correct.'
  },
  {
    question: 'My brother _____ his bike last year.',
    options: ['buy', 'buys', 'bought', 'buying'],
    correct: 2,
    explanation: 'Irregular past form: "buy" becomes "bought". "He bought his bike" is correct.'
  }
];

// ==================== PRESENT CONTINUOUS QUESTIONS ====================
const presentContinuousQuestions = [
  {
    question: 'I _____ learning English now.',
    options: ['am', 'is', 'are', 'be'],
    correct: 0,
    explanation: 'Present continuous: I + am + verb-ing. "I am learning" is correct.'
  },
  {
    question: 'She _____ reading a book at the moment.',
    options: ['am', 'is', 'are', 'be'],
    correct: 1,
    explanation: 'Present continuous: She + is + verb-ing. "She is reading" is correct.'
  },
  {
    question: 'They _____ playing football right now.',
    options: ['am', 'is', 'are', 'be'],
    correct: 2,
    explanation: 'Present continuous: They + are + verb-ing. "They are playing" is correct.'
  },
  {
    question: 'He is _____ to music.',
    options: ['listen', 'listens', 'listening', 'listened'],
    correct: 2,
    explanation: 'Present continuous requires verb-ing form. "He is listening" is correct.'
  },
  {
    question: 'We _____ not watching TV now.',
    options: ['am', 'is', 'are', 'be'],
    correct: 2,
    explanation: 'Negative present continuous: We + are + not + verb-ing. "We are not watching" is correct.'
  },
  {
    question: '_____ you studying for the exam?',
    options: ['Am', 'Is', 'Are', 'Be'],
    correct: 2,
    explanation: 'Questions: Am/Is/Are + subject + verb-ing. "Are you studying" is correct.'
  },
  {
    question: 'Look! It _____ raining.',
    options: ['am', 'is', 'are', 'be'],
    correct: 1,
    explanation: 'Present continuous: It + is + verb-ing. "It is raining" is correct for happening now.'
  },
  {
    question: 'The children _____ in the garden.',
    options: ['play', 'plays', 'playing', 'are playing'],
    correct: 3,
    explanation: 'Present continuous: subject + are + verb-ing. "The children are playing" is correct.'
  },
  {
    question: 'She is _____ a cake.',
    options: ['make', 'makes', 'makeing', 'making'],
    correct: 3,
    explanation: 'Verbs ending in -e: drop -e and add -ing. "Make" becomes "making" (not "makeing").'
  },
  {
    question: 'I _____ running in the park currently.',
    options: ['am', 'is', 'are', 'be'],
    correct: 0,
    explanation: 'Present continuous: I + am + verb-ing. "I am running" is correct for actions happening now.'
  }
];

// ==================== FUTURE SIMPLE QUESTIONS ====================
const futureSimpleQuestions = [
  {
    question: 'I _____ call you tomorrow.',
    options: ['will', 'would', 'shall', 'can'],
    correct: 0,
    explanation: 'Use "will" + base verb for future actions. "I will call" is correct.'
  },
  {
    question: 'She _____ be a doctor someday.',
    options: ['will', 'would', 'is', 'going'],
    correct: 0,
    explanation: 'Use "will" for future predictions. "She will be a doctor" is correct.'
  },
  {
    question: 'It _____ rain tomorrow.',
    options: ['will not', 'not will', 'no will', 'will no'],
    correct: 0,
    explanation: 'Negative future: will not (won\'t) + base verb. "It will not rain" is correct.'
  },
  {
    question: '_____ you help me with this?',
    options: ['Will', 'Do', 'Are', 'Can'],
    correct: 0,
    explanation: 'Questions with "will": Will + subject + base verb. "Will you help" is correct for offers.'
  },
  {
    question: 'They _____ visit us next week.',
    options: ['will', 'are', 'going', 'do'],
    correct: 0,
    explanation: 'Use "will" for future plans. "They will visit" is correct with "next week".'
  },
  {
    question: 'We _____ go to the beach this summer.',
    options: ['will', 'are', 'do', 'can'],
    correct: 0,
    explanation: 'Use "will" + base verb for future intentions. "We will go" is correct.'
  },
  {
    question: 'He _____ not come to the party.',
    options: ['will', 'is', 'does', 'do'],
    correct: 0,
    explanation: 'Negative future: will not (won\'t). "He will not come" is correct.'
  },
  {
    question: 'I think it _____ be sunny tomorrow.',
    options: ['will', 'is', 'going', 'can'],
    correct: 0,
    explanation: 'Use "will" for predictions. "It will be sunny" is correct after "I think".'
  },
  {
    question: '_____ they arrive on time?',
    options: ['Will', 'Do', 'Are', 'Is'],
    correct: 0,
    explanation: 'Future questions: Will + subject + base verb. "Will they arrive" is correct.'
  },
  {
    question: 'Don\'t worry, I _____ help you.',
    options: ['will', 'am', 'do', 'can'],
    correct: 0,
    explanation: 'Use "will" for spontaneous decisions and promises. "I will help" shows willingness.'
  }
];

// ==================== COMPARATIVES & SUPERLATIVES QUESTIONS ====================
const comparativesQuestions = [
  {
    question: 'Paris is _____ than Lyon.',
    options: ['big', 'bigger', 'biggest', 'more big'],
    correct: 1,
    explanation: 'Short adjectives add -er for comparatives. "Big" becomes "bigger" + than.'
  },
  {
    question: 'This book is _____ interesting than that one.',
    options: ['more', 'most', 'very', 'much'],
    correct: 0,
    explanation: 'Long adjectives use "more" + adjective for comparatives. "More interesting than" is correct.'
  },
  {
    question: 'She is the _____ student in the class.',
    options: ['tall', 'taller', 'tallest', 'most tall'],
    correct: 2,
    explanation: 'Short adjectives add -est for superlatives. "The tallest" is correct.'
  },
  {
    question: 'This is the _____ beautiful place I\'ve seen.',
    options: ['more', 'most', 'very', 'much'],
    correct: 1,
    explanation: 'Long adjectives use "the most" + adjective for superlatives. "The most beautiful" is correct.'
  },
  {
    question: 'My car is _____ than yours.',
    options: ['fast', 'faster', 'fastest', 'more fast'],
    correct: 1,
    explanation: 'Short adjectives add -er for comparatives. "Faster than" is correct.'
  },
  {
    question: 'He is _____ at tennis than me.',
    options: ['good', 'gooder', 'better', 'best'],
    correct: 2,
    explanation: 'Irregular comparative: "good" becomes "better" (not "gooder"). "Better than" is correct.'
  },
  {
    question: 'Today is the _____ day of the year.',
    options: ['hot', 'hoter', 'hottest', 'most hot'],
    correct: 2,
    explanation: 'Short adjectives ending in consonant double it and add -est. "Hottest" is correct.'
  },
  {
    question: 'This exercise is _____ difficult than the last one.',
    options: ['more', 'most', 'very', 'much'],
    correct: 0,
    explanation: 'Long adjectives use "more" for comparatives. "More difficult than" is correct.'
  },
  {
    question: 'She is the _____ person I know.',
    options: ['happy', 'happyer', 'happier', 'happiest'],
    correct: 3,
    explanation: 'Adjectives ending in -y change to -iest for superlatives. "The happiest" is correct.'
  },
  {
    question: 'This is the _____ movie I\'ve ever seen.',
    options: ['bad', 'badder', 'worse', 'worst'],
    correct: 3,
    explanation: 'Irregular superlative: "bad" becomes "worst" (not "baddest"). "The worst" is correct.'
  }
];

// ==================== PREPOSITIONS OF TIME QUESTIONS ====================
const prepositionsTimeQuestions = [
  {
    question: 'I was born _____ 1995.',
    options: ['in', 'on', 'at', 'by'],
    correct: 0,
    explanation: 'Use "in" with years. "In 1995" is correct for years.'
  },
  {
    question: 'The meeting is _____ Monday.',
    options: ['in', 'on', 'at', 'by'],
    correct: 1,
    explanation: 'Use "on" with days of the week. "On Monday" is correct.'
  },
  {
    question: 'School starts _____ 8 o\'clock.',
    options: ['in', 'on', 'at', 'by'],
    correct: 2,
    explanation: 'Use "at" with specific times. "At 8 o\'clock" is correct.'
  },
  {
    question: 'We go swimming _____ summer.',
    options: ['in', 'on', 'at', 'by'],
    correct: 0,
    explanation: 'Use "in" with seasons. "In summer" is correct.'
  },
  {
    question: 'My birthday is _____ June 15th.',
    options: ['in', 'on', 'at', 'by'],
    correct: 1,
    explanation: 'Use "on" with specific dates. "On June 15th" is correct.'
  },
  {
    question: 'I drink coffee _____ the morning.',
    options: ['in', 'on', 'at', 'by'],
    correct: 0,
    explanation: 'Use "in" with parts of the day (except night). "In the morning" is correct.'
  },
  {
    question: 'We always watch TV _____ night.',
    options: ['in', 'on', 'at', 'by'],
    correct: 2,
    explanation: 'Exception: use "at" with "night". "At night" is correct (not "in the night").'
  },
  {
    question: 'The concert is _____ Saturday evening.',
    options: ['in', 'on', 'at', 'by'],
    correct: 1,
    explanation: 'Use "on" with day + part of day. "On Saturday evening" is correct.'
  },
  {
    question: 'I\'ll see you _____ Christmas.',
    options: ['in', 'on', 'at', 'by'],
    correct: 2,
    explanation: 'Use "at" with holidays like Christmas, Easter. "At Christmas" is correct.'
  },
  {
    question: 'She was born _____ March.',
    options: ['in', 'on', 'at', 'by'],
    correct: 0,
    explanation: 'Use "in" with months. "In March" is correct.'
  }
];

// ==================== POSSESSIVE ADJECTIVES QUESTIONS ====================
const possessiveAdjectivesQuestions = [
  {
    question: 'This is _____ book.',
    options: ['I', 'my', 'me', 'mine'],
    correct: 1,
    explanation: 'Use possessive adjective "my" before a noun. "My book" is correct.'
  },
  {
    question: 'Is this _____ pen?',
    options: ['you', 'your', 'yours', 'you\'re'],
    correct: 1,
    explanation: 'Use possessive adjective "your" before a noun. "Your pen" is correct.'
  },
  {
    question: '_____ name is John.',
    options: ['He', 'Him', 'His', 'He\'s'],
    correct: 2,
    explanation: 'Use possessive adjective "his" for males. "His name" is correct.'
  },
  {
    question: '_____ car is red.',
    options: ['She', 'Her', 'Hers', 'She\'s'],
    correct: 1,
    explanation: 'Use possessive adjective "her" for females before a noun. "Her car" is correct.'
  },
  {
    question: 'The dog wagged _____ tail.',
    options: ['it', 'its', 'it\'s', 'his'],
    correct: 1,
    explanation: 'Use possessive adjective "its" (no apostrophe) for things/animals. "Its tail" is correct.'
  },
  {
    question: '_____ house is very big.',
    options: ['We', 'Us', 'Our', 'Ours'],
    correct: 2,
    explanation: 'Use possessive adjective "our" with "we". "Our house" is correct.'
  },
  {
    question: '_____ children are at school.',
    options: ['They', 'Them', 'Their', 'They\'re'],
    correct: 2,
    explanation: 'Use possessive adjective "their" before a noun. "Their children" is correct (not "they\'re").'
  },
  {
    question: 'I love _____ family.',
    options: ['I', 'my', 'me', 'mine'],
    correct: 1,
    explanation: 'Use possessive adjective "my" before a noun. "My family" is correct.'
  },
  {
    question: '_____ teacher is very kind.',
    options: ['We', 'Us', 'Our', 'Ours'],
    correct: 2,
    explanation: 'Use possessive adjective "our" before a noun. "Our teacher" is correct.'
  },
  {
    question: 'Where are _____ keys?',
    options: ['you', 'your', 'yours', 'you\'re'],
    correct: 1,
    explanation: 'Use possessive adjective "your" before a noun. "Your keys" is correct (not "you\'re" = you are).'
  }
];
// lesson array
const Grammar = {
  // A1 Lessons
  'toBe': { lesson: toBe, questions: toBeQuestions },
  'simplePresent': { lesson: simplePresent, questions: simplePresentQuestions },
  'articles': { lesson: articles, questions: articlesQuestions },
  'plurals': { lesson: plurals, questions: pluralsQuestions },
  'basicQuestions': { lesson: basicQuestions, questions: basicQuestionsQuestions },
  'existOrNot': { lesson: existOrNot, questions: existOrNotQuestions },
  
  // A2 Lessons
  'pastSimple': { lesson: pastSimple, questions: pastSimpleQuestions },
  'presentContinuous': { lesson: presentContinuous, questions: presentContinuousQuestions },
  'futureSimple': { lesson: futureSimple, questions: futureSimpleQuestions },
  'comparatives': { lesson: comparatives, questions: comparativesQuestions },
  'prepositionsTime': { lesson: prepositionsTime, questions: prepositionsTimeQuestions },
  'possessiveAdjectives': { lesson: possessiveAdjectives, questions: possessiveAdjectivesQuestions },
  
  // B1 Lessons
  'presentPerfect': { lesson: presentPerfect, questions: presentPerfectQuestions }
};
 // ÉTAT
  let currentQuestion = 0;
  let score = 0;
  let correct = 0;
  let incorrect = 0;
  let answered = false;
  let currentLesson = localStorage.getItem('lessonNav');
  const questions = Grammar[currentLesson].questions;
  // INITIALISATION
  document.addEventListener('DOMContentLoaded', () => {
    // presentPerfect.render();
    // toBe.render();
    // simplePresent.render();
    // articles.render();
    // plurals.render();
    if (!currentLesson || !Grammar[currentLesson]) {
      alert("Aucune leçon sélectionnée. Retour à l'accueil.");
      window.location.href = 'accueil.php';
      return; 
    }
    Grammar[currentLesson].lesson.render();
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

    const q = Grammar[localStorage.getItem('lessonNav')].questions[currentQuestion];
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
      let test = '';
      
      if (score > 65) {
        test = 'valide';
      } else {
        test = 'non valide';
      }

      alert(`Quiz terminé! Score final: ${score} points, votre temps est de ${minutes} minutes et ${seconds} secondes.`);
      
      // Préparer les données
      const dataToSend = {
          title: currentLesson,
          category: "Grammar",
          level: Grammar[currentLesson].lesson.level,
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
      
      // Réinitialiser
      localStorage.removeItem("lessonNav");
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