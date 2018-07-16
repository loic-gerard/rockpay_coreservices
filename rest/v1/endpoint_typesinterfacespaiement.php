<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\TypeInterfacePaiementEntity;

/**
 * typesinterfacespaiement
 */
class typesinterfacespaiement extends RestController{

     /**
     * @api {get} typesinterfacespaiement     {get} typesinterfacespaiement
     * @apiDescription Retourne une liste de types d'interfaces de paiement (un bracelet RFID est un type d'interface de paiement)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=typesinterfacespaiement&method=get-typesinterfacespaiement">Executer la méthode</a>
     * @apiGroup typesinterfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * 
     * @url GET /typesinterfacespaiement
     */
    public function get_typesinterfacespaiement(){
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('ordertype', 'ASC|DESC', false, 'ASC'),
                new RestArgument('limit', RestArgument::TYPE_NUMERIC, false, LIMIT),
                new RestArgument('from', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('offset', RestArgument::TYPE_NUMERIC, false, 0)
            ), 
            true, 
            'global', 
            null
        );

        $obj = TypeInterfacePaiementEntity::getx(
            '*',
            $this->args['orderby'], 
            $this->args['ordertype'],
            $this->args['limit'],
            $this->args['offset'],
            $this->args['from']
        );

        return parent::_response($obj);
    }

    /**
     * @api {get} typesinterfacespaiement/:id  {get} typesinterfacespaiement/:id
     * @apiDescription Retourne un type d'interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=typesinterfacespaiement&method=get-typesinterfacespaiement/:id">Executer la méthode</a>
     * @apiGroup typesinterfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /typesinterfacespaiement/$id
     */
    public function get_typesinterfacespaiement_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new TypeInterfacePaiementEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} typesinterfacespaiement     {post} typesinterfacespaiement
     * @apiDescription Ajoute un type d'interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=typesinterfacespaiement&method=post-typesinterfacespaiement">Executer la méthode</a>
     * @apiGroup typesinterfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)  {string}    uid             UID
     * @apiParam    (Body)  {string}    designation     Désignation
     * 
     * @url POST /typesinterfacespaiement
     */
    public function post_typesinterfacespaiement(){
        parent::_exec(
            array(
                new RestArgument('uid', RestArgument::TYPE_STRING, false, 'uid'),
                new RestArgument('designation', RestArgument::TYPE_STRING, false, 'designation')
            ), 
            true, 
            'global', 
            null
        );

        $out = TypeInterfacePaiementEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} typesinterfacespaiement/:id        {patch} typesinterfacespaiement/:id
     * @apiDescription Modifie un type d'interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=typesinterfacespaiement&method=patch-typesinterfacespaiement/:id">Executer la méthode</a>
     * @apiGroup typesinterfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * @apiParam    (Body)  {string}    designation     Désignation
     * 
     * @url PATCH /typesinterfacespaiement/$id
     */
    public function patch_typesinterfacespaiement_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('designation', RestArgument::TYPE_STRING, true),
            ),
            true,
            'global',
            null
        );

        $obj = new TypeInterfacePaiementEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }



    /**
     * @api {delete} typesinterfacespaiement/:id   {delete} typesinterfacespaiement/:id
     * @apiDescription Supprime un type d'interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=typesinterfacespaiement&method=delete-typesinterfacespaiement/:id">Executer la méthode</a>
     * @apiGroup typesinterfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /typesinterfacespaiement/$id
     */
    public function delete_typesinterfacespaiement_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new TypeInterfacePaiementEntity($id, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }
}