-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: yann
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `is_super_admin` tinyint(1) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `url` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Alexandre',1,'$2b$10$9pYKsR9jVgz6vZLOT2C9iuAuASJMWCGrOAQP75415sqtGuKNYFKom','revolalex@gmail.com','https://revol-cv.netlify.app/asset/alex2.png'),(2,'Yann',0,'$2b$10$hLbsAy/v7j0huxjWPi0i7eMLbDqJn.71cE3icQldQrrRHafVCCGEi','yanncrochet@wanadoo.fr','https://yanncrochet.com/images/PortraitYC.JPG'),(20,'Renard',0,'$2b$10$uLyCX8DCMKwVa9mu98IoS.Gcx0BNXE.QHU7Zvawbk4pGwuB3qjN56','renard@renard.fr','https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fox_study_6.jpg/290px-Fox_study_6.jpg');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(1000) NOT NULL,
  `galerie_name` varchar(50) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `date` varchar(12) DEFAULT NULL,
  `filename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
INSERT INTO `archive` VALUES (55,'Capturer, un instant splendide que nous offre dame nature...','','Janvier','18/02/2021','02182021132924eau1.jpg'),(57,'ezfezfzefdgfdgdfg g vsfd vsd v sdfv. ','','Photo','06/11/2021','1106202111114501132021125421renard.edf8051a 2.jpg');
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `archive_rating`
--

DROP TABLE IF EXISTS `archive_rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `archive_rating` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  `rating` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive_rating`
--

LOCK TABLES `archive_rating` WRITE;
/*!40000 ALTER TABLE `archive_rating` DISABLE KEYS */;
INSERT INTO `archive_rating` VALUES (19,'01292021164130jardin5xs.jpg','4'),(20,'01292021164130jardin5xs.jpg','5'),(21,'01292021164130jardin5xs.jpg','5'),(78,'02182021132924eau1.jpg','5'),(79,'02182021132924eau1.jpg','1'),(80,'02182021132924eau1.jpg','4'),(81,'02182021132924eau1.jpg','3'),(82,'02182021132924eau1.jpg','4'),(83,'02182021132924eau1.jpg','4'),(84,'02182021132924eau1.jpg','1'),(85,'02182021132924eau1.jpg','3'),(86,'02182021132924eau1.jpg','3'),(87,'02182021132924eau1.jpg','5');
/*!40000 ALTER TABLE `archive_rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caroussel`
--

DROP TABLE IF EXISTS `caroussel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caroussel` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `filename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caroussel`
--

LOCK TABLES `caroussel` WRITE;
/*!40000 ALTER TABLE `caroussel` DISABLE KEYS */;
INSERT INTO `caroussel` VALUES (1,'01132021124924foret1xs.jpg'),(2,'01132021125312foret24xs.jpg'),(3,'01132021125341eau2xs.jpg'),(4,'01132021125400micro2xs.jpg'),(5,'01132021125421renard.jpg'),(6,'01132021125905flore3xs.jpg'),(7,'01132021130016eau1xs.jpg'),(8,'01132021130040foret25xs.jpg'),(9,'01132021130057jardin13xs.jpg'),(10,'01132021130112chouette.jpg'),(11,'01132021130126eau3xs.jpg'),(12,'01132021130142foret13xs.jpg');
/*!40000 ALTER TABLE `caroussel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `galerie_photo`
--

DROP TABLE IF EXISTS `galerie_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `galerie_photo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `is_menu` tinyint(1) DEFAULT NULL,
  `galerie_name` varchar(50) NOT NULL,
  `caption` varchar(50) NOT NULL,
  `filename` varchar(100) NOT NULL,
  `alt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=450 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galerie_photo`
--

