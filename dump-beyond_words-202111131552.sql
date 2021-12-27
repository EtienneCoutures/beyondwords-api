-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: beyond_words
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cat_unit`
--

DROP TABLE IF EXISTS `cat_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cat_unit` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CategorieId` int unsigned NOT NULL,
  `UnitId` int unsigned NOT NULL,
  PRIMARY KEY (`CategorieId`,`UnitId`),
  KEY `UnitId` (`UnitId`),
  CONSTRAINT `cat_unit_ibfk_1` FOREIGN KEY (`CategorieId`) REFERENCES `categorie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cat_unit_ibfk_2` FOREIGN KEY (`UnitId`) REFERENCES `unit` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_unit`
--

LOCK TABLES `cat_unit` WRITE;
/*!40000 ALTER TABLE `cat_unit` DISABLE KEYS */;
INSERT INTO `cat_unit` VALUES ('2021-10-06 14:07:20','2021-10-06 14:07:20',1,1);
/*!40000 ALTER TABLE `cat_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `index` int unsigned DEFAULT NULL,
  `title` varchar(256) NOT NULL,
  `img` varchar(256) DEFAULT NULL,
  `label` text NOT NULL,
  `eval_intro` varchar(256) DEFAULT NULL,
  `eval_mid` varchar(256) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,0,'Anglais','img test','Appartient a l\'user','intro test','mid test','2021-10-06 14:07:20','2021-10-06 14:07:20'),(2,0,'Excel','img test','Doit etre a avec un cadenas','intro test','mid test','2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `content` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `index` int unsigned DEFAULT '0',
  `label` text,
  `url` varchar(256) DEFAULT NULL,
  `type` enum('pdf','video','txt') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UnitContentId` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UnitContentId` (`UnitContentId`),
  CONSTRAINT `content_ibfk_1` FOREIGN KEY (`UnitContentId`) REFERENCES `unit_content` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ;/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES (1,1,'Validations are checks performed in the Sequelize level, in pure JavaScript. They can be arbitrarily complex if you provide a custom validator function, or can be one of the built-in validators offered by Sequelize. If a validation fails, no SQL query will be sent to the database at all.',NULL,'txt','2021-10-06 14:07:20','2021-10-06 14:07:20',1),(2,2,NULL,'https://www.youtube.com/embed/4xW5dqEZQu0','video','2021-10-06 14:39:47','2021-10-06 14:39:47',1),(3,2,NULL,'https://www.youtube.com/embed/QyeT_pAPgwg','video','2021-10-06 14:39:47','2021-10-06 14:39:47',1);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `index` int unsigned DEFAULT '0',
  `label` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,0,'Langues','2021-10-06 14:07:20','2021-10-06 14:07:20'),(2,0,'Bureautique','2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_cat`
--

DROP TABLE IF EXISTS `tag_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_cat` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `TagId` int unsigned NOT NULL,
  `CategorieId` int unsigned NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_cat`
--

LOCK TABLES `tag_cat` WRITE;
/*!40000 ALTER TABLE `tag_cat` DISABLE KEYS */;
INSERT INTO `tag_cat` VALUES (1,1,1,'2021-10-06 14:03:35','2021-10-06 14:03:35'),(2,2,2,'2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `tag_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `index` int unsigned DEFAULT '0',
  `title` varchar(256) NOT NULL,
  `img` varchar(256) DEFAULT NULL,
  `label` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,0,'Parler anglais Ez','img test','label test','2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit_content`
--

DROP TABLE IF EXISTS `unit_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit_content` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `index` int unsigned DEFAULT '0',
  `label` varchar(256) DEFAULT NULL,
  `img` varchar(256) DEFAULT NULL,
  `UnitId` int unsigned DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UnitId` (`UnitId`),
  CONSTRAINT `unit_content_ibfk_1` FOREIGN KEY (`UnitId`) REFERENCES `unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit_content`
--

LOCK TABLES `unit_content` WRITE;
/*!40000 ALTER TABLE `unit_content` DISABLE KEYS */;
INSERT INTO `unit_content` VALUES (1,0,'Is Maria Spanish?','img',1,'2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `unit_content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(128) NOT NULL,
  `lastname` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `phone` varchar(64) NOT NULL,
  `address` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ;/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Maria Grazia','Le Mura','lemura.mariagrazia@virgilio.it','testtest','0677112233','Rue du test','2021-10-06 14:07:20','2021-10-06 14:07:20');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_cat`
--

DROP TABLE IF EXISTS `user_cat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_cat` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int unsigned NOT NULL,
  `CategorieId` int unsigned NOT NULL,
  PRIMARY KEY (`UserId`,`CategorieId`),
  KEY `CategorieId` (`CategorieId`),
  CONSTRAINT `user_cat_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_cat_ibfk_2` FOREIGN KEY (`CategorieId`) REFERENCES `categorie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_cat`
--

LOCK TABLES `user_cat` WRITE;
/*!40000 ALTER TABLE `user_cat` DISABLE KEYS */;
INSERT INTO `user_cat` VALUES ('2021-10-06 14:07:20','2021-10-06 14:07:20',1,1);
/*!40000 ALTER TABLE `user_cat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'beyond_words'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-13 15:52:53
