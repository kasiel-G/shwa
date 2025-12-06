
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// 🌙 Gestion du mode sombre
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;
// const darklink = document.getElementById("darklink");
// Charger l'état sauvegardé
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode ☀️";
}

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("dark-mode");
  const darkEnabled = body.classList.contains("dark-mode");
  toggleButton.textContent = darkEnabled ? "Light Mode ☀️" : "Dark Mode 🌙";
  localStorage.setItem("darkMode", darkEnabled);
});
function toggleProfileMenu() {
  const menu = document.getElementById('profile-menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', (e) => {
  const profile = document.querySelector('.profile');
  const menu = document.getElementById('profile-menu');
  if (!profile.contains(e.target)) {
    menu.style.display = 'none';
  }
});