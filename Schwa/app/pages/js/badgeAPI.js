const level = document.getElementById("lessonLevel")
const couleurs = {
    'A1': { level: "A1", couleur: "#10b981" },
    'A2': { level: "A2", couleur: " #fbbf24" },
    'B1': { level: "B1", couleur: "#f97316" },
    'B2': { level: "B2", couleur: "#ef4444" },
    'C1-C2': { level: "C1-C2", couleur: "#8b5cf6" },
}

document.addEventListener("DOMContentLoaded", () =>{
    let verif = level.textContent;
    console.log(level.textContent);
    console.log(couleurs.A1.couleur);
    console.log(verif);
    
    
    
    switch (verif) {
        case value: "A1"
        level.style.background = couleurs.A1.couleur;
            break;

        case value: "A2"
        level.style.background = couleurs.A2.couleur;
            break;

        case value: "B1"
        level.style.background = couleurs.B1.couleur;
                break;

        case value: "B2"
        level.style.background = couleurs.B2.couleur;
                break;

        case value: "C2"
        level.style.background = couleurs.A2.couleur;
                break;

        default:
            break;
    }
})
