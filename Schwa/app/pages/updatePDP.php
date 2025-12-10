<?php
session_start();
require_once '../../router/Dbconnection.php';

// En-tête JSON dès le début
header('Content-Type: application/json; charset=utf-8');

// Fonction pour envoyer une réponse JSON et terminer
function sendJsonResponse($success, $message, $data = []) {
    echo json_encode(array_merge([
        'success' => $success,
        'message' => $message
    ], $data));
    exit;
}


if (!isset($_SESSION["auth"]["id"])) {
    sendJsonResponse(false, 'Utilisateur non connecté');
}


if (!isset($_FILES['file'])) {
    sendJsonResponse(false, 'Aucun fichier reçu');
}

$file = $_FILES['file'];


if ($file['error'] !== UPLOAD_ERR_OK) {
    $errors = [
        UPLOAD_ERR_INI_SIZE => 'Le fichier dépasse la limite du serveur',
        UPLOAD_ERR_FORM_SIZE => 'Le fichier dépasse la limite du formulaire',
        UPLOAD_ERR_PARTIAL => 'Le fichier n\'a été que partiellement uploadé',
        UPLOAD_ERR_NO_FILE => 'Aucun fichier n\'a été uploadé',
        UPLOAD_ERR_NO_TMP_DIR => 'Dossier temporaire manquant',
        UPLOAD_ERR_CANT_WRITE => 'Échec de l\'écriture sur le disque',
        UPLOAD_ERR_EXTENSION => 'Extension PHP a stoppé l\'upload'
    ];
    $errorMsg = $errors[$file['error']] ?? 'Erreur inconnue lors de l\'upload';
    sendJsonResponse(false, $errorMsg);
}

$userId = $_SESSION["auth"]["id"];


$allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
$maxSize = 20 * 1024 * 1024; // 20MB

// Vérifier le type MIME
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimeType = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mimeType, $allowedTypes)) {
    sendJsonResponse(false, 'Type de fichier non autorisé. Utilisez JPG, PNG, GIF ou WEBP.');
}

if ($file['size'] > $maxSize) {
    sendJsonResponse(false, 'Fichier trop volumineux. Maximum 20MB.');
}

// Créer le dossier utilisateur s'il n'existe pas
$uploadDir = __DIR__ . '/../../public/uploads/users/' . $userId . '/';

if (!file_exists($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        sendJsonResponse(false, 'Impossible de créer le dossier de destination');
    }
}

// Générer un nom de fichier unique
$extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (empty($extension)) {
    $extension = 'jpg'; // Extension par défaut
}
$fileName = 'profile_' . time() . '_' . uniqid() . '.' . $extension;
$filePath = $uploadDir . $fileName;

// Déplacer le fichier uploadé
if (!move_uploaded_file($file['tmp_name'], $filePath)) {
    sendJsonResponse(false, 'Erreur lors de la sauvegarde du fichier');
}

// Chemin relatif pour la base de données
$dbPath = 'uploads/users/' . $userId . '/' . $fileName;

try {
    $conn = connection_db();
    
    if (!$conn) {
        // Supprimer le fichier uploadé en cas d'erreur de connexion
        if (file_exists($filePath)) {
            unlink($filePath);
        }
        sendJsonResponse(false, 'Erreur de connexion à la base de données');
    }
    
    // Vérifier si l'utilisateur a déjà une photo
    $checkReq = "SELECT id, photo FROM pdp WHERE user_id = ? ORDER BY date DESC LIMIT 1";
    $checkStmt = $conn->prepare($checkReq);
    $checkStmt->execute([$userId]);
    $existingPhoto = $checkStmt->fetch(PDO::FETCH_ASSOC);
    
    // Supprimer l'ancienne photo si elle existe
    if ($existingPhoto && !empty($existingPhoto['photo'])) {
        $oldPhotoPath = __DIR__ . '/../../public/' . $existingPhoto['photo'];
        if (file_exists($oldPhotoPath)) {
            @unlink($oldPhotoPath); // @ pour supprimer les warnings si le fichier n'existe pas
        }
    }
    
    // Insérer la nouvelle photo
    $dateUpload = date('Y-m-d H:i:s');
    
    $req = "INSERT INTO pdp (user_id, photo, date) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($req);
    $stmt->execute([$userId, $dbPath, $dateUpload]);
    
    // Retourner le succès avec le chemin de la photo
    sendJsonResponse(true, 'Photo de profil mise à jour avec succès', [
        'photoPath' => '../../public/' . $dbPath
    ]);
    
} catch (PDOException $e) {
    // En cas d'erreur, supprimer le fichier uploadé
    if (file_exists($filePath)) {
        @unlink($filePath);
    }
    
    sendJsonResponse(false, 'Erreur de base de données: ' . $e->getMessage());
}