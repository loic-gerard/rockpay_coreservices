<?php

namespace KodoCore\v1\entities;

use Jin2\Db\Query\Query;
use Jin2\Db\Database\DbConnexion;
use Jin2\Db\Query\QueryResult;
use Jin2\Utils\StringTools;
use \Diatem\RestServer\RestLog;
use KodoCore\v1\SpecificException;

class EntityQueryJoin{

    private $tableName;
    private $fromDbField;
    private $toDbField;
    private $joinType;
    private $alias;
    private $conditions;

    public function __construct($tableName, $fromDbField, $toDbField, $joinType = 'JOIN', $alias = null, $conditions = array()){
        $this->tableName = $tableName;
        $this->fromDbField = $fromDbField;
        $this->toDbField = $toDbField;
        $this->joinType = $joinType;
        $this->alias = $alias;
        $this->conditions = $conditions;
    }

    public function getTableName(){
        return $this->tableName;
    }

    public function getFromDbField(){
        return $this->fromDbField;
    }

    public function getToDbField(){
        return $this->toDbField;
    }

    public function getJoinType(){
        return $this->joinType;
    }

    public function getAlias(){
        return $this->alias;
    }

    public function getConditions(){
        return $this->conditions;
    }
    
}