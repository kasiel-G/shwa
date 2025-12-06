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
