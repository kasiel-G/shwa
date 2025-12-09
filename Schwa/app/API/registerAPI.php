<?php
require "../Models/userModel.php";
require "../Models/userlogin.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST' && 
    isset($_POST['nom'], $_POST['prenom'], $_POST['email'], 
          $_POST['password'], $_POST['age'], $_POST['niveau'])) {
    
    $resp = create();
    // $test = login();
    // header("location:../../app/pages/accueil.php");
    // exit();
}
?>