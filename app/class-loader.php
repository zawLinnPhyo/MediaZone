<?php
require_once 'config/config.php';


// Autoload LIbraries Classes
spl_autoload_register(function ($classname){
     require_once 'libraries/' . $classname. '.php';
});
