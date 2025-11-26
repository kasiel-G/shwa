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