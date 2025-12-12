<?php
    session_start();
    
    header('Content-Type: application/json');
    
    try {
        require_once '../router/Dbconnection.php';
        
        $conn = connection_db();
        $userId = $_SESSION["auth"]["id"];

        $req = $conn->prepare("SELECT title FROM exercices WHERE user_id = ? AND status = 'valide'");
        $req->execute([$userId]);
        $exercises = $req->fetchAll(PDO::FETCH_ASSOC);
        
        
        echo json_encode($exercises);
        
    } catch (PDOException $e) {
        
        echo json_encode([
            "error" => true,
            "message" => "Erreur de base de données: " . $e->getMessage(),
            "exercises" => []
        ]);
    } catch (Exception $e) {
        
        echo json_encode([
            "error" => true,
            "message" => "Erreur: " . $e->getMessage(),
            "exercises" => []
        ]);
    }

    
?>