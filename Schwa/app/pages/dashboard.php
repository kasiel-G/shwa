<?php
require_once "../Models/dashboardModel.php";
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Mon Profil</title>
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="stylesheet" href="css/grammar.css">
    <link rel="stylesheet" href="css/darkmode.css">
</head>
<body>
    <?php require "../INC/hearder2.php"; ?>

    <div class="dashboard-container">
        <!-- Section Profil -->
        <div class="profile-section">
            <div class="profile-header">
                <div class="profile-photo-wrapper">
                    <img src="<?= htmlspecialchars($userPhoto) ;?>" alt="Photo de profil" id="profileImage" class="profile-photo">
                    <div class="photo-overlay">
                        <label for="photoUpload" class="upload-label">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <span>Changer</span>
                        </label>
                        <input type="file" id="photoUpload" accept="image/*" style="display: none;">
                    </div>
                </div>
                <div class="profile-info">
                    <h2 class="profile-name"><?= htmlspecialchars($_SESSION["auth"]["nom"] . " " . $_SESSION["auth"]["prenom"]) ;?></h2>
                    <p class="profile-email"><?= htmlspecialchars($_SESSION["auth"]["email"]) ;?></p>
                    <div class="level-badge">
                        <span class="level-text"><?= htmlspecialchars($_SESSION["auth"]["niveau"]) ;?></span>
                    </div>
                </div>
            </div>

            <!-- Statistiques -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">🎯</div>
                    <div class="stat-info">
                        <h3><?= $totalPoints ?></h3>
                        <p>Points Total</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-info">
                        <h3><?= $lessonsValidated ?></h3>
                        <p>Leçons validées</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📚</div>
                    <div class="stat-info">
                        <h3><?= $lessonsNotValidated ?></h3>
                        <p>Leçons Non validées</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-info">
                        <h3><?= $streak ?></h3>
                        <p>Jours de Suite</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Progression par niveau -->
        <div class="progress-section">
            <h3 class="section-title">Progression du Niveau <?= htmlspecialchars($currentLevel) ;?></h3>
            <div class="progress-bar-wrapper">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: <?= $progressPercentage ?>%;">
                        <span class="progress-text"><?= $progressPercentage ?>%</span>
                    </div>
                </div>
                <p class="progress-description"><?= $completedLessonsForLevel ?> leçons sur <?= $totalLessonsForLevel ?> complétées</p>
            </div>
        </div>

        <!-- Leçons en cours -->
        <div class="lessons-section">
            <h3 class="section-title">Dernières Leçons en cours</h3>
            <div class="lessons-grid">
                <?php if (empty($ongoingLessons)): ?>
                    <p style="grid-column: 1/-1; text-align: center; color: #666;">Aucune leçon en cours. Commencez une nouvelle leçon !</p>
                <?php else: ?>
                    <?php foreach ($ongoingLessons as $lesson): 
                        $progress = calculateLessonProgress($lesson['points']);
                        $levelClass = strtolower($lesson['level']);
                        $page = getCategoryPage($lesson['category']);
                        $stat = $lesson['status']
                    ?>
                        <div class="lesson-card-dashboard ongoing">
                            <div class="lesson-header">
                                <span class="lesson-badge <?= $levelClass ?>"><?= htmlspecialchars($lesson['level']) ?></span>
                                <span class="lesson-progress-badge"><?= $progress ?>%</span>
                            </div>
                            <h4><?= htmlspecialchars($lesson['title']) ?></h4>
                            <p class="lesson-category"><?= htmlspecialchars($lesson['category']) ?> <span style="font-weight: bold; color:red"> (<?= htmlspecialchars($lesson['status'])  ;?>)</span></p>
                            <div class="lesson-progress-bar">
                                <div class="lesson-progress-fill" style="width: <?= $progress ?>%;"></div>
                            </div>
                            <button class="continue-btn" onclick="location.href='<?= $page ?>'">Continuer</button>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>

        <!-- Leçons terminées -->
        <div class="lessons-section">
            <h3 class="section-title">Leçons Terminées Récemment</h3>
            <div class="completed-list">
                <?php if (empty($completedLessons)): ?>
                    <p style="text-align: center; color: #666;">Aucune leçon terminée pour le moment.</p>
                <?php else: ?>
                    <?php foreach ($completedLessons as $lesson): 
                        $levelClass = strtolower($lesson['level']);
                        $timeAgo = timeAgo($lesson['date']);
                    ?>
                        <div class="completed-item">
                            <div class="completed-icon">✓</div>
                            <div class="completed-info">
                                <h4><?= htmlspecialchars($lesson['title']) ?></h4>
                                <p class="completed-meta">
                                    <span class="level-tag <?= $levelClass ?>"><?= htmlspecialchars($lesson['level']) ?></span>
                                    <span class="category-tag"><?= htmlspecialchars($lesson['category']) ?></span>
                                    <span class="date-tag"><?= $timeAgo ?></span>
                                </p>
                            </div>
                            <div class="completed-score">
                                <span class="points">+<?= $lesson['points'] ?> pts</span>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>

        <!-- Badges et réalisations -->
        <div class="achievements-section">
            <h3 class="section-title">Badges Obtenus</h3>
            <div class="badges-grid">
                <div class="badge-item <?= $lessonsValidated >= 1 ? 'earned' : 'locked' ?>">
                    <div class="badge-icon">🌟</div>
                    <p>Première Leçon</p>
                </div>
                <div class="badge-item <?= $lessonsValidated >= 10 ? 'earned' : 'locked' ?>">
                    <div class="badge-icon">📖</div>
                    <p>10 Leçons</p>
                </div>
                <div class="badge-item <?= $streak >= 7 ? 'earned' : 'locked' ?>">
                    <div class="badge-icon">🔥</div>
                    <p>7 Jours Consécutifs</p>
                </div>
                <div class="badge-item <?= $lessonsValidated >= 20 ? 'earned' : 'locked' ?>">
                    <div class="badge-icon">🏆</div>
                    <p>20 Leçons</p>
                </div>
                <div class="badge-item <?= $currentLevel === 'B2' || $currentLevel === 'C1' || $currentLevel === 'C2' ? 'earned' : 'locked' ?>">
                    <div class="badge-icon">💎</div>
                    <p>Niveau B2</p>
                </div>
            </div>
        </div>
    </div>

    <?php require "../INC/footer.php"; ?>

    <script src="js/darkmode.js"></script>
    <script src="js/dashboard.js"></script>
</body>
</html>