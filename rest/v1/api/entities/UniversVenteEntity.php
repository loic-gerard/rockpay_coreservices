<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class UniversVenteEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'pk_universvente'        =>      'id',
        'tt_uid_universvente'    =>      'uid',
        'tt_designation'         =>      'designation',
        'tt_domaine'             =>      'domaine'
    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array('domaine','designation','uid');
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_universvente';
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