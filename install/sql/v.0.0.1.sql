
CREATE TABLE IF NOT EXISTS `tb_configuration` (
`pk_configuration` int(11) NOT NULL,
  `tt_domaine` varchar(255) DEFAULT 'default',
  `tt_cle` varchar(255) DEFAULT NULL,
  `tt_valeur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_configuration`
 ADD PRIMARY KEY (`pk_configuration`);

ALTER TABLE `tb_configuration`
MODIFY `pk_configuration` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `tb_microproduit` (
`pk_microproduit` int(11) NOT NULL,
  `tt_domaine` varchar(255) DEFAULT 'default',
  `tt_designation` varchar(255) DEFAULT NULL,
  `fl_prix` float DEFAULT '0',
  `tt_configuration` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_microproduit`
 ADD PRIMARY KEY (`pk_microproduit`);

ALTER TABLE `tb_microproduit`
MODIFY `pk_microproduit` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_microproduit` ADD `in_ordre` INT(11) NULL ;
ALTER TABLE `tb_microproduit` ADD `tt_uid_microproduit` VARCHAR(255) NULL , ADD UNIQUE (`tt_uid_microproduit`) ;

CREATE TABLE IF NOT EXISTS `tb_universvente` (
`pk_universvente` int(11) NOT NULL,
  `tt_uid_universvente` varchar(255) DEFAULT NULL,
  `tt_designation` varchar(255) DEFAULT NULL,
  `tt_domaine` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_universvente`
 ADD PRIMARY KEY (`pk_universvente`), ADD UNIQUE KEY `tt_uid_universvente` (`tt_uid_universvente`);

ALTER TABLE `tb_universvente`
MODIFY `pk_universvente` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `tb_universvente_microproduit` (
`pk_universvente_microproduit` int(11) NOT NULL,
  `fk_universvente` int(11) DEFAULT NULL,
  `fk_microproduit` int(11) DEFAULT NULL,
  `in_ordre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_universvente_microproduit`
 ADD PRIMARY KEY (`pk_universvente_microproduit`);

ALTER TABLE `tb_universvente_microproduit`
MODIFY `pk_universvente_microproduit` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `tb_client` (
`pk_client` int(11) NOT NULL,
  `tt_nom` varchar(255) NOT NULL,
  `tt_prenom` varchar(255) NOT NULL,
  `tt_uid_client` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_client`
 ADD PRIMARY KEY (`pk_client`);

ALTER TABLE `tb_client`
MODIFY `pk_client` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `tb_interfacepaiement` (
`pk_interfacepaiement` int(11) NOT NULL,
  `tt_uid_interfacepaiement` varchar(255) NOT NULL,
  `fk_typeinterfacepaiement` int(11) DEFAULT NULL,
  `fk_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_interfacepaiement`
 ADD PRIMARY KEY (`pk_interfacepaiement`), ADD UNIQUE KEY `tt_uid_interfacepaiement` (`tt_uid_interfacepaiement`);

ALTER TABLE `tb_interfacepaiement`
MODIFY `pk_interfacepaiement` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `tb_typeinterfacepaiement` (
`pk_typeinterfacepaiement` int(11) NOT NULL,
  `tt_uid_typeinterfacepaiement` varchar(255) DEFAULT NULL,
  `tt_designation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_typeinterfacepaiement`
 ADD PRIMARY KEY (`pk_typeinterfacepaiement`), ADD UNIQUE KEY `tt_uid_typeinterfacepaiement` (`tt_uid_typeinterfacepaiement`);

ALTER TABLE `tb_typeinterfacepaiement`
MODIFY `pk_typeinterfacepaiement` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tb_client` ADD UNIQUE(`tt_uid_client`);

CREATE TABLE IF NOT EXISTS `tb_interfacepaiement_mouvement` (
`pk_interfacepaiement_mouvement` int(11) NOT NULL,
  `fk_typemouvement` int(11) DEFAULT NULL,
  `fl_montant` float DEFAULT NULL,
  `dt_date` date DEFAULT NULL,
  `fk_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `tb_interfacepaiement_mouvement`
 ADD PRIMARY KEY (`pk_interfacepaiement_mouvement`);

ALTER TABLE `tb_interfacepaiement_mouvement`
MODIFY `pk_interfacepaiement_mouvement` int(11) NOT NULL AUTO_INCREMENT;