CREATE DATABASE  IF NOT EXISTS `edtech` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `edtech`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: edtech
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
-- Table structure for table `current_videos`
--

DROP TABLE IF EXISTS `current_videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `current_videos` (
  `video_id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int DEFAULT NULL,
  `video_chapter` varchar(255) DEFAULT NULL,
  `video_title` varchar(255) DEFAULT NULL,
  `video_description` text,
  `video_url` varchar(255) DEFAULT NULL,
  `video_tags` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`video_id`),
  KEY `subject_id` (`subject_id`),
  CONSTRAINT `current_videos_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `current_subjects` (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `current_videos`
--

LOCK TABLES `current_videos` WRITE;
/*!40000 ALTER TABLE `current_videos` DISABLE KEYS */;
INSERT INTO `current_videos` VALUES (1,1,'Algebra','Linear Algebra','Learn linear Algebra in 20 minutes','https://youtu.be/NybHckSEQBI?si=a5Z1QVKy8eg7kWrC','@mAL'),(2,1,'Calculus','Inegral Calculas part 1','Learn integral calculas in 10 minutes','https://www.youtube.com/live/RE1qFUEq3hg?si=0gEorUcstTCQU3xj','@mIN'),(3,2,'Mechanics','Friction part 1','Getting start with mechanics','https://youtu.be/FkO6vyMqo8E?si=ErJbmnHUZJO0TloY','@phyMFRICtion'),(4,3,'Atom','Atom part 1','Basic atomic structure','https://youtu.be/oW7USk5x4do?si=h1uSUymJwbK7qCWL','@ATOMS'),(5,4,'Human Brain','Human brain part 1','Overview of human brain','https://youtu.be/u2IkcmDArS4?si=-AtIv1tOP9wgMx03','@BrainOfHuman'),(6,5,'World War II','Rise of Nazi','How Hitler gain power','https://youtu.be/AUXIuYHFgBE?si=iHnnh611JRPwKs7q','@HailHitler'),(7,5,'World War II','World War II movie trailer','How America based alliance defeted Hitler','https://youtu.be/dz1rTZE9xgE?si=xstqswYrs6V82OeS','@MovieTrailer');
/*!40000 ALTER TABLE `current_videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-09 16:16:01
