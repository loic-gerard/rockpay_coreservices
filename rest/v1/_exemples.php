<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;

/**
 * exemples
 */
class exemples extends RestController{

     /**
     * @api {get} exemples     {get} exemples
     * @apiDescription Retourne une liste de modes de exemples
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=get-exemples">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * 
     * @url GET /exemples
     */
    public function get_exemples(){
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

        $obj = ExempleEntity::getx(
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
     * @api {get} exemples/:id  {get} exemples/:id
     * @apiDescription Retourne un exemple
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=get-exemples/:id">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /exemples/$id
     */
    public function get_exemples_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new ExemplesnEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} exemples     {post} exemples
     * @apiDescription Ajoute un exemple
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=post-exemples">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * 
     * @url POST /exemples
     */
    public function post_exemples(){
        parent::_exec(
            array(
            ), 
            true, 
            'global', 
            null
        );

        $out = ExempleEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} exemples/:id        {patch} exemples/:id
     * @apiDescription Modifie un exemple
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * 
     * @url PATCH /exemples/$id
     */
    public function patch_exemples_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
            ),
            true,
            'global',
            null
        );

        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }


    /**
     * @api {patch} exemples/:id/up     {patch} exemples/:id/up
     * @apiDescription Modifie l'ordre d'un exemple (remonter dans l'ordre)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id/up">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * 
     * @url PATCH /exemples/$id/up
     */
    public function patch_exemples_id_up($id = null){
        parent::_exec(
            array(
               
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
        $obj->up();
        DbConnexion::commitTransaction();
        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
        
        return parent::_response(array('ressource' => $obj->output()));
    }


    /**
     * @api {patch} exemples/:id/down   {patch} exemples/:id/down
     * @apiDescription Modifie l'ordre d'un exemple (descendre dans l'ordre)
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id/down">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * 
     * @url PATCH /exemples/$id/down
     */
    public function patch_exemples_id_down($id = null){
        parent::_exec(
            array(
               
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
        $obj->down();
        DbConnexion::commitTransaction();
        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
        return parent::_response(array('ressource' => $obj->output()));
    }


    /**
     * @api {delete} exemples/:id   {delete} exemples/:id
     * @apiDescription Supprime un exemple 
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=exemples&method=delete-exemples/:id">Executer la méthode</a>
     * @apiGroup exemples
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  delete
     * 
     * @url DELETE /exemples/$id
     */
    public function delete_exemples_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
               
            ),
            true,
            'global',
            null
        );

        DbConnexion::beginTransaction();
        $obj = new ExempleEntity($id, '*',$this->args['key'], null, null);
        $obj->delete();
        DbConnexion::commitTransaction();

        return parent::_response(array('ressource' => $obj->output()));
    }
}