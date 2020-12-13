<?php 

// App Core Class
// Create Url & load core controller class
// Url Format  /controller/method/params

class Core{
     protected $currentController = "Page";
     protected $currentMethod     = "index";
     protected $currentParams     = "[]";

     public function __construct(){
          $url = $this->getUrl();
          echo $url;

          // Look in controllers for first value
          if(isset($url) && file_exists('../app/cotrollers/' .ucwords($url[0] .'php'))){
               // if exist, set as controller
               $this->currentController = ucwords($url[0]);
               // Unset 0 index
               unset($url[0]);
          }
          // require the controller
          require_once '../app/controllers/' . $this->currentController.'.php';

          // Instantitate Controller class
          $this->currentController = new $this->currentController;

          // Check Second Part OF Url
          if (isset($url[1])){
               // Check out that method is exist in controller
               if(method_exists($this->currentController , $url[1])){
                    $this->currentMethod = $url[1];
                    unset($ul[1]);
               }
          }
          // get params
          $this->params = $url ? array_values($url):[];
          // call a callback with array params
          call_user_func_array([$this->currentController , $this->currentMethod] , $this->currentParams);
     }

     public function getUrl(){
          if (isset($_GET['url'])){
               $url = rtrim($_GET['url'] , '/');
               $url = filter_var($url , FILTER_SANITIZE_URL);
               $url = explode('/' ,$url);
               return $url;
          }
     }
}