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
-- Temporary view structure for view `acess_table`
--

DROP TABLE IF EXISTS `acess_table`;
/*!50001 DROP VIEW IF EXISTS `acess_table`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `acess_table` AS SELECT 
 1 AS `course_id`,
 1 AS `course_name`,
 1 AS `course_start`,
 1 AS `course_end`,
 1 AS `course_price`,
 1 AS `course_description`,
 1 AS `subject_id`,
 1 AS `subject_name`,
 1 AS `video_id`,
 1 AS `video_chapter`,
 1 AS `video_title`,
 1 AS `video_description`,
 1 AS `video_url`,
 1 AS `video_tags`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `overview_table`
--

DROP TABLE IF EXISTS `overview_table`;
/*!50001 DROP VIEW IF EXISTS `overview_table`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `overview_table` AS SELECT 
 1 AS `course_id`,
 1 AS `course_name`,
 1 AS `course_start`,
 1 AS `course_end`,
 1 AS `course_price`,
 1 AS `course_description`,
 1 AS `subject_id`,
 1 AS `subject_name`,
 1 AS `video_id`,
 1 AS `video_chapter`,
 1 AS `video_title`,
 1 AS `video_description`,
 1 AS `video_tags`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `acess_table`
--

/*!50001 DROP VIEW IF EXISTS `acess_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `acess_table` AS select `cc`.`course_id` AS `course_id`,`cc`.`course_name` AS `course_name`,`cc`.`course_start` AS `course_start`,`cc`.`course_end` AS `course_end`,`cc`.`course_price` AS `course_price`,`cc`.`course_description` AS `course_description`,`cs`.`subject_id` AS `subject_id`,`cs`.`subject_name` AS `subject_name`,`cv`.`video_id` AS `video_id`,`cv`.`video_chapter` AS `video_chapter`,`cv`.`video_title` AS `video_title`,`cv`.`video_description` AS `video_description`,`cv`.`video_url` AS `video_url`,`cv`.`video_tags` AS `video_tags` from ((`current_subjects` `cs` join `current_courses` `cc` on((`cc`.`course_id` = `cs`.`course_id`))) join `current_videos` `cv` on((`cv`.`subject_id` = `cs`.`subject_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `overview_table`
--

/*!50001 DROP VIEW IF EXISTS `overview_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `overview_table` AS select `cc`.`course_id` AS `course_id`,`cc`.`course_name` AS `course_name`,`cc`.`course_start` AS `course_start`,`cc`.`course_end` AS `course_end`,`cc`.`course_price` AS `course_price`,`cc`.`course_description` AS `course_description`,`cs`.`subject_id` AS `subject_id`,`cs`.`subject_name` AS `subject_name`,`cv`.`video_id` AS `video_id`,`cv`.`video_chapter` AS `video_chapter`,`cv`.`video_title` AS `video_title`,`cv`.`video_description` AS `video_description`,`cv`.`video_tags` AS `video_tags` from ((`current_subjects` `cs` join `current_courses` `cc` on((`cc`.`course_id` = `cs`.`course_id`))) join `current_videos` `cv` on((`cv`.`subject_id` = `cs`.`subject_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-09 16:16:01
