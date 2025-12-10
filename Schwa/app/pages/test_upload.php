<?php
// Fichier de test à placer dans le même dossier que updatePDP.php
// Accédez-y directement dans votre navigateur pour vérifier

session_start();

echo "<h2>Test de configuration</h2>";

// 1. Vérifier la session
echo "<h3>1. Session utilisateur:</h3>";
if (isset($_SESSION["auth"]["id"])) {
    echo "✅ User ID: " . $_SESSION["auth"]["id"] . "<br>";
} else {
    echo "❌ Pas de session utilisateur<br>";
}

// 2. Vérifier la connexion DB
echo "<h3>2. Connexion base de données:</h3>";
try {
    require_once '../../router/Dbconnection.php';
    $conn = connection_db();
    if ($conn) {
        echo "✅ Connexion réussie<br>";
    } else {
        echo "❌ Échec de connexion<br>";
    }
} catch (Exception $e) {
    echo "❌ Erreur: " . $e->getMessage() . "<br>";
}

// 3. Vérifier les dossiers
echo "<h3>3. Dossiers:</h3>";
$uploadDir = __DIR__ . '/../../public/uploads/users/';
echo "Chemin: " . $uploadDir . "<br>";
if (file_exists($uploadDir)) {
    echo "✅ Dossier existe<br>";
    if (is_writable($uploadDir)) {
        echo "✅ Dossier accessible en écriture<br>";
    } else {
        echo "❌ Dossier non accessible en écriture<br>";
    }
} else {
    echo "❌ Dossier n'existe pas<br>";
}

// 4. Vérifier la table pdp
echo "<h3>4. Table pdp:</h3>";
try {
    $stmt = $conn->query("DESCRIBE pdp");
    echo "✅ Table existe. Colonnes:<br>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "- " . $row['Field'] . " (" . $row['Type'] . ")<br>";
    }
} catch (Exception $e) {
    echo "❌ Erreur: " . $e->getMessage() . "<br>";
}

// 5. Test JSON
echo "<h3>5. Test JSON:</h3>";
$testJson = ['success' => true, 'message' => 'Test OK'];
echo "JSON généré: " . json_encode($testJson) . "<br>";

echo "<h3>✅ Test terminé</h3>";
?>