class lesson {
    constructor(level,title,description,category,Structure,Examples,notes) {
        this.level = level;
        this.title = title;
        this.category=category;
        this.description=description;
        this.Structure=Structure;
        this.Examples=Examples;
        this.notes=notes;
}
    cree() {
        const section = document.createElement("section");
        const divHeader = document.createElement("div");
        const badge = document.createElement("div");
        const title = document.createElement("h2");
        const description = document.createElement("p");
        section.id = "lesson";
        section.className = "lesson-container";
        divHeader.className = "lesson-header";
        badge.className = "lesson-badge";
        title.className = "lesson-title";
        description.className = "lesson-description";
        badge.textContent = this.level + this.category;
        title.textContent = this.title;

    }
}



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