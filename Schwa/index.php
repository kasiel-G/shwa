<?php
    require 'router/Dbconnection.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Schwa</title>
    <link rel="icon" href="/public/IMG/minilogo.png" type="image/png" style="border-radius: 50%;">
    <link rel="stylesheet" href="/public/css/style.css">
</head>
<body>
    <?php
           require'app/INC/header.php';
    ?>
    <?php
        require'app/INC/main.php';
    ?>
    <?php
        require'app/INC/footer.php';
    ?>

    <script src="public/js/script.js"></script>
    <!-- <script src="public/JS/Api/authenification.js" type="module"></script> -->
</body>
</html>