LOCK TABLES `galerie_photo` WRITE;
/*!40000 ALTER TABLE `galerie_photo` DISABLE KEYS */;
INSERT INTO `galerie_photo` VALUES (1,0,'foret','','01152021105756foret15xs.jpg','Foret'),(2,0,'foret','','011520211059408.jpg','Foret'),(3,0,'foret','','01152021110832foret3xs.jpg','Foret'),(4,0,'foret','','01152021110912foret22xs.jpg','Chouette'),(5,0,'foret','','01152021112945foret24xs.jpg','Renardeau'),(6,0,'foret','','01152021113200foret13xs.jpg','Foret'),(7,0,'foret','','01152021113239foret5xs.jpg','Foret'),(8,0,'foret','','01152021113308foret8xs.jpg','Foret'),(9,0,'foret','','01152021113330foret9xs.jpg','Foret'),(10,1,'foret','L\'appel de la fôret','01152021113502foret23xs.jpg','Sangliers'),(11,0,'foret','','01152021113531foret2xs.jpg','Rapace'),(12,0,'foret','','01152021113545foret11xs.jpg','Foret'),(13,0,'foret','','01152021113559foret1xs.jpg','Écureuil'),(14,0,'foret','','01152021113631foret6xs.jpg','Biches'),(15,0,'foret','','01152021113655foret7xs.jpg','Biches'),(164,0,'foret','','01202021161717foret4xs.jpg','Cerf'),(186,0,'micro','','01212021105126micro10xs.jpg','Libellule'),(187,0,'micro','','01212021105305micro9xs.jpg','Papillon'),(188,0,'micro','','01212021105327micro5xs.jpg','Sauterelle'),(189,1,'micro','Microcosmos','01212021105400micro1xs.jpg','Guepe'),(190,0,'micro','','01212021105428micro4xs.jpg','Libellule'),(191,0,'micro','','01212021105452micro3xs.jpg','Libellule'),(192,0,'micro','','01212021105522micro6xs.jpg','Mantes'),(193,0,'micro','','01212021105538micro7xs.jpg','Insecte'),(194,0,'micro','','01212021105631micro14xs.jpg','Mouche'),(195,0,'micro','','01212021105643micro15xs.jpg','Sauterelle'),(196,0,'micro','','01212021105653micro16xs.jpg','Papillon'),(198,0,'micro','','01212021105759micros1xs.jpg','Asticot'),(206,0,'flore','','01212021121317flore4xs.jpg','Tulipe'),(207,0,'flore','','012120211213393.jpg','Tulipe'),(208,0,'flore','','01212021121406flore7xs.jpg','Fleur'),(209,0,'flore','','01212021121430flore5xs.jpg','Pétales'),(210,0,'flore','','01212021121454flore1xs.jpg','Fleur'),(211,0,'flore','','01212021121620flore2xs.jpg','Pistil'),(212,0,'flore','','01212021121645flore8xs.jpg','Fleur violette'),(213,0,'flore','','01212021121713flore6xs.jpg','Fleur blanche'),(214,0,'flore','','01212021121733flore12xs.jpg','Feuille'),(215,1,'flore','Féérie Végétal','01212021121825flore10xs.jpg','Fleur blanche'),(216,0,'flore','','01212021121849flore11xs.jpg','Pétales'),(217,0,'flore','','01212021121908flore9xs.jpg','Fleurs des champs'),(222,1,'eau','Au fil de l\'eau','01212021123108eau2xs2.jpg','Oiseau marin'),(223,0,'eau','','01212021123138eau12xs.jpg','Oiseau'),(224,0,'eau','','01212021123157eau1xs.jpg','Canard'),(225,0,'eau','','01212021123223eau8xs.jpg','Automne'),(226,0,'eau','','01212021123249eau5xs.jpg','Oiseau marin'),(227,0,'eau','','01212021123554eau9xs.jpg','Mer'),(228,0,'eau','','0121202112361510.jpg','Coucher de soleil'),(229,0,'eau','','01212021123632eau11xs.jpg','Oiseau'),(230,0,'eau','','01212021123653eau6xs.jpg','Oiseau marin'),(231,0,'eau','','01212021123707eau13xs.jpg','Grenouille'),(232,0,'eau','','01212021123724eau7xs.jpg','Eau'),(233,0,'eau','','012120211237385.jpg','Flamand rose'),(235,0,'jardin','','01212021124428jardin8xs.jpg','Oiseau'),(237,0,'jardin','','01212021124530jardin10xs.jpg','Oiseau'),(238,0,'jardin','','01212021124601jardin9xs.jpg','Pigeon'),(239,0,'jardin','','0121202112461311.jpg','Oiseau'),(240,0,'jardin','','01212021124631jardin12xs.jpg','Oiseau'),(242,0,'jardin','','01212021125002jardin4xs.jpg','Oiseau'),(243,0,'jardin','','01212021125019jardin7xs.jpg','Oiseau'),(244,0,'jardin','','01212021125039jardin3xs.jpg','Rouge gorge'),(249,1,'jardin','Jardin d\'eden','01212021125311jardin2xs.jpg','Oiseau'),(250,0,'jardin','','01212021125330jardin11xs.jpg','Oiseau'),(251,0,'jardin','','01212021125349jardin5xs.jpg','Rouge gorge'),(252,0,'jardin','','01212021125401jardin6xs.jpg','Oiseau'),(255,0,'noir','','01212021130903nbxs9.jpg','Libellule'),(256,0,'noir','','01212021130925nbxs2.jpg','Oiseau'),(257,0,'noir','','01212021130941nbxs10.jpg','Fourmis'),(258,0,'noir','','01212021131012nbxs4.jpg','Oiseau'),(259,1,'noir','Noir et blanc','01212021131046nbxs1.jpg','Biche'),(260,0,'noir','','01212021131112nbxs5.jpg','Mouette'),(261,0,'noir','','01212021131124nbxs7.jpg','Plume'),(262,0,'noir','','01212021131142nbxs11.jpg','Oiseau'),(263,0,'noir','','01212021131156nbxs6.jpg','Arbre'),(264,0,'noir','','01212021131212nbxs8.jpg','Canard'),(265,0,'noir','','01212021131225nbxs12.jpg','Branche reflet'),(266,0,'noir','','01212021131241nbxs3.jpg','Oiseau');
/*!40000 ALTER TABLE `galerie_photo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-06 11:16:08
