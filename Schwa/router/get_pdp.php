<?php
    function getUserProfilePhoto($userId, $conn = null) {
        $defaultPhoto = "../../public/IMG/logo.png";
        
        if (empty($userId)) {
            return $defaultPhoto;
        }
        
        try {
            
            if ($conn === null) {
                require_once __DIR__ . '/Dbconnection.php';
                $conn = connection_db();
            }
            
            if (!$conn) {
                return $defaultPhoto;
            }
            
            $req = "SELECT photo FROM pdp WHERE user_id = ? ORDER BY date DESC LIMIT 1";
            $stmt = $conn->prepare($req);
            $stmt->execute([$userId]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($result && !empty($result['photo'])) {
                // Chemin absolu pour vérifier l'existence
                $photoPath = __DIR__ . '/../public/' . $result['photo'];
                if (file_exists($photoPath)) {
                    // Chemin relatif pour l'affichage HTML
                    return '../../public/' . $result['photo'];
                }
            }
            
            return $defaultPhoto;
            
        } catch (PDOException $e) {
            error_log("Erreur récupération photo profil: " . $e->getMessage());
            return $defaultPhoto;
        }
    }
    function getSessionUserPhoto($conn = null) {
        if (!isset($_SESSION["auth"]["id"])) {
            return "../../public/IMG/logo.png";
        }
        
        return getUserProfilePhoto($_SESSION["auth"]["id"], $conn);
    }
?>