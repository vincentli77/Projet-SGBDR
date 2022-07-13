-- MariaDB dump 10.19  Distrib 10.6.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: backendProject
-- ------------------------------------------------------
-- Server version	10.6.5-MariaDB-1:10.6.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Challenges`
--

DROP TABLE IF EXISTS `Challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Challenges` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Challenges`
--

LOCK TABLES `Challenges` WRITE;
/*!40000 ALTER TABLE `Challenges` DISABLE KEYS */;
INSERT INTO `Challenges` VALUES ('9ee510f0-a255-4ec8-af65-5730a863ce1d','Unix'),('id','name');
/*!40000 ALTER TABLE `Challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Promotions`
--

DROP TABLE IF EXISTS `Promotions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Promotions` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Promotions`
--

LOCK TABLES `Promotions` WRITE;
/*!40000 ALTER TABLE `Promotions` DISABLE KEYS */;
INSERT INTO `Promotions` VALUES ('f4cee247-e110-42f5-8b05-c260b08a20e5','MT4_2022');
/*!40000 ALTER TABLE `Promotions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Promotions_Challenges`
--

DROP TABLE IF EXISTS `Promotions_Challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Promotions_Challenges` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `promo_id` varchar(36) NOT NULL,
  `challenge_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Promotions_Challenges_challenge_id_Challenges_id` (`challenge_id`),
  KEY `FK_Promotions_Challenges_promo_id_Promotions_id` (`promo_id`),
  CONSTRAINT `FK_Promotions_Challenges_challenge_id_Challenges_id` FOREIGN KEY (`challenge_id`) REFERENCES `Challenges` (`id`),
  CONSTRAINT `FK_Promotions_Challenges_promo_id_Promotions_id` FOREIGN KEY (`promo_id`) REFERENCES `Promotions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Promotions_Challenges`
--

LOCK TABLES `Promotions_Challenges` WRITE;
/*!40000 ALTER TABLE `Promotions_Challenges` DISABLE KEYS */;
INSERT INTO `Promotions_Challenges` VALUES ('5fd12592-f17d-489c-80df-1fc2d9165351','f4cee247-e110-42f5-8b05-c260b08a20e5','9ee510f0-a255-4ec8-af65-5730a863ce1d');
/*!40000 ALTER TABLE `Promotions_Challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Results`
--

DROP TABLE IF EXISTS `Results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Results` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `challenge_id` varchar(36) NOT NULL,
  `score` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_id` varchar(36) NOT NULL,
  `promo_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Results_user_id_Users_id` (`user_id`),
  KEY `FK_Results_promo_id_Promotions_id` (`promo_id`),
  CONSTRAINT `FK_Results_promo_id_Promotions_id` FOREIGN KEY (`promo_id`) REFERENCES `Promotions` (`id`),
  CONSTRAINT `FK_Results_user_id_Users_id` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Results`
--

LOCK TABLES `Results` WRITE;
/*!40000 ALTER TABLE `Results` DISABLE KEYS */;
INSERT INTO `Results` VALUES ('0bebb165-5308-443c-8c5a-e0e3ccd9e7ce','9ee510f0-a255-4ec8-af65-5730a863ce1d',15,'2021-09-07 17:31:25','77f7e543-877b-4cb6-a2f0-0c536a029760','f4cee247-e110-42f5-8b05-c260b08a20e5'),('191f8eb8-f397-4843-a10a-b7dadbf4e1c3','9ee510f0-a255-4ec8-af65-5730a863ce1d',0,'2022-01-26 23:09:16','78799394-d443-409a-af89-50249b22f1fd','f4cee247-e110-42f5-8b05-c260b08a20e5'),('1d9544f4-ecff-4643-8092-102d775bd8ef','9ee510f0-a255-4ec8-af65-5730a863ce1d',9,'2022-02-28 14:24:20','e120e100-1424-4d4a-a627-7e318bb0947e','f4cee247-e110-42f5-8b05-c260b08a20e5'),('6d9f27e1-08c5-4d21-9a82-60d9367295df','9ee510f0-a255-4ec8-af65-5730a863ce1d',16,'2021-08-07 04:53:10','e6f8ea47-8ee9-45f8-9fd4-2cc04ef3d8f3','f4cee247-e110-42f5-8b05-c260b08a20e5'),('92aa2433-57ff-4230-9a02-c89fce89e5e0','9ee510f0-a255-4ec8-af65-5730a863ce1d',9,'2022-01-05 08:34:10','c7805999-e7bc-473d-aba3-826a814e68b8','f4cee247-e110-42f5-8b05-c260b08a20e5'),('95ab3cb1-a95e-4f96-a830-fdde22f307f5','9ee510f0-a255-4ec8-af65-5730a863ce1d',13,'2022-06-05 18:34:43','f5f617ba-5248-4ec5-8dc0-04bbb38d5033','f4cee247-e110-42f5-8b05-c260b08a20e5'),('a8dded77-8d5c-4b28-b057-bd4f1db58c42','9ee510f0-a255-4ec8-af65-5730a863ce1d',5,'2022-01-07 06:44:48','8c431642-1165-40dc-a5f4-241af6db09b7','f4cee247-e110-42f5-8b05-c260b08a20e5'),('cca46984-0b17-461f-93f3-2cab463cbc07','9ee510f0-a255-4ec8-af65-5730a863ce1d',15,'2022-02-19 22:01:12','c22a0fb1-36d4-433f-a157-2c2552caf596','f4cee247-e110-42f5-8b05-c260b08a20e5'),('d82574ba-ec96-4221-9a4c-b564810b1736','9ee510f0-a255-4ec8-af65-5730a863ce1d',5,'2022-02-05 11:38:08','1fec9134-f901-4b43-85a6-5f3cb43b29a7','f4cee247-e110-42f5-8b05-c260b08a20e5'),('e7e5c676-c78f-4027-9301-438e79f39903','9ee510f0-a255-4ec8-af65-5730a863ce1d',1,'2022-03-26 20:06:10','63ecbaad-ad3b-486c-9fd6-a6c7159d8df7','f4cee247-e110-42f5-8b05-c260b08a20e5');
/*!40000 ALTER TABLE `Results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `email` varchar(320) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `role` char(7) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `promo_id` varchar(36) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('1fec9134-f901-4b43-85a6-5f3cb43b29a7','pelintune1@de.vu','Puff','Elintune','Student','2022-02-10 15:22:14','f4cee247-e110-42f5-8b05-c260b08a20e5'),('63ecbaad-ad3b-486c-9fd6-a6c7159d8df7','wbrasseur7@ft.com','Whitney','Brasseur','Student','2021-11-11 02:31:55','f4cee247-e110-42f5-8b05-c260b08a20e5'),('77f7e543-877b-4cb6-a2f0-0c536a029760','jwardale8@nature.com','Jackson','Wardale','Student','2022-05-29 02:43:24','f4cee247-e110-42f5-8b05-c260b08a20e5'),('78799394-d443-409a-af89-50249b22f1fd','sscarlan3@vimeo.com','Stillmann','Scarlan','Student','2021-12-17 19:51:09','f4cee247-e110-42f5-8b05-c260b08a20e5'),('8c431642-1165-40dc-a5f4-241af6db09b7','lmcgarrahan5@google.com','Lindy','McGarrahan','Student','2022-04-09 11:31:12','f4cee247-e110-42f5-8b05-c260b08a20e5'),('c22a0fb1-36d4-433f-a157-2c2552caf596','mcowterd2@umich.edu','Mufinella','Cowterd','Student','2021-08-14 17:44:09','f4cee247-e110-42f5-8b05-c260b08a20e5'),('c7805999-e7bc-473d-aba3-826a814e68b8','tbradbury6@xinhuanet.com','Tim','Bradbury','Student','2021-07-20 02:18:31','f4cee247-e110-42f5-8b05-c260b08a20e5'),('e120e100-1424-4d4a-a627-7e318bb0947e','fsyphas4@sphinn.com','Field','Syphas','Student','2022-02-15 04:52:55','f4cee247-e110-42f5-8b05-c260b08a20e5'),('e6f8ea47-8ee9-45f8-9fd4-2cc04ef3d8f3','gcurneen0@people.com.cn','Graham','Curneen','Student','2021-11-03 01:12:53','f4cee247-e110-42f5-8b05-c260b08a20e5'),('f5f617ba-5248-4ec5-8dc0-04bbb38d5033','agethin9@blogtalkradio.com','Annissa','Gethin','Student','2022-02-27 05:18:55','f4cee247-e110-42f5-8b05-c260b08a20e5');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-23 21:11:59
