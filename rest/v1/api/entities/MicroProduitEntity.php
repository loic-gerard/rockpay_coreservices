<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class MicroProduitEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'pk_microproduit'        =>      'id',
        'tt_uid_microproduit'    =>      'uid',
        'tt_domaine'             =>      'domaine',
        'tt_designation'         =>      'designation',
        'fl_prix'                =>      'prix',
        'tt_configuration'       =>      'configuration'
    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array('domaine','designation','prix','uid');
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_microproduit';
    const DEF_PRIMARYKEY = 'id';

    public static function post( $datas, $fields = '*'){
        return parent::_post($datas, $fields);
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

    public function delete(){
        return parent::_delete();
    }

    public function output(){
        return parent::output();
    }
    
    
}