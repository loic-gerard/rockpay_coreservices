<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class UniversVenteProduitEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'pk_universvente_microproduit'       =>      'id',
        'in_ordre'               =>      'ordre',
        'fk_microproduit'        =>      'id_microproduit',
        'fk_universvente'        =>      'id_universvente',
    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array('ordre','id_microproduit','id_universvente');
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_universvente_microproduit';
    const DEF_PRIMARYKEY = 'id';

    public static function post( $datas, $fields = '*'){
        $q = new Query();
        $q->setRequest('
        SELECT MAX(in_ordre) AS mx 
        FROM tb_universvente_microproduit
        WHERE 
        fk_universvente=:univers
        ');
        $q->argument($datas['id_universvente'],Query::SQL_STRING, 'univers');
        RestLog::addLog($q->getRs());
        $q->execute();
        $qr = $q->getQueryResults();
        $nextOrdre = 1;
        if(is_numeric($qr->getValueAt('mx')) && $qr->getValueAt('mx') > 0){
            $nextOrdre = $qr->getValueAt('mx')+1;
        }
        $datas['ordre'] = $nextOrdre;

        return parent::_post($datas, $fields);
    }

    public static function getx( $fields = '*', $orderby = 'id', $ordertype = 'ASC', $limit = 20, $offset = 0, $from = 0, $fromFieldName = null, $jointures = array(), $conditions = array()){
        $jointures[] = new EntityQueryJoin('tb_microproduit', 'pk_microproduit', 'fk_microproduit');
        $jointures[] = new EntityQueryJoin('tb_universvente', 'pk_universvente', 'fk_universvente');
        
        return parent::_getx( $fields, $orderby, $ordertype, $limit, $offset, $from, $fromFieldName, $jointures, $conditions);
    }

    //-------------------------------------------------------------------------------

    public function __construct( $id = null, $fields = '*', $key = 'id', $entityDefinition = null, $datas = null, $jointures = array(), $conditions = array()){
        $jointures[] = new EntityQueryJoin('tb_microproduit', 'pk_microproduit', 'fk_microproduit');
        $jointures[] = new EntityQueryJoin('tb_universvente', 'pk_universvente', 'fk_universvente');

        parent::__construct( $id,$fields, $key, $entityDefinition, $datas, $jointures, $conditions);
    }

    public function put($datas){
        return parent::_put($datas);
    }

    public function patch($datas){
        return parent::_patch($datas);
    }

    public function up($field = 'ordre'){
        parent::_up($field, 'fk_universvente='.$this->getValue('id_universvente'));
    }

    public function down($field = 'ordre'){
        parent::_down($field, 'fk_universvente='.$this->getValue('id_universvente'));
    }

    public function delete(){
        $q = new Query();
        $q->setRequest('
        UPDATE tb_universvente_microproduit 
        SET in_ordre = in_ordre-1 
        WHERE 
        fk_universvente=:univers 
        AND in_ordre > :ordre
        ');
        $q->argument($this->getValue('id_universvente'), Query::SQL_STRING, 'univers');
        $q->argument($this->getValue('ordre'), Query::SQL_NUMERIC, 'ordre');
        RestLog::addLog($q->getSql());
        $q->execute();

        return parent::_delete();
    }

    public function output(){
        $out = parent::output();

        $obj = new MicroProduitEntity($this->getValue('id_microproduit'));
        $out['microproduit'] = $obj->output();

        return $out;
    }
    
    
}