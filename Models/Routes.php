<?php

//require 'Models/Router.php';

class Routes {
    protected $routes = [
        '' => 'Views/index.view.php',
        'about' => 'src/Controllers/about.php',
        'form' => 'src/Controllers/formController.php',
    ];

    public function getRoutes() {
        return $this->routes;
    }
}