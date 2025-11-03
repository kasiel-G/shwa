<section class="welcome">
    <h1>Bienvenue, welcome, tongasoa</h1>
    <p>Apprenez l'anglais gratuitement avec Schwa. Des leçons simples, <br>interactives et accessibles à tous.</p>
    <!-- <a href="./app/pages/test.php" class="btn">Commencer maintenant</a> -->
</section>
<section class="who">
    <div class="whobox">
        <h2>Qui sommes-nous ?</h2>
        <p>Schwa est une plateforme dédiée à l'apprentissage de l'anglais. Nous croyons que l'éducation doit être accessible à tous, c'est pourquoi nous offrons des ressources gratuites et de qualité pour aider chacun à améliorer ses compétences en anglais.</p>
    </div>
    <div class="boxsec">
        <h3>apprentissage facile</h3>
        <img src="/public/IMG/studying.jpg" alt="fille">
        <p>Nos leçons sont simples à comprendre et adaptées.</p>
    </div>
    <div class="boxsec">
        <h3>Accessible à tous</h3>
        <img src="/public/IMG/study group.jpg" alt="">
        <p>Créez un compte en quelques clics et commencez immédiatement.</p>
    </div>
    <div class="boxsec">
        <h3>Amusant</h3>
        <img src="/public/IMG/dude having fun.jpg" alt="">
        <p>Des exercices ludiques pour rendre votre apprentissage agréable.</p>
    </div>
</section>

<section class="quote">
    <h3>Shoot for the moon. Even if you miss, you'll land among the stars.</h3>
    <p>Visez haut. Même si vous ratez, vous toucherez les étoiles.<br>
        L'apprentissage est un voyage, pas une destination.</p>
</section>
<section id="modalContainer">
    <!-- connection -->
    <div class="connexBox">
        <form id="connForm" method="POST">
            <div class="formhead">
                <img src="public/IMG/minilogo.png" alt="logo">
                <h2>Bon retour</h2><span>🌱</span>
            </div>
            <div class="input-group">
                <span>📧</span><input type="email" placeholder="Votre email" required>
            </div>
            <div class="input-group">
                <span>🔒</span><input type="password" placeholder="Votre mot de passe" required>
            </div>
            <button type="submit" class="btnlogin" id="btnconn">Se connecter 🚀</button>
            <p>mot de passe oublié ? <a href="">cliquez ici</a></p>
        </form>
    </div>

    <!-- inscription -->
    <div class="inscriBox2">
        <form id="inscriForm" method="post" action="app/models/userModel.php">
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
            <button type="submit" class="btnlogin" id="btnLogin">S'inscrire 🚀</button>
            <p>En vous inscrivant, vous acceptez nos <a href="">conditions d'utilisation</a></p>
        </form>
    </div>
    <form id="level_select" method="$_POST" action="">
    <div class="level-selection">
                <h3>📚 Choisissez votre niveau d'anglais</h3>
                <div class="level-options">
                    <div class="level-option">
                        <input type="radio" id="level-a1" name="niveau" value="A1" required>
                        <label for="level-a1">
                            <span class="level-emoji">🟢</span>
                            <div class="level-info">
                                <span class="level-name">A1 - Débutant</span>
                                <span class="level-desc">Je comprends des phrases simples</span>
                            </div>
                        </label>
                    </div>
                    <div class="level-option">
                        <input type="radio" id="level-a2" name="niveau" value="A2">
                        <label for="level-a2">
                            <span class="level-emoji">🟡</span>
                            <div class="level-info">
                                <span class="level-name">A2 - Élémentaire</span>
                                <span class="level-desc">Je peux parler de sujets familiers</span>
                            </div>
                        </label>
                    </div>
                    <div class="level-option">
                        <input type="radio" id="level-b1" name="niveau" value="B1">
                        <label for="level-b1">
                            <span class="level-emoji">🟠</span>
                            <div class="level-info">
                                <span class="level-name">B1 - Intermédiaire</span>
                                <span class="level-desc">Je comprends l'essentiel d'un texte</span>
                            </div>
                        </label>
                    </div>
                    <div class="level-option">
                        <input type="radio" id="level-b2" name="niveau" value="B2">
                        <label for="level-b2">
                            <span class="level-emoji">🔴</span>
                            <div class="level-info">
                                <span class="level-name">B2 - Intermédiaire avancé</span>
                                <span class="level-desc">Je m'exprime avec aisance</span>
                            </div>
                        </label>
                    </div>
                    <div class="level-option">
                        <input type="radio" id="level-c1" name="niveau" value="C1-C2">
                        <label for="level-c1">
                            <span class="level-emoji">🟣</span>
                            <div class="level-info">
                                <span class="level-name">C1-C2 - Avancé</span>
                                <span class="level-desc">Je maîtrise l'anglais avec précision</span>
                            </div>
                        </label>
                    </div>
                    <div class="unsure-level">
                        <a href="#" onclick="alert('Conseil: Si vous hésitez, choisissez un niveau légèrement inférieur. Vous pourrez toujours progresser !'); return false;">
                            ❓ Pas sûr de votre niveau ?
                        </a>
                    </div>
                </div>
            </div>
    </form>
</section>
<section id="overlay">

</section>
