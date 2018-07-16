<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;

/**
 * ping
 */
class ping extends RestController{

     /**
     * @api {get} ping     {get} ping
     * @apiDescription Ping la connexion aux services KODO
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=ping&method=get-ping">Executer la méthode</a>
     * @apiGroup ping
     * @apiVersion 1.0.0
     *
     * @apiUse  default
     * 
     * @url GET /ping
     */
    public function get_ping(){
        parent::_exec(
            array(
            ),
            false, 
            'global', 
            null
        );


        return parent::_response(array('ok' => true));
    }


     /**
     * @api {get} securedping     {get} securedping
     * @apiDescription Ping la connexion sécurisée aux services KODO
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=ping&method=get-securedping">Executer la méthode</a>
     * @apiGroup ping
     * @apiVersion 1.0.0
     *
     * @apiUse  default
     * 
     * @url GET /securedping
     */
    public function get_securedping(){
        parent::_exec(
            array(
            ),
            true, 
            'global', 
            null
        );


        return parent::_response(array('ok' => true));
    }
}