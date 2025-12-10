// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const connForm = document.getElementById("connForm");
    const inscriForm = document.getElementById("inscriForm");
    const conn = document.getElementById("connLauncher");
    const inscri = document.getElementById("inscriLauncher");
    const overlay = document.getElementById("overlay");

    conn.addEventListener("click", (e) => {
        e.preventDefault();
        connForm.classList.toggle("active");
        inscriForm.classList.remove("active");
        overlay.classList.add("overlay");
    });

    inscri.addEventListener("click", (e) => {
        e.preventDefault();
        inscriForm.classList.toggle("active");
        connForm.classList.remove("active");
        overlay.classList.add("overlay");
    });

    overlay.addEventListener("click", () => {
        inscriForm.classList.remove("active");
        connForm.classList.remove("active");
        overlay.classList.remove("overlay");
    });

    const header = document.querySelector('header');
    const a = document.querySelector('header a');
    
    document.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.backgroundColor = "#11468F";
            a.style.color = "#EEEEEE";
            inscri.style.color = "#EEEEEE";
        } else {
            header.style.backgroundColor = "";
            a.style.color = "#11468F";
            inscri.style.color = "#11468F";
        }
    });
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
  let redi = document.getElementById('appr')
  redi.addEventListener('click', ()=>{
    window.Location = "app/pages/apropos.php";
  })