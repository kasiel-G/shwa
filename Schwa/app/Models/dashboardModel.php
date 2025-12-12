<?php 
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION["auth"]["id"])) {
    header("Location: ../../index.php");
    exit;
}

require_once "../../router/Dbconnection.php";
$conn = connection_db();
$userId = $_SESSION["auth"]["id"];

// stats

$sqlPoints = "SELECT SUM(points) as total_points FROM exercices WHERE user_id = ?";
$stmtPoints = $conn->prepare($sqlPoints);
$stmtPoints->execute([$userId]);
$totalPoints = $stmtPoints->fetch(PDO::FETCH_ASSOC)['total_points'] ?? 0;

$sqlValidated = "SELECT COUNT(*) as validated FROM exercices WHERE user_id = ? AND status = 'valide'";
$stmtValidated = $conn->prepare($sqlValidated);
$stmtValidated->execute([$userId]);
$lessonsValidated = $stmtValidated->fetch(PDO::FETCH_ASSOC)['validated'] ?? 0;


$sqlNotValidated = "SELECT COUNT(*) as not_validated FROM exercices WHERE user_id = ? AND status = 'non valide'";
$stmtNotValidated = $conn->prepare($sqlNotValidated);
$stmtNotValidated->execute([$userId]);
$lessonsNotValidated = $stmtNotValidated->fetch(PDO::FETCH_ASSOC)['not_validated'] ?? 0;


$sqlStreak = "SELECT date FROM exercices WHERE user_id = ? ORDER BY date DESC";
$stmtStreak = $conn->prepare($sqlStreak);
$stmtStreak->execute([$userId]);
$dates = $stmtStreak->fetchAll(PDO::FETCH_COLUMN);

$streak = 0;
if (!empty($dates)) {
    $today = new DateTime();
    $yesterday = clone $today;
    $yesterday->modify('-1 day');
    
    $lastDate = new DateTime($dates[0]);
    
    
    if ($lastDate->format('Y-m-d') === $today->format('Y-m-d') || 
        $lastDate->format('Y-m-d') === $yesterday->format('Y-m-d')) {
        
        $streak = 1;
        $previousDate = $lastDate;
        
        foreach (array_slice($dates, 1) as $dateStr) {
            $currentDate = new DateTime($dateStr);
            $diff = $previousDate->diff($currentDate)->days;
            
            if ($diff === 1) {
                $streak++;
                $previousDate = $currentDate;
            } else {
                break;
            }
        }
    }
}
 
$totalLessonsByLevel = [
    'A1' => 19,
    'A2' => 32,
    'B1' => 1
];

$currentLevel = $_SESSION["auth"]["niveau"];
$totalLessonsForLevel = $totalLessonsByLevel[$currentLevel] ?? 20;
$completedLessonsForLevel = $lessonsValidated; 

$progressPercentage = $totalLessonsForLevel > 0 
    ? round(($completedLessonsForLevel / $totalLessonsForLevel) * 100) 
    : 0;

$sqlOngoing = "
    SELECT title, category, level, points, date, status
    FROM exercices 
    WHERE user_id = ? AND status = 'non valide'
    ORDER BY date DESC 
    LIMIT 4
";
$stmtOngoing = $conn->prepare($sqlOngoing);
$stmtOngoing->execute([$userId]);
$ongoingLessons = $stmtOngoing->fetchAll(PDO::FETCH_ASSOC);

$sqlCompleted = "
    SELECT title, category, level, points, date 
    FROM exercices 
    WHERE user_id = ? AND status = 'valide'
    ORDER BY date DESC 
    LIMIT 5
";
$stmtCompleted = $conn->prepare($sqlCompleted);
$stmtCompleted->execute([$userId]);
$completedLessons = $stmtCompleted->fetchAll(PDO::FETCH_ASSOC);

// date 
function timeAgo($datetime) {
    $date = new DateTime($datetime);
    $now = new DateTime();
    $diff = $now->diff($date);
    
    if ($diff->d === 0) {
        return "Aujourd'hui";
    } elseif ($diff->d === 1) {
        return "Hier";
    } elseif ($diff->d < 7) {
        return "Il y a " . $diff->d . " jour" . ($diff->d > 1 ? "s" : "");
    } elseif ($diff->d < 30) {
        $weeks = floor($diff->d / 7);
        return "Il y a " . $weeks . " semaine" . ($weeks > 1 ? "s" : "");
    } else {
        $months = floor($diff->d / 30);
        return "Il y a " . $months . " mois";
    }
}


function calculateLessonProgress($points) {
    $maxPoints = 100; // Point max lesson ray
    return min(100, round(($points / $maxPoints) * 100));
}


function getCategoryPage($category) {
    $pages = [
        'Grammar' => 'grammar.php',
        'Vocabulary' => 'vocabulary.php',
        'Listening' => 'listening.php',
        'Reading' => 'reading.php',
        'Culture' => 'culture.php'
    ];
    return $pages[$category] ?? 'accueil.php';
}

?>