<?php

//require 'vendor/autoload.php';
require 'Routes/routes.php';

$router = new Router;
$router->register($routes);
$url = trim($_SERVER['REQUEST_URI'], '/');
//die(var_dump($router));
require $router->handle($url);