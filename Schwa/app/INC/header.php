<?php
    function navMod(){
        $linky = $_SERVER['REQUEST_URI'];
        $segmemt = explode('/', $linky);
        $realsegment = end($segmemt);
    }
?>
<header>
        <img src="/public/IMG/logo.png" alt="logo">
        <nav>
            <ul>
                <li><a href="/app/pages/apropos.php" id="appr">A propos</a></li>
                <li><a href="" id="inscriLauncher">Rejoindre</a></li>
                <li><a href="" class="conn" id="connLauncher">connexion</a></li>
            </ul>
        </nav>
    </header>