<?php
    // require "app/Models/userModel.php";
    // die('ok');
    if (isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['age']) && isset($_POST['age'])) {
        $resp = create();
        echo json_encode($resp);
    }
?>