<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\ConfigurationEntity;
use KodoCore\v1\entities\EntityQueryCondition;

/**
 * configurations
 */
class configurations extends RestController{

     /**
     * @api {get} configurations     {get} configurations
     * @apiDescription Retourne une liste de données de configurations
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=configurations&method=get-configurations">Executer la méthode</a>
     * @apiGroup configurations
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * @apiParam    (QueryString)   {string}    [domaine]       Si transmis filtre par domaine
     * @apiParam    (QueryString)   {string}    [cle]           Si transmis filtre par clé
     * 
     * @url GET /configurations
     */
    public function get_configurations(){
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('ordertype', 'ASC|DESC', false, 'ASC'),
                new RestArgument('limit', RestArgument::TYPE_NUMERIC, false, LIMIT),
                new RestArgument('from', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('offset', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false),
                new RestArgument('cle', RestArgument::TYPE_STRING, false)
            ), 
            true, 
            'global', 
            null
        );

        $conditions = array();
        if($this->args['domaine']){
            $conditions[] = new EntityQueryCondition('domaine', $this->args['domaine']);
        }
        if($this->args['cle']){
            $conditions[] = new EntityQueryCondition('cle', $this->args['cle']);
        }

        $obj = ConfigurationEntity::getx(
            '*',
            $this->args['orderby'], 
            $this->args['ordertype'],
            $this->args['limit'],
            $this->args['offset'],
            $this->args['from'],
            null,
            array(),
            $conditions
        );

        return parent::_response($obj);
    }

    /**
     * @api {get} configurations/:id  {get} configurations/:id
     * @apiDescription Retourne une données de configuration
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=configurations&method=get-configurations/:id">Executer la méthode</a>
     * @apiGroup configurations
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /configurations/$id
     */
    public function get_configurations_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new ConfigurationEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} configurations     {post} configurations
     * @apiDescription Ajoute une donnée de configuration
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=configurations&method=post-configurations">Executer la méthode</a>
     * @apiGroup configurations
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)  {string}    [domaine=default]       Domaine
     * @apiParam    (Body)  {string}    cle                     Clé
     * @apiParam    (Body)  {string}    valeur                  Valeur
     * 
     * @url POST /configurations
     */
    public function post_configurations(){
        parent::_exec(
            array(
                new RestArgument('domaine', RestArgument::TYPE_STRING, false, 'default'),
                new RestArgument('cle', RestArgument::TYPE_STRING, true),
                new RestArgument('valeur', RestArgument::TYPE_STRING, true)
            ), 
            true, 
            'global', 
            null
        );

        $out = ConfigurationEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} configurations/:id        {patch} configurations/:id
     * @apiDescription Modifie une donnée de configuration
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=configurations&method=patch-configurations/:id">Executer la méthode</a>
     * @apiGroup configurations
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * @apiParam    (Body)  {string}    [domaine]       Domaine
     * @apiParam    (Body)  {string}    [cle]           Clé
     * @apiParam    (Body)  {string}    [valeur]        Valeur
     * 
     * @url PATCH /configurations/$id
     */
    public function patch_configurations_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false),
                new RestArgument('cle', RestArgument::TYPE_STRING, false),
                new RestArgument('valeur', RestArgument::TYPE_STRING, false)
            ),
            true,
            'global',
            null
        );

        $obj = new ConfigurationEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }



    /**
     * @api {delete} configurations/:id   {delete} configurations/:id
     * @apiDescription Supprime une donnée de configuration 
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=configurations&method=delete-configurations/:id">Executer la méthode</a>
     * @apiGroup configurations
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /configurations/$id
     */
    public function delete_configurations_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new ConfigurationEntity($id, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }
}