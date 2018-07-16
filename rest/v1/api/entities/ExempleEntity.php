<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class ExempleEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'id_exemple'       =>      'id',
        'uid_exemple'      =>      'uid'

    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array();
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_exemple';
    const DEF_PRIMARYKEY = 'id';

    public static function post( $datas, $fields = '*'){
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

    public function delete(){
        return parent::_delete();
    }

    public function up($field = 'ordre'){
        parent::_up($field);
    }

    public function down($field = 'ordre'){
        parent::_down($field);
    }

    public function output(){
        return parent::output();
    }
    
    
}