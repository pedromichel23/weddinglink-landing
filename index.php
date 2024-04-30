<?php

require 'Models/Router.php';
$router = new Router;
//$router->register($routes->getRoutes());
$url = trim($_SERVER['REQUEST_URI'], '/');
//die(var_dump($router));
//die(var_dump($url));
//die(var_dump($router->handle($url)));

//esto es igual a require Views/index.view.php o la ruta seleccionada
require $router->handle($url);