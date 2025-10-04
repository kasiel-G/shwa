// Récupérer les éléments
const connForm = document.getElementById("connForm");
const inscriForm = document.getElementById("inscriForm");
const conn = document.getElementById("connLauncher");
const inscri = document.getElementById("inscriLauncher");
const overlay = document.getElementById("overlay");
let click = 1;
conn.addEventListener("click", (e) => {
    e.preventDefault();
    connForm.classList.toggle("active");
    if (inscriForm.classList.contains("active")) {
        inscriForm.classList.remove("active");
    }
    if (inscriForm.classList.contains("active") || connForm.classList.contains("active")) {
        overlay.classList.add("overlay");
    }
    else {
        overlay.classList.remove("overlay");
    }
})
inscri.addEventListener("click", (e) => {
    e.preventDefault();
    inscriForm.classList.toggle("active");
    overlay.classList.toggle("overlay");
    if (connForm.classList.contains("active")) {
        connForm.classList.remove("active");
    }
    if (inscriForm.classList.contains("active") || connForm.classList.contains("active")) {
        overlay.classList.add("overlay");
    } else {
        overlay.classList.remove("overlay");
    }
})

document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target == overlay) {
        inscriForm.classList.remove("active");
        connForm.classList.remove("active");
        overlay.classList.remove("overlay");
    }
})
const header = document.querySelector('header');
const a = document.querySelector('header a');
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 40) {
        header.style.backgroundColor = "#11468F"; // Change to your desired color";
        a.style.color = "#EEEEEE";
        inscri.style.color = "#EEEEEE";
    } else {
        header.style.backgroundColor = ""; // Use an empty string to reset the background color
        a.style.color = "#11468F";
        inscri.style.color = "#11468F";
    }
});
