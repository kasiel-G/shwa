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

// Update filter button badges
document.querySelector('[data-level="all"]').dataset.count = lessons.length;
document.querySelector('[data-level="A1"]').dataset.count = levelCounts.A1;
document.querySelector('[data-level="A2"]').dataset.count = levelCounts.A2;
document.querySelector('[data-level="B1"]').dataset.count = levelCounts.B1;
document.querySelector('[data-level="B2"]').dataset.count = levelCounts.B2;
document.querySelector('[data-level="C1"]').dataset.count = levelCounts.C1;

// Update total lesson count
document.getElementById('totalLessons').textContent = lessons.length;

// Filter system
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