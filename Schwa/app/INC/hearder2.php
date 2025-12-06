<?php
    require_once '../Models/userlogin.php';
    if (isset($_POST["logout"])) {
        logout();
    }
?>
<header>
        <img src="../../public/IMG/logo.png" alt="logo">
        <nav>
            <ul>
                <!-- <li><a href="">Profile</a></li> -->
                <li><a href="accueil.php">lessons</a></li>
                <li><a href="dashboard.php">Dashboard</a></li>
            </ul>
        </nav>
        <div class="profile">
        <img src="../../public/IMG/minilogo.png" alt="">
        <span class="profile-name" onclick="toggleProfileMenu()"><?=  $_SESSION["auth"]["nom"] . " ". $_SESSION["auth"]["prenom"]; ?></span>
        <div id="profile-menu" class="profile-dropdown">
          <a href="">View Profile</a>
          <a id="darkModeToggle">Dark Mode 🌙</a>
            <form method="POST">
                <button type="submit" name="logout" class="logout-btn" id="logout">Logout</button>
            </form>
        </div>
    </header>