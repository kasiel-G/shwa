<?php
session_start();
require "../Models/userModel.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST' && 
    isset($_POST['nom'], $_POST['prenom'], $_POST['email'], 
          $_POST['password'], $_POST['age'], $_POST['niveau'])) {
    
    $resp = create();
    
    
    if ($resp['status'] == "200") {
        
        require '../../router/Dbconnection.php';
        $conn = connection_db();
        
        $email = $_POST['email'];
        
        
        $req = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $req->execute([$email]);
        $user = $req->fetch();
        
        
        $_SESSION["auth"] = [
            "id" => $user["id"],
            "email" => $user["email"],
            "nom" => $user["nom"],
            "prenom" => $user["prenom"],
            "niveau" => $user["niveau"]
        ];
        
        
        header("location:../../app/pages/accueil.php");
        exit();
    } else {
        
        header("location:../../index.php?register_error=" . urlencode($resp['status']));
        exit();
    }
}
?>