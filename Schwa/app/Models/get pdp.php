<?php
    require_once 'Dbconnection.php';

        $conn = connection_db();
        function get_pdp($id){
            global $conn;
            $req = $conn->prepare("SELECT photo FROM users WHERE id = ?");
            $req->execute([$id]);
            $user = $req->fetch();
            return $user['photo'];
        }
?>