<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\ClientEntity;

/**
 * clients
 */
class clients extends RestController{

     /**
     * @api {get} clients     {get} clients
     * @apiDescription Retourne une liste de clients
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=clients&method=get-clients">Executer la méthode</a>
     * @apiGroup clients
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * 
     * @url GET /clients
     */
    public function get_clients(){
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

        $obj = ClientEntity::getx(
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
     * @api {get} clients/:id  {get} clients/:id
     * @apiDescription Retourne un client
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=clients&method=get-clients/:id">Executer la méthode</a>
     * @apiGroup clients
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /clients/$id
     */
    public function get_clients_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new ClientEntity($id, '*',$this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} clients     {post} clients
     * @apiDescription Ajoute un client
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=clients&method=post-clients">Executer la méthode</a>
     * @apiGroup clients
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (Body)      {string}    [uid]               Clé unique. Si non transmis créé une clé unique
     * @apiParam    (Body)      {string}    [nom]               Nom
     * @apiParam    (Body)      {string}    [prenom]            Prénom
     * @apiParam    (Body)      {integer}   [id_commande]       Identifiant numérique commande web
     * @apiParam    (Body)      {string}    [codebarre]         Code barre du billet associé
     * @apiParam    (Body)      {string}    [speedcodebarre]    Speed code barre du billet associé
     * @apiParam    (Body)      {integer}   [id_billet]         Identifiant numérique du billet associé
     * @apiParam    (Body)      {string}    [etatbillet]        Code état billet
     * @apiparam    (Body)      {string}    [canal]             Code canal de vente
     * @apiparam    (Body)      {boolean}   [valide=true]       Validité du client/billet
     * 
     * 
     * @url POST /clients
     */
    public function post_clients(){
        parent::_exec(
            array(
                new RestArgument('uid', RestArgument::TYPE_STRING, false),
                new RestArgument('nom', RestArgument::TYPE_STRING, false),
                new RestArgument('prenom', RestArgument::TYPE_STRING, false),
                new RestArgument('id_commande', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('codebarre', RestArgument::TYPE_STRING, false),
                new RestArgument('speedcodebarre', RestArgument::TYPE_STRING, false),
                new RestArgument('id_billet', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('etatbillet', RestArgument::TYPE_STRING, false),
                new RestArgument('canal', RestArgument::TYPE_STRING, false),
                new RestArgument('valide', RestArgument::TYPE_BOOL, false, true)
            ), 
            true, 
            'global', 
            null
        );

        $out = ClientEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {patch} clients/:id        {patch} clients/:id
     * @apiDescription Modifie un client
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=clients&method=patch-clients/:id">Executer la méthode</a>
     * @apiGroup clients
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  patch
     * @apiParam    (Body)      {string}    [nom]       Nom
     * @apiParam    (Body)      {string}    [prenom]    Prénom
     * @apiParam    (Body)      {integer}   [id_commande]       Identifiant numérique commande web
     * @apiParam    (Body)      {string}    [codebarre]         Code barre du billet associé
     * @apiParam    (Body)      {string}    [speedcodebarre]    Speed code barre du billet associé
     * @apiParam    (Body)      {integer}   [id_billet]         Identifiant numérique du billet associé
     * @apiParam    (Body)      {string}    [etatbillet]        Code état billet
     * @apiparam    (Body)      {string}    [canal]             Code canal de vente
     * @apiparam    (Body)      {boolean}   [valide=true]       Validité du client/billet
     * 
     * @url PATCH /clients/$id
     */
    public function patch_clients_id($id = null){
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('nom', RestArgument::TYPE_STRING, false),
                new RestArgument('prenom', RestArgument::TYPE_STRING, false),
                new RestArgument('id_commande', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('codebarre', RestArgument::TYPE_STRING, false),
                new RestArgument('speedcodebarre', RestArgument::TYPE_STRING, false),
                new RestArgument('id_billet', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('etatbillet', RestArgument::TYPE_STRING, false),
                new RestArgument('canal', RestArgument::TYPE_STRING, false),
                new RestArgument('valide', RestArgument::TYPE_BOOL, false, true)        
            ),
            true,
            'global',
            null
        );

        $obj = new ClientEntity($id, '*',$this->args['key'], null, null);
       
        return parent::_response( $obj->patch($this->args));
    }


    



}