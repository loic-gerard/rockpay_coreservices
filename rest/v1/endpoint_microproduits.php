<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\EntityQueryCondition;
use KodoCore\v1\entities\MicroProduitEntity;

/**
 * microproduits
 */
class microproduits extends RestController{

     /**
     * @api {get} microproduits     {get} microproduits
     * @apiDescription Retourne une liste de modes de microproduits (achetable via solution RFID)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=microproduits&method=get-microproduits">Executer la méthode</a>
     * @apiGroup microproduits
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * @apiParam   (QueryString)    {string}    [domaine]   Domaine
     * 
     * @url GET /microproduits
     */
    public function get_microproduits(){
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('ordertype', 'ASC|DESC', false, 'ASC'),
                new RestArgument('limit', RestArgument::TYPE_NUMERIC, false, LIMIT),
                new RestArgument('from', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('offset', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false)
            ), 
            true, 
            'global', 
            null
        );

        $conditions = array();
        if($this->args['domaine']){
            $conditions[] = new EntityQueryCondition('domaine', $this->args['domaine']);
        }

        $obj =  MicroProduitEntity::getx(
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
     * @api {get} microproduits/:id  {get} microproduits/:id
     * @apiDescription Retourne un microproduit
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=microproduits&method=get-microproduits/:id">Executer la méthode</a>
     * @apiGroup microproduits
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /microproduits/$id
     */
    public function get_microproduits_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new MicroProduitEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} microproduits     {post} microproduits
     * @apiDescription Ajoute un microproduit
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=microproduits&method=post-microproduits">Executer la méthode</a>
     * @apiGroup microproduits
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)      {string}    [domaine=default]       Domaine
     * @apiParam    (Body)      {string}    designation             Designation du produit
     * @apiParam    (Body)      {string}    uid                     Code unique
     * @apiParam    (Body)      {integer}   prix                    Prix
     * @apiParam    (Body)      {string}    [configuration={}]      Données complémentaires de configuration (au format JSON)
     * 
     * @url POST /microproduits
     */
    public function post_microproduits(){
        parent::_exec(
            array(
                new RestArgument('domaine', RestArgument::TYPE_STRING, false, 'default'),
                new RestArgument('designation', RestArgument::TYPE_STRING, true),
                new RestArgument('uid', RestArgument::TYPE_STRING, true),
                new RestArgument('prix', RestArgument::TYPE_NUMERIC, true),
                new RestArgument('configuration', RestArgument::TYPE_STRING, false, '{}')
            ), 
            true, 
            'global', 
            null
        );

        $out = MicroProduitEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} microproduits/:id        {patch} microproduits/:id
     * @apiDescription Modifie un microproduit
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=microproduits&method=patch-microproduits/:id">Executer la méthode</a>
     * @apiGroup microproduits
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * @apiParam    (Body)      {string}    [domaine]                 Domaine
     * @apiParam    (Body)      {string}    [designation]             Designation du produit
     * @apiParam    (Body)      {integer}   [prix]                    Prix
     * @apiParam    (Body)      {string}    [configuration]           Données complémentaires de configuration (au format JSON)
     * 
     * @url PATCH /microproduits/$id
     */
    public function patch_microproduits_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false),
                new RestArgument('designation', RestArgument::TYPE_STRING, false),
                new RestArgument('prix', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('configuration', RestArgument::TYPE_STRING, false)
            ),
            true,
            'global',
            null
        );

        $obj = new MicroProduitEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }


    /**
     * @api {delete} microproduits/:id   {delete} microproduits/:id
     * @apiDescription Supprime un microproduit 
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=microproduits&method=delete-microproduits/:id">Executer la méthode</a>
     * @apiGroup microproduits
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /microproduits/$id
     */
    public function delete_microproduits_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new MicroProduitEntity($id, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }
}