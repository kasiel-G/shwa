<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schwa</title>
    <link rel="stylesheet" href="/app/pages/css/header-footer.css">
    <link rel="stylesheet" href="/app/pages/css/home.css">
</head>
<body>
    <?php       
        require 'app/INC/header.php';    
    ?>
    <section id="overlay"></section>
    <section id="overlay">

</section>
<section id="acceuil" class="acceuil">
        <h2 data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" >Tongasoa, Welcome, Bienvenue</h2>
        <h4 data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">Venez apprendre avec nous :3!</h4>
        <div class="aPropos boxAcc" data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-delay="1600">
            <img src="./app/pages/IMG/studying.jpg" alt="olona curieux">
            <div class="popo Text">
                <h5>Qui sommes nous?</h5>
                <p>Schwa est une plateforme gratuite dédiée à l'apprentissage de la langue anglaise. Nous croyons que l'éducation doit être accessible à tous. <br> Apprenez de n'importe où grace à <span>schwa</span></p>
            </div>
        </div>

        <div class="comment boxAcc" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <div class="Text Comm">
                <h5>comment nous rejoindre??</h5>
                <p>Juste avec quelques clics:</p> 
                <ul>
                    <li><p>créez votre compte</p></li>
                    <li><p>et commencer à apprendre...</p></li>
                </ul> 
            </div>
            <img src="./app/pages/IMG/study group.jpg" alt="olona manao solomaso">
        </div>

        <div class="avantages boxAcc" class="comment boxAcc" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <img src="./app/pages/IMG/study group2.jpg" alt="olona falifaly">
            <div class="avant Text">

                <h5>apprenez en vous amusant!!!</h5>
                <p>nos leçons sont facile à comprendre mais aussi adapté a tous niveaux <br> nos exercices sont faits pour vous aider à réviser de la maniere la plus facile et l aplus amusante possible</p>
                <h5>avec les meilleurs leçons trouvables sur le net</h5>
            </div>
        </div>

        <div class="faranyAcc boxAcc" class="comment boxAcc" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <h4>Alors? qu'attendez-vous pour nous rejoindre??</h4>
            <img src="./app/pages/IMG/questioning.jpg" alt="perxplexe">
        </div>
</section>

    <?php       
        require 'app/INC/footer.php';
    ?>
    <script src="/app/pages/js/index.js"></script>
</body>
</html>