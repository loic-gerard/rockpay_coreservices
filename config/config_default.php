<?php

//Utilisateurs du service
$utilisateurs = array(
    array(
        'name'      =>  'nomUser',
        'key'       =>  'EDFA5641EFA76E45',
        'groups'    =>  'global'
    ),
);

//Paramètres du serveur
define('SECRETKEY', 'AEDF6743EABD5E98');
define('APPZNAME', 'YZ_CORESERVICES_DEV');

//paramétrage paths
define('APP_ROOTPATH', '/var/www/yz_coreservices/');

//Paramètres sécurité Parser
define('PARSER_SECUREKEY', '67EFd45A5612EdaCfDE676357edaD67eFF');

//paramétrage url
define('APP_URL', 'http://wolfweb.diatem.test/');

//Paramétrage folders (relative)

//paramétrage services
define('LIMIT', 20);

//Paramètres base de données
define('PG_HOST', '127.0.0.1');
define('PG_DBNAME', 'wolfweb');
define('PG_USERNAME', 'postgres');
define('PG_PASSWORD', 'devadmin');
define('PG_PORT', 5432);

//Paramètres de cache
define('CACHE_EXPIRE', '12 hours');
define('CACHE_ENABLED', false);

//Paramètre encryption
define('ENCRYPT_METHOD', 'aes128');
define('ENCRYPT_VECTOR', 'E451aEF78ec651e7');
define('ENCRYPT_PRIVATEKEY', 'EfEA674129785e4590eac545761ea783');
