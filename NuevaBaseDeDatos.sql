CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 5.7.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bodega`
--

DROP TABLE IF EXISTS `bodega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodega` (
  `obra_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL,
  KEY `fk_obra_has_material_material1_idx` (`material_id`),
  KEY `fk_obra_has_material_obra1_idx` (`obra_id`),
  CONSTRAINT `fk_obra_has_material_material1` FOREIGN KEY (`material_id`) REFERENCES `material` (`id_material`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_obra_has_material_obra1` FOREIGN KEY (`obra_id`) REFERENCES `obra` (`id_obra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodega`
--

LOCK TABLES `bodega` WRITE;
/*!40000 ALTER TABLE `bodega` DISABLE KEYS */;
/*!40000 ALTER TABLE `bodega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodega central`
--

DROP TABLE IF EXISTS `bodega central`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodega central` (
  `material_id` int(11) DEFAULT NULL,
  `bodeguero central_id` int(11) DEFAULT NULL,
  KEY `fk_material_has_bodeguero central_bodeguero central1_idx` (`bodeguero central_id`),
  KEY `fk_material_has_bodeguero central_material1_idx` (`material_id`),
  CONSTRAINT `fk_material_has_bodeguero central_bodeguero central1` FOREIGN KEY (`bodeguero central_id`) REFERENCES `bodeguero central` (`id_bodeguero_central`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_material_has_bodeguero central_material1` FOREIGN KEY (`material_id`) REFERENCES `material` (`id_material`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodega central`
--

LOCK TABLES `bodega central` WRITE;
/*!40000 ALTER TABLE `bodega central` DISABLE KEYS */;
/*!40000 ALTER TABLE `bodega central` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodeguero central`
--

DROP TABLE IF EXISTS `bodeguero central`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodeguero central` (
  `id_bodeguero_central` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_bodeguero_central`),
  KEY `fk_bodeguero central_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_bodeguero central_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodeguero central`
--

LOCK TABLES `bodeguero central` WRITE;
/*!40000 ALTER TABLE `bodeguero central` DISABLE KEYS */;
INSERT INTO `bodeguero central` VALUES (1,5);
/*!40000 ALTER TABLE `bodeguero central` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bodeguero de obra`
--

DROP TABLE IF EXISTS `bodeguero de obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bodeguero de obra` (
  `id_bodeguero_obra` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_bodeguero_obra`),
  KEY `fk_bodeguero de obra_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_bodeguero de obra_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bodeguero de obra`
--

LOCK TABLES `bodeguero de obra` WRITE;
/*!40000 ALTER TABLE `bodeguero de obra` DISABLE KEYS */;
INSERT INTO `bodeguero de obra` VALUES (1,2),(2,3),(3,4),(4,7),(5,8),(6,9),(7,10);
/*!40000 ALTER TABLE `bodeguero de obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encargado de compra`
--

DROP TABLE IF EXISTS `encargado de compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encargado de compra` (
  `id_encargado_compra` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_encargado_compra`),
  KEY `fk_encargado de compra_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_encargado de compra_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encargado de compra`
--

LOCK TABLES `encargado de compra` WRITE;
/*!40000 ALTER TABLE `encargado de compra` DISABLE KEYS */;
INSERT INTO `encargado de compra` VALUES (1,6);
/*!40000 ALTER TABLE `encargado de compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `material` (
  `id_material` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Cantidad` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_material`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,'material 1','1','obra 1'),(2,'material 2','1','obra 1'),(3,'material 3','1','obra 1'),(4,'material 4','1','obra 1'),(5,'material 5','1','obra 1'),(6,'material 6','1','obra 2'),(7,'material 7','1','obra 2'),(8,'material 8','1','obra 2'),(9,'material 9','1','obra 2'),(10,'material 10','1','obra 2'),(11,'material 11','1','obra 3'),(12,'material 12','1','obra 3'),(13,'material 13','1','obra 3'),(14,'material 14','1','obra 3'),(15,'material 15','1','obra 3');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_compra`
--

DROP TABLE IF EXISTS `material_compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `material_compra` (
  `solicitud de compra_id` int(11) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Cantidad` varchar(45) DEFAULT NULL,
  KEY `fk_material_compra_solicitud de compra1` (`solicitud de compra_id`),
  CONSTRAINT `fk_material_compra_solicitud de compra1` FOREIGN KEY (`solicitud de compra_id`) REFERENCES `solicitud de compra` (`id_solicitud_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_compra`
--

LOCK TABLES `material_compra` WRITE;
/*!40000 ALTER TABLE `material_compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `material_compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material_solicitud`
--

DROP TABLE IF EXISTS `material_solicitud`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `material_solicitud` (
  `solicitud de material_id` int(11) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Cantidad` varchar(45) DEFAULT NULL,
  KEY `fk_material_solicitud_solicitud de material1` (`solicitud de material_id`),
  CONSTRAINT `fk_material_solicitud_solicitud de material1` FOREIGN KEY (`solicitud de material_id`) REFERENCES `solicitud de material` (`id_solicitud_material`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material_solicitud`
--

LOCK TABLES `material_solicitud` WRITE;
/*!40000 ALTER TABLE `material_solicitud` DISABLE KEYS */;
/*!40000 ALTER TABLE `material_solicitud` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obra`
--

DROP TABLE IF EXISTS `obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `obra` (
  `id_obra` int(11) NOT NULL AUTO_INCREMENT,
  `bodeguero de obra_id` int(11) DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_obra`),
  KEY `fk_obra_bodeguero de obra1_idx` (`bodeguero de obra_id`),
  CONSTRAINT `fk_obra_bodeguero de obra1` FOREIGN KEY (`bodeguero de obra_id`) REFERENCES `bodeguero de obra` (`id_bodeguero_obra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obra`
--

LOCK TABLES `obra` WRITE;
/*!40000 ALTER TABLE `obra` DISABLE KEYS */;
INSERT INTO `obra` VALUES (1,NULL,'Obra 1','test'),(2,NULL,'Obra 2','test'),(3,NULL,'Obra 23','test'),(4,NULL,'Obra 4','test'),(5,NULL,'Obra5','test'),(6,NULL,'Obra 6','test');
/*!40000 ALTER TABLE `obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitud de compra`
--

DROP TABLE IF EXISTS `solicitud de compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solicitud de compra` (
  `id_solicitud_compra` int(11) NOT NULL AUTO_INCREMENT,
  `bodeguero central_id` int(11) DEFAULT NULL,
  `encargado de compra_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_solicitud_compra`),
  KEY `fk_bodeguero central_has_encargado de compra_encargado de c_idx` (`encargado de compra_id`),
  KEY `fk_bodeguero central_has_encargado de compra_bodeguero cent_idx` (`bodeguero central_id`),
  CONSTRAINT `fk_bodeguero central_has_encargado de compra_bodeguero central1` FOREIGN KEY (`bodeguero central_id`) REFERENCES `bodeguero central` (`id_bodeguero_central`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bodeguero central_has_encargado de compra_encargado de com1` FOREIGN KEY (`encargado de compra_id`) REFERENCES `encargado de compra` (`id_encargado_compra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud de compra`
--

LOCK TABLES `solicitud de compra` WRITE;
/*!40000 ALTER TABLE `solicitud de compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitud de compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitud de material`
--

DROP TABLE IF EXISTS `solicitud de material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solicitud de material` (
  `id_solicitud_material` int(11) NOT NULL AUTO_INCREMENT,
  `bodeguero de obra_id` int(11) DEFAULT NULL,
  `bodeguero central_id` int(11) DEFAULT NULL,
  `Fecha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_solicitud_material`),
  KEY `fk_bodeguero de obra_has_bodeguero central_bodeguero centra_idx` (`bodeguero central_id`),
  KEY `fk_bodeguero de obra_has_bodeguero central_bodeguero de obr_idx` (`bodeguero de obra_id`),
  CONSTRAINT `fk_bodeguero de obra_has_bodeguero central_bodeguero central1` FOREIGN KEY (`bodeguero central_id`) REFERENCES `bodeguero central` (`id_bodeguero_central`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_bodeguero de obra_has_bodeguero central_bodeguero de obra1` FOREIGN KEY (`bodeguero de obra_id`) REFERENCES `bodeguero de obra` (`id_bodeguero_obra`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud de material`
--

LOCK TABLES `solicitud de material` WRITE;
/*!40000 ALTER TABLE `solicitud de material` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitud de material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `Contrasena` varchar(45) DEFAULT NULL,
  `Cargo` int(11) DEFAULT NULL,
  `Mail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Administrador','Web','123',1,'admin@test.cl'),(2,'bodeguero 1','test','123',3,'bodeguero1@test.cl'),(3,'bodeguero 2','test','123',3,'bodeguero2@test.cl'),(4,'bodeguero 3','test','123',3,'bodeguero3@test.cl'),(5,'bc','test','123',2,'bc@test.cl'),(6,'ec','test','123',4,'ec@test.cl'),(7,'bodeguero 4','test','123',3,'bodeguero4@test.cl'),(8,'bodeguero 5','test','123',3,'bodeguero5@test.cl'),(9,'bodeguero 6','test','123',3,'bodeguero6@test.cl'),(10,'bodeguero 7','test','123',3,'bodeguero7@test.cl');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-19 20:36:03
