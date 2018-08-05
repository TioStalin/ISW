-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	5.6.38

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
-- Table structure for table `Bodega central`
--

DROP TABLE IF EXISTS `Bodega central`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bodega central` (
  `ID_Bod` int(11) NOT NULL AUTO_INCREMENT,
  `Material BC_ID_mate` int(11) NOT NULL,
  PRIMARY KEY (`ID_Bod`,`Material BC_ID_mate`),
  KEY `fk_Bodega central_Material BC1_idx` (`Material BC_ID_mate`),
  CONSTRAINT `fk_Bodega central_Material BC1` FOREIGN KEY (`Material BC_ID_mate`) REFERENCES `Material BC` (`ID_mate`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bodega central`
--

LOCK TABLES `Bodega central` WRITE;
/*!40000 ALTER TABLE `Bodega central` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bodega central` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bodega de obra`
--

DROP TABLE IF EXISTS `Bodega de obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bodega de obra` (
  `ID_Bodega` int(11) NOT NULL AUTO_INCREMENT,
  `Bodeguero de obra_ID_Bodeguero` int(11) NOT NULL,
  PRIMARY KEY (`ID_Bodega`,`Bodeguero de obra_ID_Bodeguero`),
  KEY `fk_Bodega de obra_Bodeguero de obra1_idx` (`Bodeguero de obra_ID_Bodeguero`),
  CONSTRAINT `fk_Bodega de obra_Bodeguero de obra1` FOREIGN KEY (`Bodeguero de obra_ID_Bodeguero`) REFERENCES `Bodeguero de obra` (`ID_Bodeguero`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bodega de obra`
--

LOCK TABLES `Bodega de obra` WRITE;
/*!40000 ALTER TABLE `Bodega de obra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bodega de obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bodeguero central`
--

DROP TABLE IF EXISTS `Bodeguero central`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bodeguero central` (
  `ID_BC` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_BC`,`Usuario_ID_Usuario`),
  KEY `fk_Bodeguero central_Usuario1_idx` (`Usuario_ID_Usuario`),
  CONSTRAINT `fk_Bodeguero central_Usuario1` FOREIGN KEY (`Usuario_ID_Usuario`) REFERENCES `Usuario` (`ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bodeguero central`
--

LOCK TABLES `Bodeguero central` WRITE;
/*!40000 ALTER TABLE `Bodeguero central` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bodeguero central` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bodeguero central_has_Bodeguero de obra`
--

DROP TABLE IF EXISTS `Bodeguero central_has_Bodeguero de obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bodeguero central_has_Bodeguero de obra` (
  `Bodeguero central_ID_BC` int(11) NOT NULL,
  `Bodeguero central_Usuario_ID_Usuario` int(11) NOT NULL,
  `Bodeguero de obra_ID_Bodeguero` int(11) NOT NULL,
  `Bodeguero de obra_Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`,`Bodeguero de obra_ID_Bodeguero`,`Bodeguero de obra_Usuario_ID_Usuario`),
  KEY `fk_Bodeguero central_has_Bodeguero de obra_Bodeguero de obr_idx` (`Bodeguero de obra_ID_Bodeguero`,`Bodeguero de obra_Usuario_ID_Usuario`),
  KEY `fk_Bodeguero central_has_Bodeguero de obra_Bodeguero centra_idx` (`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  CONSTRAINT `fk_Bodeguero central_has_Bodeguero de obra_Bodeguero central1` FOREIGN KEY (`Bodeguero central_ID_BC`, `Bodeguero central_Usuario_ID_Usuario`) REFERENCES `Bodeguero central` (`ID_BC`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bodeguero central_has_Bodeguero de obra_Bodeguero de obra1` FOREIGN KEY (`Bodeguero de obra_ID_Bodeguero`, `Bodeguero de obra_Usuario_ID_Usuario`) REFERENCES `Bodeguero de obra` (`ID_Bodeguero`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bodeguero central_has_Bodeguero de obra`
--

LOCK TABLES `Bodeguero central_has_Bodeguero de obra` WRITE;
/*!40000 ALTER TABLE `Bodeguero central_has_Bodeguero de obra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bodeguero central_has_Bodeguero de obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bodeguero de obra`
--

DROP TABLE IF EXISTS `Bodeguero de obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bodeguero de obra` (
  `ID_Bodeguero` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_Bodeguero`,`Usuario_ID_Usuario`),
  KEY `fk_Bodeguero de obra_Usuario1_idx` (`Usuario_ID_Usuario`),
  CONSTRAINT `fk_Bodeguero de obra_Usuario1` FOREIGN KEY (`Usuario_ID_Usuario`) REFERENCES `Usuario` (`ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bodeguero de obra`
--

LOCK TABLES `Bodeguero de obra` WRITE;
/*!40000 ALTER TABLE `Bodeguero de obra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Bodeguero de obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Encargado de compra`
--

DROP TABLE IF EXISTS `Encargado de compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Encargado de compra` (
  `ID_EDC` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_EDC`,`Usuario_ID_Usuario`),
  KEY `fk_Encargado de compra_Usuario1_idx` (`Usuario_ID_Usuario`),
  CONSTRAINT `fk_Encargado de compra_Usuario1` FOREIGN KEY (`Usuario_ID_Usuario`) REFERENCES `Usuario` (`ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Encargado de compra`
--

LOCK TABLES `Encargado de compra` WRITE;
/*!40000 ALTER TABLE `Encargado de compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Encargado de compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Material`
--

DROP TABLE IF EXISTS `Material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Material` (
  `ID_MATERIAL` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Descripcion` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`ID_MATERIAL`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Material`
--

LOCK TABLES `Material` WRITE;
/*!40000 ALTER TABLE `Material` DISABLE KEYS */;
INSERT INTO `Material` VALUES (1,'Martillo',5,'Sirve para clavar lol'),(2,'Tornillo',1000,'Para tornillar D:'),(3,'Clavos',500,'');
/*!40000 ALTER TABLE `Material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Material BC`
--

DROP TABLE IF EXISTS `Material BC`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Material BC` (
  `ID_mate` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Descripcion` varchar(256) DEFAULT NULL,
  `Bodeguero central_ID_BC` int(11) NOT NULL,
  `Bodeguero central_Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_mate`,`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  KEY `fk_Material BC_Bodeguero central1_idx` (`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  CONSTRAINT `fk_Material BC_Bodeguero central1` FOREIGN KEY (`Bodeguero central_ID_BC`, `Bodeguero central_Usuario_ID_Usuario`) REFERENCES `Bodeguero central` (`ID_BC`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Material BC`
--

LOCK TABLES `Material BC` WRITE;
/*!40000 ALTER TABLE `Material BC` DISABLE KEYS */;
/*!40000 ALTER TABLE `Material BC` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Material_has_Bodega de obra`
--

DROP TABLE IF EXISTS `Material_has_Bodega de obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Material_has_Bodega de obra` (
  `Material_ID_MATERIAL` int(11) NOT NULL,
  `Bodega de obra_ID_Bodega` int(11) NOT NULL,
  PRIMARY KEY (`Material_ID_MATERIAL`,`Bodega de obra_ID_Bodega`),
  KEY `fk_Material_has_Bodega de obra_Bodega de obra1_idx` (`Bodega de obra_ID_Bodega`),
  KEY `fk_Material_has_Bodega de obra_Material1_idx` (`Material_ID_MATERIAL`),
  CONSTRAINT `fk_Material_has_Bodega de obra_Bodega de obra1` FOREIGN KEY (`Bodega de obra_ID_Bodega`) REFERENCES `Bodega de obra` (`ID_Bodega`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Material_has_Bodega de obra_Material1` FOREIGN KEY (`Material_ID_MATERIAL`) REFERENCES `Material` (`ID_MATERIAL`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Material_has_Bodega de obra`
--

LOCK TABLES `Material_has_Bodega de obra` WRITE;
/*!40000 ALTER TABLE `Material_has_Bodega de obra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Material_has_Bodega de obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Solicitud de compra`
--

DROP TABLE IF EXISTS `Solicitud de compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Solicitud de compra` (
  `ID_OD` int(11) NOT NULL AUTO_INCREMENT,
  `Bodeguero central_ID_BC` int(11) NOT NULL,
  `Bodeguero central_Usuario_ID_Usuario` int(11) NOT NULL,
  `Encargado de compra_ID_EDC` int(11) NOT NULL,
  `Encargado de compra_Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_OD`,`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`,`Encargado de compra_ID_EDC`,`Encargado de compra_Usuario_ID_Usuario`),
  KEY `fk_Solicitud de compra_Bodeguero central1_idx` (`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  KEY `fk_Solicitud de compra_Encargado de compra1_idx` (`Encargado de compra_ID_EDC`,`Encargado de compra_Usuario_ID_Usuario`),
  CONSTRAINT `fk_Solicitud de compra_Bodeguero central1` FOREIGN KEY (`Bodeguero central_ID_BC`, `Bodeguero central_Usuario_ID_Usuario`) REFERENCES `Bodeguero central` (`ID_BC`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitud de compra_Encargado de compra1` FOREIGN KEY (`Encargado de compra_ID_EDC`, `Encargado de compra_Usuario_ID_Usuario`) REFERENCES `Encargado de compra` (`ID_EDC`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Solicitud de compra`
--

LOCK TABLES `Solicitud de compra` WRITE;
/*!40000 ALTER TABLE `Solicitud de compra` DISABLE KEYS */;
/*!40000 ALTER TABLE `Solicitud de compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Solicitud de material`
--

DROP TABLE IF EXISTS `Solicitud de material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Solicitud de material` (
  `ID_solicitud` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Bodeguero de obra_ID_Bodeguero` int(11) NOT NULL,
  `Bodeguero de obra_Usuario_ID_Usuario` int(11) NOT NULL,
  `Bodeguero central_ID_BC` int(11) NOT NULL,
  `Bodeguero central_Usuario_ID_Usuario` int(11) NOT NULL,
  PRIMARY KEY (`ID_solicitud`,`Bodeguero de obra_ID_Bodeguero`,`Bodeguero de obra_Usuario_ID_Usuario`,`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  KEY `fk_Solicitud_Bodeguero de obra1_idx` (`Bodeguero de obra_ID_Bodeguero`,`Bodeguero de obra_Usuario_ID_Usuario`),
  KEY `fk_Solicitud_Bodeguero central1_idx` (`Bodeguero central_ID_BC`,`Bodeguero central_Usuario_ID_Usuario`),
  CONSTRAINT `fk_Solicitud_Bodeguero central1` FOREIGN KEY (`Bodeguero central_ID_BC`, `Bodeguero central_Usuario_ID_Usuario`) REFERENCES `Bodeguero central` (`ID_BC`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solicitud_Bodeguero de obra1` FOREIGN KEY (`Bodeguero de obra_ID_Bodeguero`, `Bodeguero de obra_Usuario_ID_Usuario`) REFERENCES `Bodeguero de obra` (`ID_Bodeguero`, `Usuario_ID_Usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Solicitud de material`
--

LOCK TABLES `Solicitud de material` WRITE;
/*!40000 ALTER TABLE `Solicitud de material` DISABLE KEYS */;
/*!40000 ALTER TABLE `Solicitud de material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuario` (
  `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Contrasena` varchar(45) NOT NULL,
  `Cargo` int(11) NOT NULL,
  `Mail` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_Usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,'Gustavo','Barrios','123',1,'gustavo.barrios@sansano.usm.cl'),(2,'Esteban','Tapia','456',3,'esteban.tapiam@sansano.usm.cl'),(3,'Daniel','Tapia','qwerty',2,'daniel.tapiara@sansano.usm.cl');
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-05  0:54:29
