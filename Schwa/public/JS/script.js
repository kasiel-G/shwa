document.addEventListener('DOMContentLoaded', () => {
    const connForm = document.getElementById("connForm");
    const inscriForm = document.getElementById("inscriForm");
    const conn = document.getElementById("connLauncher");
    const inscri = document.getElementById("inscriLauncher");
    const overlay = document.getElementById("overlay");

    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error')) {
        // Erreur de connexion - ouvrir le formulaire de connexion
        connForm.classList.add("active");
        overlay.classList.add("overlay");
    } else if (urlParams.has('register_error')) {
        
        inscriForm.classList.add("active");
        overlay.classList.add("overlay");
    }

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

    const mdp1 = document.getElementById('mdp1');
    const mdp2 = document.getElementById('mdp2');
    const btnLogin = document.getElementById('btnLogin');

    const errorMessage = document.createElement('p');
    errorMessage.style.color = '#DA1212';
    errorMessage.style.fontSize = '0.9rem';
    errorMessage.style.fontWeight = '600';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.marginTop = '10px';
    errorMessage.style.display = 'none';
    
    btnLogin.parentNode.insertBefore(errorMessage, btnLogin);

    mdp2.addEventListener('input', () => {
        if (mdp2.value !== '' && mdp1.value !== mdp2.value) {
            mdp2.style.borderColor = '#ef4444';
            mdp2.parentElement.style.borderColor = '#ef4444';
            errorMessage.textContent = '⚠️ Les mots de passe ne correspondent pas';
            errorMessage.style.display = 'block';
        } else if (mdp2.value === mdp1.value && mdp2.value !== '') {
            mdp2.style.borderColor = '#22c55e';
            mdp2.parentElement.style.borderColor = '#22c55e';
            errorMessage.style.display = 'none';
        } else {
            mdp2.style.borderColor = '';
            mdp2.parentElement.style.borderColor = '';
            errorMessage.style.display = 'none';
        }
    });

    inscriForm.addEventListener('submit', (e) => {
        if (mdp1.value !== mdp2.value) {
            e.preventDefault();
            errorMessage.textContent = '❌ Les mots de passe ne correspondent pas. Veuillez vérifier.';
            errorMessage.style.display = 'block';
            
            mdp1.parentElement.style.animation = 'shake 0.5s';
            mdp2.parentElement.style.animation = 'shake 0.5s';
            
            setTimeout(() => {
                mdp1.parentElement.style.animation = '';
                mdp2.parentElement.style.animation = '';
            }, 500);

            mdp1.focus();
            return false;
        }
    });

    mdp1.addEventListener('input', () => {
        mdp1.style.borderColor = '';
        mdp1.parentElement.style.borderColor = '';
        if (mdp2.value !== '') {
            mdp2.dispatchEvent(new Event('input'));
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
    if (profile && menu && !profile.contains(e.target)) {
        menu.style.display = 'none';
    }
});

let redi = document.getElementById('appr');
if (redi) {
    redi.addEventListener('click', () => {
        window.location = "app/pages/apropos.php";
    });
}