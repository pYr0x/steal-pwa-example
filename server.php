<?php
$root = $_SERVER["DOCUMENT_ROOT"];
$req = $_SERVER["SCRIPT_NAME"];

$lib = null;

function main()
{
    ob_start();
    include("templates/index.php");
    return ob_get_clean();
}

function directoriesLib($file)
{
    global $lib;
    if (!is_null($lib)) {
        return $lib.$file;
    }
    $appPackage = json_decode(file_get_contents($_SERVER["DOCUMENT_ROOT"] . "/public/package.json"));
    $path = "/" . $appPackage->steal->directories->lib . "/";
    if ($_ENV['ENV'] == "production") {
        $lib = "/dist".$path;
    } else {
        $lib = $path;
    }
    return $lib . $file;
}


/**
 * Start routing
 */
if (substr($req, 0, 10) === '/contents/') {
    // api call
    header('Content-Type: application/json');
    $file = basename($req);
    // simple and not secure !
    echo file_get_contents($root . "/services/{$file}.json");

} elseif ($req === '/') {

    echo main();

} elseif (preg_match('/\.([a-z]+)$/', $req)) {
    // rewrite all that's a file to public/FILE
    $public = $root . '/public';
    $folder = dirname($req);
    $file = basename($req);
    $path = realpath($public . $folder);
    if (strpos($public, $path) == 0) { // do not break out of the public folder
        $file = $path . '/' . $file;
        $ext = pathinfo($file, PATHINFO_EXTENSION);

        // since we have only 5 asset types, we take it easy
        $mimeTypes = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'svg' => 'image/svg+xml',
            'json' => 'application/json',
            'stache' => 'application/octet-stream'
        ];

        if (file_exists($file)) {
            header("Content-Type: {$mimeTypes[$ext]}");
            header('Content-Length: ' . filesize($file));
            return readfile($file);
        }
    }
    header('HTTP/1.0 404 Not Found');

} elseif ($req[0] === '/' AND strlen($req) > 1) {
    echo main();
}
exit;