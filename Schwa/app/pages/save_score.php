<?php
session_start();
require '../../router/Dbconnection.php';

$conn = connection_db();

// Récupération des données JSON envoyées par fetch()
$data = json_decode(file_get_contents("php://input"), true);

$title = $data["title"];
$category = $data["category"];
$level = $data["level"];
$score = $data["score"];   
$time = $data["time"];
$cov = $data["date"];
$ext = new DateTime($cov);
$date = $ext->format('Y-m-d H:i:s');
$userId = $_SESSION["auth"]["id"];

try {
    $sql = "INSERT INTO exercices (title, category, level, points, time, date, user_id)
            VALUES (:title, :category, :level, :points, :time, :date_value, :user_id)";

    $stmt = $conn->prepare($sql);

    $stmt->execute([
        ":title" => $title,
        ":category" => $category,
        ":level" => $level,
        ":points" => $score,
        ":time" => $time,
        ":date_value" => $date,
        ":user_id" => $userId
    ]);

    echo "Données enregistrées !";

} catch (PDOException $e) {
    echo "Erreur BDD: " . $e->getMessage();
}
