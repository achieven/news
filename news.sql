-- MySQL dump 10.13  Distrib 8.0.16, for Linux (x86_64)
--
-- Host: localhost    Database: news
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `id` char(36) NOT NULL,
  `text` longtext NOT NULL,
  `createdAt` datetime NOT NULL,
  `votes` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('0322a150-f5f3-11e9-afd5-bde65a9ab994','abcde','2019-10-24 03:12:49',13),('06824710-f5f3-11e9-afd5-bde65a9ab994','b','2019-10-24 03:12:55',23),('0906eb90-f5f2-11e9-8de7-718c2c52341a','a','2019-10-24 03:05:49',0),('090b14d0-f5f3-11e9-afd5-bde65a9ab994','x','2019-10-24 03:12:59',1),('0fe49f10-f5f3-11e9-afd5-bde65a9ab994','x','2019-10-24 03:13:10',0),('115daa80-f5f3-11e9-afd5-bde65a9ab994','x','2019-10-24 03:13:13',0),('a3818950-f5fc-11e9-a3a9-23e3717ab03e','abc','2019-10-24 04:21:44',0),('c04ddd90-f5f2-11e9-afd5-bde65a9ab994','null','2019-10-24 03:10:57',0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `top_posts`
--

DROP TABLE IF EXISTS `top_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `top_posts` (
  `id` char(36) NOT NULL,
  `score` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top_posts`
--

LOCK TABLES `top_posts` WRITE;
/*!40000 ALTER TABLE `top_posts` DISABLE KEYS */;
INSERT INTO `top_posts` VALUES ('0322a150-f5f3-11e9-afd5-bde65a9ab994',11),('06824710-f5f3-11e9-afd5-bde65a9ab994',0.0000000011973936344370324),('090b14d0-f5f3-11e9-afd5-bde65a9ab994',-0.00000000007043491935013998),('0fe49f10-f5f3-11e9-afd5-bde65a9ab994',0);
/*!40000 ALTER TABLE `top_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-24  4:26:31
