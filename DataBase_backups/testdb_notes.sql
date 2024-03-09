CREATE DATABASE  IF NOT EXISTS `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `testdb`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'note 1','This is my first note'),(2,'note 1','This is my first note'),(3,'note 1','This is my first note'),(4,'note 1','This is my first note'),(5,'Note1: ','My First note'),(6,'note 1','This is my first note'),(7,'note 11','This is my first note'),(8,'note 11','This is my first note eee'),(9,'note 11','This is my first note eee'),(10,'note 11','This is my first note eee'),(11,'note 11','This is my first note eee'),(12,'note 11','This is my first note eee'),(13,'note 11','This is my first note eee'),(14,'note 14','This is my 14th note'),(15,'note 14','This is my 14th note'),(16,'note 14','This is my 14th note'),(17,'note 14','This is my 14th note'),(18,'note 14','This is my 14th note'),(19,'Title','Content'),(20,'Title','Content'),(21,'Title','Content'),(22,'Title','Content'),(23,'Title','Content'),(24,'Title','Content'),(25,'From thunder client','just some note content'),(26,'From thunder client','just some note content'),(27,'From thunder client','just some note content'),(28,'From thunder client',NULL),(29,'From thunder client','just some note content'),(30,'From thunder client','just some note content xyz'),(31,'From thunder client','just some note content xyz'),(32,'From thunder client','just some note content xyz'),(33,'From thunder client','just some note content xyz'),(34,'From thunder client','just some note content xyz'),(35,'From thunder client','just some note content xyz'),(36,'From thunder client','just some note content xyz'),(37,'From thunder client','just some note content xyz'),(38,'From thunder client','just some note content xyz ttt'),(39,'note 14','This is my 14th note'),(40,'note 14','This is my 14th note'),(41,'From thunder client','just some note content xyz ttt'),(42,'From thunder client','just some note content xyz ttt');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-09 16:16:02
