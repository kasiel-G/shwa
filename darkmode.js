
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", (e) => {
  const profil = document.querySelector(".profil");
  const menu = document.getElementById("menu");
  if (!profil.contains(e.target)) {
    menu.style.display = "none";
  }
});

// 🌙 Gestion du mode sombre
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

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
