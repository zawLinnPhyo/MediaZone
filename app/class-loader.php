<?php
require_once 'config/config.php';


// Autoload LIbraries Classes
spl_autoload_register($classname){
     require_once 'libraries/' . $classname. '.php';
}