<?php
// Désactiver l'affichage des erreurs HTML et forcer JSON
ini_set('display_errors', 0);
error_reporting(E_ALL);
header('Content-Type: application/json; charset=utf-8');

try {
    session_start();
    
    require '../../router/Dbconnection.php';
    $conn = connection_db();
    
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);
    
    if (!$data) {
        echo json_encode([
            "success" => false,
            "error" => "Données JSON invalides"
        ]);
        exit;
    }
    
    $title = $data["title"];
    $category = $data["category"];
    $level = $data["level"];
    $score = $data["score"];
    $time = $data["time"];
    $cov = $data["date"];
    $userId = $_SESSION["auth"]["id"];
    $status = $data["status"];
    
    if (!$title || !$category || !$level || $score === null || !$time || !$cov || !$status) {
        echo json_encode([
            "success" => false,
            "error" => "Données manquantes"
        ]);
        exit;
    }

    $ext = new DateTime($cov);
    $date = $ext->format('Y-m-d H:i:s');
    
    
    $checkSql = "SELECT id FROM exercices WHERE title = ? AND user_id = ?";
    $checkStmt = $conn->prepare($checkSql);
    $checkStmt->execute([$title, $userId]);
    $existing = $checkStmt->fetch(PDO::FETCH_ASSOC);
    
    if ($existing) {
        
        $sql = "UPDATE exercices 
                SET points = ?, 
                    time = ?, 
                    date = ?, 
                    status = ?
                WHERE title = ? AND user_id = ?";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            $score,
            $time,
            $date,
            $status,
            $title,
            $userId
        ]);
        
        echo json_encode([
            "success" => true,
            "message" => "Score mis à jour avec succès !",
            "action" => "update",
            "id" => $existing['id']
        ]);
        
    } else {
        
        $sql = "INSERT INTO exercices (title, category, level, points, time, date, user_id, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            $title,
            $category,
            $level,
            $score,
            $time,
            $date,
            $userId,
            $status
        ]);
        
        echo json_encode([
            "success" => true,
            "message" => "Nouveau score enregistré avec succès !",
            "action" => "insert",
            "id" => $conn->lastInsertId()
        ]);
    }
    
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "error" => "Erreur BDD: " . $e->getMessage()
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "error" => "Erreur: " . $e->getMessage()
    ]);
}
?>