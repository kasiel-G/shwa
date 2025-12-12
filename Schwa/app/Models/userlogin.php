<?php
    require '../../router/Dbconnection.php';
    $conn = connection_db();

    function login(){
        global $conn;
        $email = $_POST['email'];
        $password = $_POST['password'];

        $req = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $req->execute([$email]);
        $cout_mail = $req->rowCount();
        
        if ($cout_mail == 1) {
            $user = $req->fetch();
            if (password_verify($password, $user["mdp"])) {
                $_SESSION["auth"] = [
                    "id"=>$user["id"],
                    "email"=>$user["email"],
                    "nom"=>$user["nom"],
                    "prenom"=>$user["prenom"],
                    "niveau"=>$user["niveau"]
                ];
                
                return [
                    "message" => "Connexion réussie",
                    "status" => "200",
                    "user" => $_SESSION['auth']
                ];
            } else {
                
                return [
                    "message" => "Mot de passe incorrect",
                    "status" => "401",
                    "placeholder" => "password",
                ];
            }
        } else {
            
            return [
                "message" => "Email n'existe pas",
                "status" => "404"
            ];
        }
    }

    function logout(){
        unset($_SESSION["auth"]);
        session_destroy();
        header('location:../../index.php');
        exit();
    }

?>