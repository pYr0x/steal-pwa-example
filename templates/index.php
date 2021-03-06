<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>StealJS PWA</title>
    <meta name="description" content="StealJS PWA example">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="<?= directoriesLib('styles.css') ?>" as="style">
    <link rel="stylesheet" href="<?= directoriesLib('styles.css') ?>">
</head>
<body>

... Loading


<? if ($_ENV['ENV'] === "production"): ?>

<script src="/dist/steal-sans-promises.production.js"></script>

<?  else:  ?>

<script src="/node_modules/steal/steal-sans-promises.js" main="steal-pwa-example/index.stache!done-autorender/no-zone"></script>

<? endif ?>

</body>
</html>