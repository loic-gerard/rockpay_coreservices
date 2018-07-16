<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class ClientEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'pk_client'         =>      'id',
        'tt_uid_client'     =>      'uid',
        'tt_nom'            =>      'nom',
        'tt_prenom'         =>      'prenom',
        'id_commande'       =>      'id_commande',
        'tt_codebarre'      =>      'codebarre',
        'tt_speedcodebarre' =>      'speedcodebarre',
        'tt_etatbillet'     =>      'etatbillet',
        'id_billet'         =>      'id_billet',
        'tt_canal'          =>      'canal',
        'bl_valide'         =>      'valide'

    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array('uid');
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_client';
    const DEF_PRIMARYKEY = 'id';

    public static function post( $datas, $fields = '*'){
        if(!isset($datas['uid'])){
            $datas['uid'] = uniqid().md5(rand());
        }

        return parent::_post( $datas, $fields);
    }

    public static function getx( $fields = '*', $orderby = 'id', $ordertype = 'ASC', $limit = 20, $offset = 0, $from = 0, $fromFieldName = null, $jointures = array(), $conditions = array()){
        return parent::_getx( $fields, $orderby, $ordertype, $limit, $offset, $from, $fromFieldName, $jointures, $conditions);
    }

    //-------------------------------------------------------------------------------

    public function __construct( $id = null, $fields = '*', $key = 'id', $entityDefinition = null, $datas = null, $jointures = array(), $conditions = array()){
        parent::__construct( $id,$fields, $key, $entityDefinition, $datas, $jointures, $conditions);
    }

    public function put($datas){
        return parent::_put($datas);
    }

    public function patch($datas){
        return parent::_patch($datas);
    }

    public function output(){
        return parent::output();
    }
    
    
}