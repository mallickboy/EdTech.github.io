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
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `Fname` varchar(15) DEFAULT NULL,
  `Minit` varchar(15) DEFAULT NULL,
  `Lname` varchar(15) DEFAULT NULL,
  `Ssn` varchar(8) NOT NULL,
  `Bdate` date DEFAULT NULL,
  `Address` varchar(50) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `Salary` decimal(10,2) DEFAULT NULL,
  `Super_ssn` varchar(8) DEFAULT NULL,
  `Dno` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`Ssn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('Susanta','','Das','11122331','1985-04-15','Mumbai','Male',20000.00,'98765432','D6'),('Sonia','M','Reddy','123456','1991-12-22','Chandigarh','Female',62000.00,'1234567','D010'),('Rajesh','K','Verma','1234567','1990-05-15','Jaipur','Male',26000.00,'1234567','D007'),('Utpol','','Mallick','22233441','1990-09-22','Delhi','Male',25000.00,'87654321','D7'),('Pooja','M','Sharma','2345678','1988-08-22','Delhi','Female',60000.00,'2345678','D007'),('Sangbed','','Pal','33344551','1988-12-10','Bangalore','Male',30000.00,'76543210','D8'),('Amit','C','Gupta','3456789','1995-02-10','Mumbai','Male',55000.00,'3456789','D003'),('Narendra','Damoder','Patil','44455661','1995-06-05','Kolkata','Male',20000.00,'65432109','D9'),('Ananya','D','Patel','4567890','1992-11-30','Kolkata','Female',70000.00,'4567890','D004'),('Yash','Kumar','Rastogi','55566771','1987-03-18','Hyderabad','Male',25000.00,'54321098','D10'),('Pijush','S','Kumar','5635901','1997-07-18','Chennai','Male',80000.00,'5678901','D002'),('Vijay','S','Kulkarni','5678901','1987-07-18','Chennai','Male',80000.00,'5678901','D002'),('Chandan','K','Pal','5901234','2000-09-18','Kolkata','Male',90000.00,'8901234','D004'),('Arka','P','Goswami','6012345','2001-04-08','Pune','Male',72000.00,'9012345','D009'),('Souvik','R','Adhikari','6783712','1993-04-12','Bengaluru','Male',65000.00,'6789012','D006'),('Sneha','R','Joshi','6789012','1998-04-12','Bengaluru','Female',65000.00,'6789012','D006'),('Sumon','K','Das','6891923','1993-01-05','Kolkata','Male',28000.00,'7890123','D002'),('Suresh','A','Kumar','7890123','1993-01-05','Hyderabad','Male',28000.00,'7890123','D002'),('Kavya','K','Rajput','8901234','1989-09-18','Delhi','Female',90000.00,'8901234','D004'),('Koushiki','M','Reddy','8923456','1995-12-22','Chandigarh','Female',62000.00,'1234567','D010'),('Arun','P','Singh','9012345','1996-04-08','Pune','Male',72000.00,'9012345','D009');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
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
