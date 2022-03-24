-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbagencia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbagencia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbagencia` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbagencia` ;

-- -----------------------------------------------------
-- Table `dbagencia`.``
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbagencia`.`` (
  `id_destino` BIGINT NOT NULL AUTO_INCREMENT,
  `cidade` VARCHAR(255) NULL DEFAULT NULL,
  `estado` VARCHAR(255) NULL DEFAULT NULL,
  `nome` VARCHAR(255) NULL DEFAULT NULL,
  `pais` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_destino`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `dbagencia`.`promocoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbagencia`.`promocoes` (
  `id_promocao` BIGINT NOT NULL AUTO_INCREMENT,
  `desconto` DOUBLE NOT NULL,
  `descricao` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_promocao`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
