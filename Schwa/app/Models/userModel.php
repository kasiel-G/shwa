<?php
require '../../router/Dbconnection.php';
// require 'userLogin.php';
$db = connection_db();

function create(){
    global $db;
    
    $firstname = htmlentities($_POST['prenom'], ENT_QUOTES, 'UTF-8');
    $lastname = htmlentities($_POST['nom'], ENT_QUOTES, 'UTF-8');
    $email = htmlentities($_POST['email'], ENT_QUOTES, 'UTF-8');
    $password = $_POST['password']; 
    $dateNaissance = htmlentities($_POST['age'], ENT_QUOTES, 'UTF-8');
    $niveau = htmlentities($_POST['niveau'], ENT_QUOTES, 'UTF-8');

    $age = date_diff(date_create($dateNaissance), date_create('today'))->y;

    $req1 = $db->prepare('SELECT * FROM users WHERE email = ?');
    $req1->execute([$email]);
    $count_email = $req1->rowCount();
    
    if ($count_email == 0) {
        $password_hash = password_hash($password, PASSWORD_BCRYPT);
        $insert = $db->prepare('INSERT INTO users (nom, prenom, email, mdp, age, niveau) VALUES(?, ?, ?, ?, ?, ?)');
        $insert->execute([$lastname, $firstname, $email, $password_hash, $age, $niveau]);
        
        return [
            "message" => "Inscription réussie",
            "status" => "200"
        ];
    } else {
        return [
            "message" => "Cette adresse email existe déjà",
            "status" => "400"
        ];
    }
}


?>