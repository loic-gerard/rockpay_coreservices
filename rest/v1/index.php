<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

require '../../vendor/autoload.php';
require '../../config/config.php';
require '../../config/erreurs.php';
require 'configurations.php';
require 'ping.php';
require 'microproduits.php';
require 'universventes.php';
require 'typesinterfacespaiement.php';
require 'clients.php';
require 'interfacespaiement.php';

use \Diatem\RestServer\services\RestAuthService;
use \Diatem\RestServer\RestServer;
use \Diatem\RestServer\RestConfig;
use Jin2\Db\Database\DbConnexion;

//Connexion à la base de données
DbConnexion::connectWithMySql(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_DBNAME);

//Configuration du serveur
RestConfig::setSecretKey(SECRETKEY);
RestConfig::setAppzName(APPZNAME);

//Configuration des utilisateurs
foreach($utilisateurs AS $utilisateur){
    RestConfig::addUser($utilisateur['name'], $utilisateur['key'], $utilisateur['groups']);
}

//Initialisation des classes
$server = new RestServer('debug');
$server->addClass('\Diatem\RestServer\services\RestAuthService');
$server->addClass('\configurations');
$server->addClass('\ping');
$server->addClass('\microproduits');
$server->addClass('\universventes');
$server->addClass('\typesinterfacespaiement');
$server->addClass('\clients');
$server->addClass('\interfacespaiement');

$server->handle();
