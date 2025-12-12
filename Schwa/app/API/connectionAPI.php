<?php
    session_start();
    require "../Models/userLogin.php";
    
    if ($_SERVER["REQUEST_METHOD"] === 'POST' && isset($_POST['email'], $_POST['password'])) {
        $result = login();
        
        
        if (isset($result['status']) && $result['status'] == "200") {
            
            header("location:../../app/pages/accueil.php");
            exit();
        }
        
        else if (isset($result['status'])) {
            
            header("location:../../index.php?error=" . urlencode($result['status']));
            exit();
        }
    }
?>