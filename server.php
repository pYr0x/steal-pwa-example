<?php
$root = $_SERVER["DOCUMENT_ROOT"];
$req = $_SERVER["SCRIPT_NAME"];

if(substr($req, 0, 10) === '/contents/'){
    // api call
    header('Content-Type: application/json');
    $file = basename($req);
    // simple and not secure !
    $data = file_get_contents($root."/services/{$file}.json");
    echo $data;

}elseif($req === '/') {
    include "public/index.html";

}elseif(preg_match('/\.([a-z]+)$/', $req)){
    // rewrite all that's a file to public/FILE
    $public = $root.'/public';
    $folder = dirname($req);
    $file = basename($req);
    $path = realpath($public.$folder);
    if(strpos($public, $path) == 0){ // do not break out of the public folder
        $file = $path.'/'.$file;
        $ext = pathinfo($file, PATHINFO_EXTENSION);

        // since we have only 3 asset types, we take it easy
        $mimeTypes = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'svg' => 'image/svg+xml'
        ];

        if(file_exists($file)){
            header("Content-Type: {$mimeTypes[$ext]}");

            $data = file_get_contents($file);
            echo $data;
            exit;
        }
    }
    header('HTTP/1.0 404 Not Found');

}elseif($req[0] === '/' AND strlen($req) > 1){
    include "public/index.html";
}
exit;