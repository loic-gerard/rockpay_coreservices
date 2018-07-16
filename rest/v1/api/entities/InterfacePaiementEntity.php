<?php

namespace KodoCore\v1\entities;

use KodoCore\v1\SpecificException;
use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use \Diatem\RestServer\RestLog;

class InterfacePaiementEntity extends Entity{

    const DEF_ATTRIBUTS = array(
        'pk_interfacepaiement'       =>      'id',
        'tt_uid_interfacepaiement'      =>      'uid',
        'fk_typeinterfacepaiement'      =>      'id_typeinterfacepaiement',
        'fk_client'                     =>      'id_client'

    );
    const DEF_ATTRIBUTS_APPEND = array();
    const DEF_ATTRIBUTS_ADDREQS = array('uid', 'id_typeinterfacepaiement', 'id_client');
    const DEF_ATTRIBUTS_UPDATEREQS = array();
    const DEF_ATTRIBUTS_READONLY = array();
    const DEF_ATTRIBUTS_IGNOREINOUTPUT = array();
    const DEF_TABLE = 'tb_interfacepaiement';
    const DEF_PRIMARYKEY = 'id';

    public static function post( $datas, $fields = '*'){
        DbConnexion::beginTransaction();
        if(!isset($datas['uid'])){
            $datas['uid'] = self::generateUID();
        }
        $ret = parent::_post( $datas, $fields);

        DbConnexion::commitTransaction();
        return $ret;
    }

    public static function generateUID(){
        $chars = array(
            '0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
        );


        $unique = false;
        while(!$unique){
            $code = '';
            for($i = 0; $i <8; $i++){
                $c = $chars[rand(0,count($chars)-1)];
                $code .= $c;
            }

            $q = new Query();
            $q->setRequest('SELECT pk_interfacepaiement FROM tb_interfacepaiement WHERE tt_uid_interfacepaiement=:id');
            $q->argument($code, Query::SQL_STRING, 'id');
            $q->execute();
            $qr = $q->getQueryResults();
            if($qr->count() == 0){
                $unique = true;
                return $code;
            }
        }

    }

    public static function getx( $fields = '*', $orderby = 'id', $ordertype = 'ASC', $limit = 20, $offset = 0, $from = 0, $fromFieldName = null, $jointures = array(), $conditions = array()){
        $jointures[] = new EntityQueryJoin('tb_client', 'pk_client', 'fk_client');
        $jointures[] = new EntityQueryJoin('tb_typeinterfacepaiement', 'pk_typeinterfacepaiement', 'fk_typeinterfacepaiement');
        
        return parent::_getx( $fields, $orderby, $ordertype, $limit, $offset, $from, $fromFieldName, $jointures, $conditions);
    }

    //-------------------------------------------------------------------------------

    public function __construct( $id = null, $fields = '*', $key = 'id', $entityDefinition = null, $datas = null, $jointures = array(), $conditions = array()){
        parent::__construct( $id,$fields, $key, $entityDefinition, $datas, $jointures, $conditions);
    }

    public function output(){
        $datas = parent::output();
        $datas['solde'] = $this->getSolde();

        return $datas;
    }

    public function addMouvement($montant){
        if($montant < 0 && $this->getSolde() < abs($montant)){
            return false;
        }
        $q = new Query();
        $q->setRequest('
        INSERT INTO tb_interfacepaiement_mouvement 
        (fk_interfacepaiement, dt_date, fl_montant) 
        VALUES 
        (:id, Now(), :montant)
        ');
        $q->argument($this->getId(), Query::SQL_NUMERIC, 'id');
        $q->argument($montant, Query::SQL_NUMERIC, 'montant');
        $q->execute();

        return DbConnexion::getLastInsertId('tb_interfacepaiement_mouvement', 'id_interfacepaiement_mouvement');
    }

    public function getSolde(){
        $q = new Query();
        $q->setRequest('SELECT SUM(fl_montant) AS solde 
        FROM tb_interfacepaiement_mouvement 
        WHERE fk_interfacepaiement=:id');
        $q->argument($this->getId(), Query::SQL_NUMERIC, 'id');
        $q->execute();
        $qr = $q->getQueryResults();
        if(is_numeric($qr->getValueAt('solde', 0))){
            return $qr->getValueAt('solde', 0);
        }else{
            return 0;
        }
    }

    
    
    
}