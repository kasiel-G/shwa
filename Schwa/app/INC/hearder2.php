<?php
    require_once '../Models/userlogin.php';
    if (isset($_POST["logout"])) {
        logout();
    }
    function navModifier(){
        $uri = $_SERVER['REQUEST_URI'];
        $segments = explode('/', $uri);
        $lastSegment = end($segments);
        $nav = '';
        $navname = '';
        switch ($lastSegment) {
            case 'workpage.php':
                $nav = 'grammar.php';
                $navname = 'Grammar';
                
            break;

            case 'workvocabulary.php':
                $nav = 'vocabulary.php';
                $navname = 'Vocabulary';

            break;

            case 'listening.php':
                $nav = 'listening.php';
                $navname = 'Listening';

            break;

            case 'workreading.php':
                $nav = 'reading.php';
                $navname = 'Reading';

            break;

            default:
                $nav = '';
                $navname = '';
                break;
        }
        return [$lastSegment, $nav, $navname];
    }

    list($lastSegment, $nav, $navname) = navModifier();
    $allowedPage =['workpage.php', 'workreading.php', 'worklistening.php', 'workvocabulary.php'];
    $showLink = in_array($lastSegment,$allowedPage)
?>
<header>
        <img src="../../public/IMG/logo.png" alt="logo">
        <nav>
            <ul>
                <?php if ($showLink): ?>
                    <li><a href="<?= $nav ;?>"><?= $navname ;?></a></li>
                <?php else : ?>
                    <!-- <li><a href="<?= $nav ;?>"><?= $navname ;?></a></li> -->
                <?php endif; ?>
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