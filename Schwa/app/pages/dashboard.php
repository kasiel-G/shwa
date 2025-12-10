<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Mon Profil</title>
    <link rel="stylesheet" href="css/dashboard.css">
    <!-- <link rel="stylesheet" href="css/profile.css"> -->
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
                    <img src="../../public/IMG/logo.png" alt="Photo de profil" id="profileImage" class="profile-photo">
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
                    <h2 class="profile-name"><?= $_SESSION["auth"]["nom"] . " " . $_SESSION["auth"]["prenom"];?></h2>
                    <p class="profile-email"><?=  $_SESSION["auth"]["email"]  ;?></p>
                    <div class="level-badge">
                        <span class="level-text"><?= $_SESSION["auth"]["niveau"] ;?></span>
                    </div>
                </div>
            </div>

            <!-- Statistiques -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">🎯</div>
                    <div class="stat-info">
                        <h3>850</h3>
                        <p>Points Total</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-info">
                        <h3>12</h3>
                        <p>Leçons validées</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📚</div>
                    <div class="stat-info">
                        <h3>5</h3>
                        <p>Leçons Non validées</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-info">
                        <h3>7</h3>
                        <p>Jours de Suite</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Progression par niveau -->
        <div class="progress-section">
            <h3 class="section-title">Progression du Niveau <?= $_SESSION["auth"]["niveau"] ;?></h3>
            <div class="progress-bar-wrapper">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 65%;">
                        <span class="progress-text">65%</span>
                    </div>
                </div>
                <p class="progress-description">13 leçons sur 20 complétées</p>
            </div>
        </div>

        <!-- Leçons en cours -->
        <div class="lessons-section">
            <h3 class="section-title">Dernieres Leçons</h3>
            <div class="lessons-grid">
                <div class="lesson-card-dashboard ongoing">
                    <div class="lesson-header">
                        <span class="lesson-badge b1">B1</span>
                        <span class="lesson-progress-badge">60%</span>
                    </div>
                    <h4>Present Perfect Tense</h4>
                    <p class="lesson-category">Grammar</p>
                    <div class="lesson-progress-bar">
                        <div class="lesson-progress-fill" style="width: 60%;"></div>
                    </div>
                    <button class="continue-btn" onclick="location.href='grammar.php'">Continuer</button>
                </div>

                <div class="lesson-card-dashboard ongoing">
                    <div class="lesson-header">
                        <span class="lesson-badge b1">B1</span>
                        <span class="lesson-progress-badge">40%</span>
                    </div>
                    <h4>Business Vocabulary</h4>
                    <p class="lesson-category">Vocabulary</p>
                    <div class="lesson-progress-bar">
                        <div class="lesson-progress-fill" style="width: 40%;"></div>
                    </div>
                    <button class="continue-btn" onclick="location.href='vocabulary.php'">Continuer</button>
                </div>

                <div class="lesson-card-dashboard ongoing">
                    <div class="lesson-header">
                        <span class="lesson-badge a2">A2</span>
                        <span class="lesson-progress-badge">80%</span>
                    </div>
                    <h4>Daily Conversations</h4>
                    <p class="lesson-category">Listening</p>
                    <div class="lesson-progress-bar">
                        <div class="lesson-progress-fill" style="width: 80%;"></div>
                    </div>
                    <button class="continue-btn" onclick="location.href='listening.php'">Continuer</button>
                </div>
            </div>
        </div>

        <!-- Leçons terminées -->
        <div class="lessons-section">
            <h3 class="section-title">Leçons Terminées Récemment</h3>
            <div class="completed-list">
                <div class="completed-item">
                    <div class="completed-icon">✓</div>
                    <div class="completed-info">
                        <h4>Past Simple vs Past Continuous</h4>
                        <p class="completed-meta">
                            <span class="level-tag b1">B1</span>
                            <span class="category-tag">Grammar</span>
                            <span class="date-tag">Il y a 2 jours</span>
                        </p>
                    </div>
                    <div class="completed-score">
                        <span class="points">+50 pts</span>
                    </div>
                </div>

                <div class="completed-item">
                    <div class="completed-icon">✓</div>
                    <div class="completed-info">
                        <h4>Idioms and Expressions</h4>
                        <p class="completed-meta">
                            <span class="level-tag b1">B1</span>
                            <span class="category-tag">Vocabulary</span>
                            <span class="date-tag">Il y a 3 jours</span>
                        </p>
                    </div>
                    <div class="completed-score">
                        <span class="points">+45 pts</span>
                    </div>
                </div>

                <div class="completed-item">
                    <div class="completed-icon">✓</div>
                    <div class="completed-info">
                        <h4>British Culture & Traditions</h4>
                        <p class="completed-meta">
                            <span class="level-tag a2">A2</span>
                            <span class="category-tag">Culture</span>
                            <span class="date-tag">Il y a 5 jours</span>
                        </p>
                    </div>
                    <div class="completed-score">
                        <span class="points">+40 pts</span>
                    </div>
                </div>

                <div class="completed-item">
                    <div class="completed-icon">✓</div>
                    <div class="completed-info">
                        <h4>Reading Comprehension: News Articles</h4>
                        <p class="completed-meta">
                            <span class="level-tag b1">B1</span>
                            <span class="category-tag">Reading</span>
                            <span class="date-tag">Il y a 1 semaine</span>
                        </p>
                    </div>
                    <div class="completed-score">
                        <span class="points">+55 pts</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Badges et réalisations -->
        <div class="achievements-section">
            <h3 class="section-title">Badges Obtenus</h3>
            <div class="badges-grid">
                <div class="badge-item earned">
                    <div class="badge-icon">🌟</div>
                    <p>Première Leçon</p>
                </div>
                <div class="badge-item earned">
                    <div class="badge-icon">📖</div>
                    <p>10 Leçons</p>
                </div>
                <div class="badge-item earned">
                    <div class="badge-icon">🔥</div>
                    <p>7 Jours Consécutifs</p>
                </div>
                <div class="badge-item locked">
                    <div class="badge-icon">🏆</div>
                    <p>20 Leçons</p>
                </div>
                <div class="badge-item locked">
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