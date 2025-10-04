<?php
      require '../router/Dbconnection.php';
    //   require '../app/utils/file_upload_utils.php';
      $db = connection_db();

      function create(){
        global $db;
        
        $firstname = htmlentities($_POST['nom']);
        $lastname = htmlentities($_POST['prenom']);
        $email = htmlentities($_POST['email']);
        $password = htmlentities($_POST['password']);
        $age = htmlentities($_POST['age']);


        $req1 = $db->prepare('SELECT * FROM users WHERE email = ?');
        $req1->execute([$email]);
        $count_email = $req1->rowCount();
        
        
        if ($count_email == 0) {
          
            $password_hash = password_hash($password,PASSWORD_BCRYPT);
            $insert = $db ->prepare('INSERT INTO users (nom,prenom,email,password,age) VALUES(?,?,?,?,?)');
            $insert->execute([$lastname,$firstname,$email,$password_hash,$age]);

            return[ 
                "message" => "user crée",
                "status" => "200",
            ];

        }else{

            return[ 
                "message" => "cette adresse email éxiste déja",
                "status" => "400",
            ];
        }
      }