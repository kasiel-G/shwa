<?php
    session_start();
    require "../Models/userLogin.php";
        if ($_SERVER["REQUEST_METHOD"] === 'POST' && isset($_POST['email'], 
         $_POST['password'])) {
                 $logIn = login();
                 header("location:../../app/pages/accueil.php");
                 exit();
    }
