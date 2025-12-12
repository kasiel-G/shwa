ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h1>Test de verifAPI.php</h1>";

session_start();

echo "<h2>1. Session</h2>";
if (isset($_SESSION["auth"])) {
    echo "<pre>";
    print_r($_SESSION["auth"]);
    echo "</pre>";
} else {
    echo "❌ Pas de session auth<br>";
}

echo "<h2>2. Inclusion de Dbconnection.php</h2>";
try {
    require_once '../../router/Dbconnection.php';
    echo "✅ Fichier inclus<br>";
} catch (Exception $e) {
    echo "❌ Erreur : " . $e->getMessage() . "<br>";
    exit();
}

echo "<h2>3. Connexion DB</h2>";
try {
    $conn = connection_db();
    echo "✅ Connexion établie<br>";
} catch (Exception $e) {
    echo "❌ Erreur : " . $e->getMessage() . "<br>";
    exit();
}

echo "<h2>4. Test de la requête</h2>";
if (isset($_SESSION["auth"]["id"])) {
    try {
        $userId = $_SESSION["auth"]["id"];
        echo "User ID: $userId<br>";
        
        $req = $conn->prepare("SELECT title, status FROM exercices WHERE user_id = ?");
        $req->execute([$userId]);
        $exercises = $req->fetchAll(PDO::FETCH_ASSOC);
        
        echo "Nombre de résultats : " . count($exercises) . "<br>";
        echo "<pre>";
        print_r($exercises);
        echo "</pre>";
        
        // Filtrer les validés
        $valides = array_filter($exercises, function($ex) {
            return $ex['status'] === 'valide';
        });
        
        echo "<h3>Exercices validés :</h3>";
        echo "<pre>";
        print_r(array_values($valides));
        echo "</pre>";
        
        echo "<h3>JSON qui serait retourné :</h3>";
        $result = array_map(function($ex) {
            return ['title' => $ex['title']];
        }, $valides);
        echo "<pre>";
        echo json_encode(array_values($result), JSON_PRETTY_PRINT);
        echo "</pre>";
        
    } catch (Exception $e) {
        echo "❌ Erreur : " . $e->getMessage() . "<br>";
    }
} else {
    echo "❌ Pas d'ID utilisateur dans la session<br>";
}