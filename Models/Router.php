<?php

class Router {

    protected $routes = [
        '' => 'Views/index.view.php',
        'about' => 'Controllers/about.php',
        'form' => 'Controllers/formController.php',
    ];

    public function register($routes) {
        $this->routes = $routes;
    }

    public function handle($url) {
        if (array_key_exists($url, $this->routes)) {
            return $this->routes[$url];
        }

        die('La ruta no existe.');
    }
}