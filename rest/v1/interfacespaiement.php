<?php
use \Diatem\RestServer\RestException;
use \Diatem\RestServer\RestController;
use \Diatem\RestServer\RestArgument;
use \Diatem\RestServer\RestLog;
use Jin2\Db\Database\DbConnexion;
use KodoCore\v1\entities\InterfacePaiementEntity;
use KodoCore\v1\entities\InterfacePaiementMouvementEntity;
use KodoCore\v1\entities\EntityQueryCondition;

/**
 * interfacespaiement
 */
class interfacespaiement extends RestController
{

    /**
     * @api {get} interfacespaiement     {get} interfacespaiement
     * @apiDescription Retourne une liste d'interfaces de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=interfacespaiement&method=get-interfacespaiement">Executer la méthode</a>
     * @apiGroup interfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * @apiParam    (QueryString)   {integer}   [id_client]     Identifiant numérique client. Si transmis filtre sur un client
     * @apiParam    (QueryString)   {integer}   [id_typeinterfacepaiement]      Identifiant numérique type interface paiement. Si transmis filtre sur un type d'interface de paiement
     * 
     * @url GET /interfacespaiement
     */
    public function get_interfacespaiement()
    {
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('ordertype', 'ASC|DESC', false, 'ASC'),
                new RestArgument('limit', RestArgument::TYPE_NUMERIC, false, LIMIT),
                new RestArgument('from', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('offset', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('id_client', RestArgument::TYPE_NUMERIC, false),
                new RestArgument('id_typeinterfacepaiement', RestArgument::TYPE_NUMERIC, false)
            ),
            true,
            'global',
            null
        );

        $conditions = array();
        if ($this->args['id_client']) {
            $conditions[] = new EntityQueryCondition('id_client', $this->args['id_client']);
        }
        if ($this->args['id_typeinterfacepaiement']) {
            $conditions[] = new EntityQueryCondition('id_typeinterfacepaiement', $this->args['id_typeinterfacepaiement']);
        }

        $obj = InterfacePaiementEntity::getx(
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
     * @api {get} interfacespaiement/:id  {get} interfacespaiement/:id
     * @apiDescription Retourne une interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=interfacespaiement&method=get-interfacespaiement/:id">Executer la méthode</a>
     * @apiGroup interfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     * 
     * @apiUse  default
     * @apiUse  getId
     * 
     * @url GET /interfacespaiement/$id
     */
    public function get_interfacespaiement_id($id = null)
    {
        parent::_exec(
            array(
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id')
            ),
            true,
            'global',
            null
        );

        $obj = new InterfacePaiementEntity($id, '*', $this->args['key'], null, null);

        return parent::_response(array('ressource' => $obj->output()));

    }


    /**
     * @api {post} interfacespaiement     {post} interfacespaiement
     * @apiDescription Ajoute une interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=interfacespaiement&method=post-interfacespaiement">Executer la méthode</a>
     * @apiGroup interfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  post
     * @apiParam    (QueryString)   {integer}   id_client     Identifiant numérique client.
     * @apiParam    (QueryString)   {integer}   id_typeinterfacepaiement      Identifiant numérique type interface paiement. 
     * @apiParam    (QueryString)   {string}   [uid]            Clé unique. Si non transmis le système en génère une.
     * 
     * 
     * @url POST /interfacespaiement
     */
    public function post_interfacespaiement()
    {
        parent::_exec(
            array(
                new RestArgument('id_client', RestArgument::TYPE_NUMERIC, true),
                new RestArgument('id_typeinterfacepaiement', RestArgument::TYPE_NUMERIC, true),
                new RestArgument('uid', RestArgument::TYPE_NUMERIC, false)
            ),
            true,
            'global',
            null
        );

        $out = InterfacePaiementEntity::post($this->args, '*');

        return parent::_response($out);
    }


    /**
     * @api {post} interfacespaiement/:id/mouvements     {post} interfacespaiement/:id/mouvements
     * @apiDescription Ajoute un mouvement à une interface de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=interfacespaiement&method=post-interfacespaiement/:id/mouvements">Executer la méthode</a>
     * @apiGroup interfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default_post
     * @apiUse  key
     * @apiParam    (QueryString)   {integer}   montant     Montant du mouvement
     * 
     * @url POST /interfacespaiement/$id/mouvements
     */
    public function post_interfacespaiement_id_mouvements($id)
    {
        parent::_exec(
            array(
                new RestArgument('montant', RestArgument::TYPE_NUMERIC, true),
                new RestArgument('key', RestArgument::TYPE_STRING, false, 'id'),
            ),
            true,
            'global',
            null
        );

        $obj = new InterfacePaiementEntity($id, '*', $this->args['key'], null, null);
        $success = $obj->addMouvement($this->args['montant']);

        if ($success) {
            return parent::_response(array('success' => true, 'id_interfacepaiement_mouvement' => $success, 'restant' => $obj->getSolde()));
        } else {
            return parent::_response(array('success' => false, 'restant' => $obj->getSolde()));
        }

    }


    /**
     * @api {get} interfacespaiement/:id/mouvements     {get} interfacespaiement/:id/mouvements
     * @apiDescription Retourne une liste de logs de paiement
     * <br/><a target="_blank" href="../../../parser/index.php?endpoint=interfacespaiement&method=get-interfacespaiement/:id/mouvements">Executer la méthode</a>
     * @apiGroup interfacespaiement
     * @apiVersion 1.0.0
     * @apiPermission global
     *
     * @apiUse  default
     * @apiUse  getX
     * 
     * @url GET /interfacespaiement/$id/mouvements
     */
    public function get_interfacespaiement_id_mouvements($id)
    {
        parent::_exec(
            array(
                new RestArgument('nocache', RestArgument::TYPE_BOOL, false, false),
                new RestArgument('orderby', RestArgument::TYPE_STRING, false, 'id'),
                new RestArgument('ordertype', 'ASC|DESC', false, 'ASC'),
                new RestArgument('limit', RestArgument::TYPE_NUMERIC, false, LIMIT),
                new RestArgument('from', RestArgument::TYPE_NUMERIC, false, 0),
                new RestArgument('offset', RestArgument::TYPE_NUMERIC, false, 0),
            ),
            true,
            'global',
            null
        );

        $conditions = array();
        $conditions[] = new EntityQueryCondition('fk_interfacepaiement', $id);

        $obj = InterfacePaiementMouvementEntity::getx(
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



}