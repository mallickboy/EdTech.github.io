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
-- Table structure for table `video_pdf_table`
--

DROP TABLE IF EXISTS `video_pdf_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_pdf_table` (
  `video_pdf_id` int NOT NULL AUTO_INCREMENT,
  `subject_id` int DEFAULT NULL,
  `video_pdf_topic` varchar(255) DEFAULT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `pdf_link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`video_pdf_id`),
  KEY `subject_id` (`subject_id`),
  CONSTRAINT `video_pdf_table_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `current_subjects` (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_pdf_table`
--

LOCK TABLES `video_pdf_table` WRITE;
/*!40000 ALTER TABLE `video_pdf_table` DISABLE KEYS */;
INSERT INTO `video_pdf_table` VALUES (1,1,'Algebra','https://youtu.be/NybHckSEQBI?si=a5Z1QVKy8eg7kWrC','https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'),(2,1,'Calculus','https://www.youtube.com/live/RE1qFUEq3hg?si=0gEorUcstTCQU3xj','https://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf'),(3,2,'Mechanics','https://youtu.be/FkO6vyMqo8E?si=ErJbmnHUZJO0TloY','https://www.physics.upenn.edu/sites/default/files/Classical_Mechanics_a_Critical_Introduction_0_0.pdf'),(4,3,'Atom','https://youtu.be/oW7USk5x4do?si=h1uSUymJwbK7qCWL','https://ncert.nic.in/textbook/pdf/leph204.pdf'),(5,4,'Human Brain','https://youtu.be/u2IkcmDArS4?si=-AtIv1tOP9wgMx03','https://catalog.ninds.nih.gov/sites/default/files/publications/know-your-brain-brain-basics.pdf'),(6,5,'World War II','https://youtu.be/AUXIuYHFgBE?si=iHnnh611JRPwKs7q','https://www.drishtiias.com/pdf/1594383154-world-war-ii.pdf'),(7,5,'World War II','https://youtu.be/dz1rTZE9xgE?si=xstqswYrs6V82OeS','https://history.army.mil/html/books/072/72-2/CMH_Pub_72-2.pdf');
/*!40000 ALTER TABLE `video_pdf_table` ENABLE KEYS */;
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
