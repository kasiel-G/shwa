const lessons = document.querySelectorAll('.lesson-card');
const levelCounts = {
  'A1': 0,
  'A2': 0,
  'B1': 0,
  'B2': 0,
  'C1': 0
};

lessons.forEach(card => {
  const level = card.dataset.level;
  if (levelCounts.hasOwnProperty(level)) {
    levelCounts[level]++;
  }
});


document.querySelector('[data-level="all"]').dataset.count = lessons.length;
document.querySelector('[data-level="A1"]').dataset.count = levelCounts.A1;
document.querySelector('[data-level="A2"]').dataset.count = levelCounts.A2;
document.querySelector('[data-level="B1"]').dataset.count = levelCounts.B1;
document.querySelector('[data-level="B2"]').dataset.count = levelCounts.B2;
document.querySelector('[data-level="C1"]').dataset.count = levelCounts.C1;


document.getElementById('totalLessons').textContent = lessons.length;


const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const level = btn.dataset.level;

    lessons.forEach(card => {
      if (level === 'all' || card.dataset.level === level) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Fonction pour extraire le titre de la leçon
function getLessonTitle(card) {
  // Essayer d'abord avec l'attribut data-lesson
  if (card.dataset.lesson) {
    return card.dataset.lesson;
  }
}


const levelColors = {
  'A1': '#10b981',
  'A2': '#fbbf24',
  'B1': '#f97316',
  'B2': '#ef4444',
  'C1': '#8b5cf6'
};


function markAsCompleted(card, lessonTitle) {
  const button = card.querySelector('button');
  const level = card.dataset.level;
  

  button.textContent = '✓ Finished';
  button.disabled = true;
  button.style.cursor = 'not-allowed';
  button.style.backgroundColor = levelColors[level];
  button.style.opacity = '0.9';
  
  
  card.classList.add('completed');
  

  if (!card.querySelector('.status-icon')) {
    const statusIcon = document.createElement('span');
    statusIcon.className = 'status-icon validated';
    statusIcon.textContent = '✓';
    card.insertBefore(statusIcon, card.firstChild);
  }
  
  console.log(`✅ Leçon "${lessonTitle}" marquée comme complétée`);
}


// async function checkCompletedLessons() {
//   try {
//     const response = await fetch('../API/verifAPI.php');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
    
//     const contentType = response.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       const text = await response.text();
//       console.error('❌ Réponse non-JSON reçue:', text.substring(0, 200));
//       throw new Error("La réponse n'est pas au format JSON");
//     }
    
//     const data = await response.json();
    
    
//     if (data.error) {
//       console.warn('⚠️ Erreur API:', data.message);
//       return; 
//     }
    
  
//     const completedExercises = Array.isArray(data) ? data : (data.exercises || []);
//     console.log('✅ Leçons complétées récupérées:', completedExercises);
    
    
//     const completedTitles = new Set(completedExercises.map(ex => ex.title));
    
//     let completedCount = 0;
    
    
//     lessons.forEach(card => {
//       const lessonTitle = getLessonTitle(card);
      
//       if (lessonTitle && completedTitles.has(lessonTitle)) {
//         markAsCompleted(card, lessonTitle);
//         completedCount++;
//       }
//     });
    
//     console.log(`📊 ${completedCount} leçon(s) complétée(s) sur ${lessons.length}`);
    
//   } catch (error) {
//     console.error('❌ Erreur lors de la vérification des leçons:', error);
//     console.log('💡 Vérifiez que vous êtes bien connecté et que verifAPI.php fonctionne');
//   }
// }


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('🔍 Vérification des leçons complétées...');
//   checkCompletedLessons();
// });