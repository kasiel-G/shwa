// Gestion des onglets
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-content`).classList.add('active');
}

// Audio pour les exemples
function playAudio(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

// Gestion des exercices
let currentQuestion = 0;
let score = 0;
let answered = false;

function selectAnswer(index, correctIndex) {
    if (answered) return;
    
    answered = true;
    const options = document.querySelectorAll('.option-btn');
    
    if (index === correctIndex) {
        options[index].classList.add('correct');
        score += 10;
        updateScore();
    } else {
        options[index].classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }
    
    // Désactiver tous les boutons
    options.forEach(btn => btn.disabled = true);
    
    // Afficher l'explication
    document.querySelector('.explanation-box').style.display = 'block';
    
    // Afficher le bouton suivant
    document.querySelector('.next-btn').style.display = 'flex';
}

function nextQuestion() {
    currentQuestion++;
    answered = false;
    
    // Réinitialiser l'interface
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
    
    document.querySelector('.explanation-box').style.display = 'none';
    document.querySelector('.next-btn').style.display = 'none';
    
    // Mettre à jour la progression
    updateProgress();
    
    // Charger la question suivante
    loadQuestion(currentQuestion);
}

function updateScore() {
    document.querySelector('.score-value').textContent = score;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('.question-number').textContent = currentQuestion + 1;
}