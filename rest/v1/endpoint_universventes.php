<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\UniversVenteEntity;
use KodoCore\v1\entities\EntityQueryCondition;
use KodoCore\v1\entities\UniversVenteProduitEntity;

/**
 * universventes
 */
class universventes extends RestController{

     /**
     * @api {get} universventes     {get} universventes
     * @apiDescription Retourne une liste d'univers de vente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=get-universventes">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * @apiParam    (QueryString)   {string}    [domaine]       Filtrer par domaine
     * 
     * @url GET /universventes
     */
    public function get_universventes(){
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

        $obj = UniversVenteEntity::getx(
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
     * @api {get} universventes/:id  {get} universventes/:id
     * @apiDescription Retourne un universvente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=get-universventes/:id">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /universventes/$id
     */
    public function get_universventes_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new UniversVenteEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} universventes     {post} universventes
     * @apiDescription Ajoute un universvente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=post-universventes">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)      {string}       designation         Désignation
     * @apiParam    (Body)      {string}       [domaine=default]   Domaine
     * @apiParam    (Body)      {string}       uid                 UID
     * 
     * @url POST /universventes
     */
    public function post_universventes(){
        parent::_exec(
            array(
                new RestArgument('designation', RestArgument::TYPE_STRING, true),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false,'default'),
                new RestArgument('uid', RestArgument::TYPE_STRING, true)
            ), 
            true, 
            'global', 
            null
        );

        $out = UniversVenteEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} universventes/:id        {patch} universventes/:id
     * @apiDescription Modifie un universvente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=patch-universventes/:id">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * @apiParam    (Body)      {string}       [designation]          Désignation
     * @apiParam    (Body)      {string}       [domaine]              Domaine
     * 
     * @url PATCH /universventes/$id
     */
    public function patch_universventes_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('designation', RestArgument::TYPE_STRING, false),
                new RestArgument('domaine', RestArgument::TYPE_STRING, false)
            ),
            true,
            'global',
            null
        );

        $obj = new UniversVenteEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }




    /**
     * @api {delete} universventes/:id   {delete} universventes/:id
     * @apiDescription Supprime un univers de vente 
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=delete-universventes/:id">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /universventes/$id
     */
    public function delete_universventes_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new UniversVenteEntity($id, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }


    /**
     * @api {get} universventes/:id/microproduits     {get} universventes/:id/microproduits
     * @apiDescription Retourne une liste des micros produits en vente dans l'univers de vente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=get-universventes/:id/microproduits">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * 
     * @url GET /universventes/$id/microproduits
     */
    public function get_universventes_id_microproduits($id = null){
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'ordre'),
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
        $conditions[] = new EntityQueryCondition('id_universvente',$id);

        $obj = UniversVenteProduitEntity::getx(
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
     * @api {get} universventes/:iduniversvente/microproduits/:idliaison  {get} universventes/:iduniversvente/microproduits/:idliaison
     * @apiDescription Retourne un microproduit lié à l'univers de vente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=get-universventes/:iduniversvente/microproduits/:idliaison">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /universventes/$i/microproduits/$j
     */
    public function get_universventes_i_microproduits_j($i = null, $j = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} universventes/:id/microproduits  {post} universventes/:id/microproduits
     * @apiDescription Ajoute un microproduit à un univers de vente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=post-universventes/:iduniversvente/microproduits">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)      {integer}      id_microproduit      Micro produit à ajouter
     * 
     * @url POST /universventes/$id/microproduits
     */
    public function post_universventes_id_microproduits($id = null){
        parent::_exec(
            array(
                new RestArgument('id_microproduit', RestArgument::TYPE_NUMERIC, true)
            ), 
            true, 
            'global', 
            null
        );

        $this->args['id_universvente'] = $id;

        $out = UniversVenteProduitEntity::post($this->args, '*');

        return parent::_response($out);
    }


     /**
     * @api {delete} universventes/:iduniversvente/microproduits/:idliaison  {delete} universventes/:iduniversvente/microproduits/:idliaison
     * @apiDescription Supprime un microproduit d'un univers de vente
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=delete-universventes/:iduniversvente/microproduits/:idliaison">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /universventes/$i/microproduits/$j
     */
    public function delete_universventes_id_microproduits_id($i = null, $j){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }


    /**
     * @api {patch} universventes/:iduniversvente/microproduits/:idliaison/up  {patch} universventes/:iduniversvente/microproduits/:idliaison/up
     * @apiDescription Modifie l'ordre d'un produit d'un univers de vente (remonter dans l'ordre)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=patch-universventes/:iduniversvente/microproduits/:idliaison/up">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * 
     * @url PATCH /universventes/$i/microproduits/$j/up
     */
    public function patch_universvente_id_microproduits_id_up($i = null, $j = null){
        parent::_exec(
            array(
               
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);
        $obj->up();
        DbConnexion::commitTransaction();
        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);
        
        return parent::_response(array('ressource' => $obj->output()));
    }


     /**
     * @api {patch} universventes/:iduniversvente/microproduits/:idliaison/down  {patch} universventes/:iduniversvente/microproduits/:idliaison/down
     * @apiDescription Modifie l'ordre d'un produit d'un univers de vente (descendre dans l'ordre)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=universventes&method=patch-universventes/:iduniversvente/microproduits/:idliaison/down">Executer la méthode</a>
     * @apiGroup universventes
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * 
     * @url PATCH /universventes/$i/microproduits/$j/down
     */
    public function patch_universvente_id_microproduits_id_down($i = null, $j = null){
        parent::_exec(
            array(
               
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);
        $obj->down();
        DbConnexion::commitTransaction();
        $obj = new UniversVenteProduitEntity($j, '*',$this->args['key'], null, null);
        
        return parent::_response(array('ressource' => $obj->output()));
    }

}