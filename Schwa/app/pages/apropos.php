<?php
    require '../../router/Dbconnection.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À Propos - Schwa</title>
    <link rel="icon" href="/public/IMG/minilogo.png" type="image/png" style="border-radius: 50%;">
    <link rel="stylesheet" href="/public/css/style.css">
    <link rel="stylesheet" href="/app/pages/css/a propos.css">
</head>
<body>
    <?php require '../INC/header.php'; ?>

    <main>
        <section class="apropos-hero">
            <div class="hero-content">
                <h1>À Propos de Schwa</h1>
                <p>Votre plateforme d'apprentissage linguistique innovante</p>
            </div>
        </section>

        <section class="apropos-content">
            <div class="mission-section">
                <h2>Notre Mission</h2>
                <p>Schwa est une plateforme dédiée à l'apprentissage des langues de manière interactive et efficace. Notre mission est de rendre l'apprentissage linguistique accessible à tous, en proposant des outils modernes et adaptés à chaque niveau.</p>
            </div>

            <div class="values-section">
                <h2>Nos Valeurs</h2>
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">🎯</div>
                        <h3>Excellence</h3>
                        <p>Nous visons l'excellence dans chaque aspect de notre plateforme pour garantir une expérience d'apprentissage optimale.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🌍</div>
                        <h3>Accessibilité</h3>
                        <p>Nous croyons que l'éducation linguistique doit être accessible à tous, partout et à tout moment.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">💡</div>
                        <h3>Innovation</h3>
                        <p>Nous intégrons les dernières technologies pour offrir des méthodes d'apprentissage modernes et efficaces.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🤝</div>
                        <h3>Communauté</h3>
                        <p>Nous favorisons une communauté d'apprenants motivés qui partagent leur passion pour les langues.</p>
                    </div>
                </div>
            </div>

            <div class="features-section">
                <h2>Ce Que Nous Offrons</h2>
                <div class="features-list">
                    <div class="feature-item">
                        <span class="feature-number">01</span>
                        <div class="feature-content">
                            <h3>Cours Interactifs</h3>
                            <p>Des leçons engageantes conçues pour tous les niveaux, du débutant à l'avancé.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-number">02</span>
                        <div class="feature-content">
                            <h3>Exercices Pratiques</h3>
                            <p>Une variété d'exercices pour renforcer vos compétences linguistiques de manière ludique.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-number">03</span>
                        <div class="feature-content">
                            <h3>Suivi Personnalisé</h3>
                            <p>Un système de progression qui s'adapte à votre rythme et à vos objectifs.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <span class="feature-number">04</span>
                        <div class="feature-content">
                            <h3>Communauté Active</h3>
                            <p>Rejoignez une communauté d'apprenants passionnés et partagez votre expérience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="stats-section">
                <h2>Schwa en Chiffres</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">1000+</div>
                        <div class="stat-label">Apprenants Actifs</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Cours Disponibles</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">95%</div>
                        <div class="stat-label">Taux de Satisfaction</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Disponibilité</div>
                    </div>
                </div>
            </div>

            <div class="team-section">
                <h2>Notre Équipe</h2>
                <p class="team-intro">Schwa est développé par une équipe passionnée d'éducateurs et de développeurs dédiés à révolutionner l'apprentissage des langues.</p>
                <div class="cta-box">
                    <h3>Rejoignez-nous dans cette aventure !</h3>
                    <p>Commencez votre parcours d'apprentissage dès aujourd'hui</p>
                    <a href="/" class="cta-button">Commencer Maintenant</a>
                </div>
            </div>
        </section>
    </main>
    <section id="modalContainer">
    <!-- connection -->
    <div class="connexBox">
        <form id="connForm" method="POST" action="app/API/connectionAPI.php">
            <div class="formhead">
                <img src="public/IMG/minilogo.png" alt="logo">
                <h2>Bon retour</h2><span>🌱</span>
            </div>
            <div class="input-group">
                <span>📧</span><input type="email" name="email" placeholder="Votre email" required>
            </div>
            <div class="input-group">
                <span>🔒</span><input type="password" name="password" placeholder="Votre mot de passe" required>
            </div>
            <button type="submit" class="btnlogin" id="btnconn">Se connecter 🚀</button>
            <p>mot de passe oublié ? <a href="">cliquez ici</a></p>
        </form>
    </div>

    <!-- inscription -->
    <div class="inscriBox2">
        <form id="inscriForm" method="POST" action="app/API/registerAPI.php">
            <div class="formhead">
                <span>🌱</span><h2>Rejoignez-nous</h2>
                <img src="public/IMG/minilogo.png" alt="logo">
            </div>
            <div class="input-group">
                <span>👤</span><input type="text" placeholder="Votre nom" name="nom" required><br>
            </div>
            <div class="input-group">
                <span>👤</span><input type="text" placeholder="Votre prenom" name="prenom" required>
            </div>
            <div class="input-group">
                <span>📅</span><input type="date" placeholder="Votre date de naissance" name="age" required min="1900-01-01" max="2007-12-31">
            </div>
            <div class="input-group">
                <span>📧</span><input type="email" placeholder="Votre email" name="email" required>
            </div>
            <div class="input-group">
                <span>🔒</span><input type="password" placeholder="Votre mot de passe" name="password" id="mdp1" required>
            </div>
            <div class="input-group">
                <span>🔒</span><input type="password" placeholder="confirmer le mot de passe" id="mdp2" required>
            </div>
            <div class="input-group">
                <select name="niveau" id="niv">
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1-C2">C1-C2</option>
                </select>
            </div>
            <div class="unsure-level">
                        <a href="#" onclick="alert('Conseil: Si vous hésitez, choisissez un niveau légèrement inférieur. Vous pourrez toujours progresser !'); return false;">
                            ❓ Pas sûr de votre niveau ?
                        </a>
                    </div>
            <button type="submit" class="btnlogin" id="btnLogin">S'inscrire 🚀</button>
            <p>En vous inscrivant, vous acceptez nos <a href="">conditions d'utilisation</a></p>
        </form>
    </div>
   
                   
    </form>
</section>
<section id="overlay">

</section>
    <?php require '../INC/footer.php'; ?>
    <script src="/public/js/script.js"></script>
</body>
</html>