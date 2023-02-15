-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: supplychainmanagement
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `customer_type`
--

DROP TABLE IF EXISTS `customer_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_type` (
  `customertypeid` char(5) NOT NULL,
  `customertype` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`customertypeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_type`
--

LOCK TABLES `customer_type` WRITE;
/*!40000 ALTER TABLE `customer_type` DISABLE KEYS */;
INSERT INTO `customer_type` VALUES ('CSTEN','Endcustomer'),('CSTRE','Retailer'),('CSTWH','Wholesaler');
/*!40000 ALTER TABLE `customer_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` char(5) NOT NULL,
  `customertypeid` char(5) DEFAULT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `contactnumber` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customertypeid` (`customertypeid`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`customertypeid`) REFERENCES `customer_type` (`customertypeid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('00001','CSTWH','Lithurshan','Kanagalingam','0778915343','NO 110, Rajaveethi, Thoppu, Atchuvely'),('00002','CSTWH','Nithursika','Kalanantharasan','0772943883','NO 26, Kalavavodai, Erlalai, East'),('00003','CSTWH','Mithu','Rajan','0762915343','Erlalai west,chunnakam'),('00004','CSTWH','Berry','Alan','0778911234','NO 02,1st cross street,jaffna'),('00101','CSTRE','Shabthana','Johnson','0770330168','N0 20, Mallakam junction, Mallakam'),('00102','CSTRE','Sankavi','manobala','0770112309','N0 202, Bank lane , Chunnakam'),('00103','CSTRE','Vijitha','Baskaran','0752908372','N0 120, school lane, alaveddy'),('00104','CSTRE','Sivani','Sivaprakasam','0753241990','N0 33, market lane, Marthanarmadam'),('00201','CSTEN','Clark','Grifin','0762123883','NO 22, 1st lane, chunnakam'),('00202','CSTEN','Nithun','Kumar','0772911243',' Alavavodai,Erlalai '),('00203','CSTEN','Aron','Thas','0778987234','NO 231, 2nd lane,mannar');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_schedule`
--

DROP TABLE IF EXISTS `driver_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_schedule` (
  `driverid` char(5) NOT NULL,
  `weeklyhours` decimal(4,2) DEFAULT NULL,
  `consecutivedrives` decimal(1,0) DEFAULT NULL,
  PRIMARY KEY (`driverid`),
  CONSTRAINT `driver_schedule_ibfk_1` FOREIGN KEY (`driverid`) REFERENCES `drivers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_schedule`
--

LOCK TABLES `driver_schedule` WRITE;
/*!40000 ALTER TABLE `driver_schedule` DISABLE KEYS */;
INSERT INTO `driver_schedule` VALUES ('00001',30.50,1),('00002',28.40,0),('00003',12.40,0),('00101',28.40,0),('00102',14.35,1),('00103',23.40,0),('00104',17.34,1),('00105',14.67,0),('00106',14.67,0);
/*!40000 ALTER TABLE `driver_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver_type`
--

DROP TABLE IF EXISTS `driver_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_type` (
  `drivertypeid` char(5) NOT NULL,
  `drivertype` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`drivertypeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_type`
--

LOCK TABLES `driver_type` WRITE;
/*!40000 ALTER TABLE `driver_type` DISABLE KEYS */;
INSERT INTO `driver_type` VALUES ('AsDri','Assistant Driver'),('MaDri','Driver');
/*!40000 ALTER TABLE `driver_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drivers` (
  `id` char(5) NOT NULL,
  `profilepicture` blob,
  `drivertypeid` char(5) DEFAULT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `contactnumber` varchar(10) DEFAULT NULL,
  `street` varchar(25) DEFAULT NULL,
  `town` varchar(25) DEFAULT NULL,
  `district` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `drivertypeid` (`drivertypeid`),
  CONSTRAINT `drivers_ibfk_1` FOREIGN KEY (`drivertypeid`) REFERENCES `driver_type` (`drivertypeid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers`
--

LOCK TABLES `drivers` WRITE;
/*!40000 ALTER TABLE `drivers` DISABLE KEYS */;
INSERT INTO `drivers` VALUES ('00001',NULL,'MaDri','Thanushanth','Kanagarajah','0767690673','Church lane','Kandy','Kandy'),('00002',NULL,'MaDri','Navan','Venthan','0774567123','Courts lane','Wellawata','Colombo'),('00003',NULL,'MaDri','Karan','Saravanan','0757878223','1st lane','Negombo','Negombo'),('00004',NULL,'MaDri','Krish','Selva','0767690673','3rd cross lane','Galle','Galle'),('00005',NULL,'MaDri','Vinai','Sivalingam','0753432567','Courts lane','Matara','Matara'),('00006',NULL,'MaDri','Vijai','Surja','0772998012','Uppuveli road','Trincomalee','Trinco'),('00007',NULL,'MaDri','Ajith','Ram','0776545332','2nd lane','Jaffna','Jaffna'),('00101',NULL,'AsDri','Thor','Odension','0767123673','Kattubeththa','Moratuwa','Colombo'),('00102',NULL,'AsDri','Tony','Stark','0767690321','Sivapuram','Parantan','Negombo'),('00103',NULL,'AsDri','Bruce','Banner','0778990673','Prince road','Alankulam','Galle'),('00104',NULL,'AsDri','Steve','Rogers','0778760673','2nd lane','Alampitti','Matara'),('00105',NULL,'AsDri','Wanda','Vision','0778760333','Kasthorijar road','Wellawatta','COlombo'),('00106',NULL,'AsDri','Black','Widow','0765432673','Raja road','Kinniya','Trinco'),('00107',NULL,'AsDri','Black','Panther','0774532673','Rani Road','Diyannavala','Kandy');
/*!40000 ALTER TABLE `drivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` char(5) NOT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `contactnumber` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('10001','Meenambika','Chandrakumar','0775630056','Soysa road, moratuwa, colombo'),('10002','Shabthana','Johnson','0773456454','1st cross road, Kandy, Kandy'),('10003','Kalaivili','Chandran','0779989221','Courts road, Wellawatta, colombo'),('10004','Mathan','Pugal','0754467990','Church lane, Kandy, Kandy'),('10005','Ravi','Arnachalam','0772323778','Arthur\'s Seat, Kandy, Kandy'),('10006','Arch‪ie','Andrews','0765611156','kondavil, Jaffna'),('10007','Betty','Cooper','0772230056','NO 112, Digana,Kandy');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `itemID` char(5) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `weight` decimal(3,2) DEFAULT NULL,
  `unitprice` decimal(10,2) DEFAULT NULL,
  `maxtransferweight` decimal(5,2) DEFAULT NULL,
  `stockavailability` int DEFAULT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES ('IT001','Sugar',0.20,150.35,10.00,23),('IT002','Margarine',0.50,1100.00,15.00,16),('IT003','Flour',1.00,150.35,250.00,18),('IT004','Tea',0.50,1300.00,14.00,22),('IT005','Honey',0.30,203.75,15.00,33),('IT006','Dark Chocolate',0.40,123.45,15.00,21),('IT007','SYogurtugar',0.60,167.25,15.00,23);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordered_items`
--

DROP TABLE IF EXISTS `ordered_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordered_items` (
  `orderid` varchar(5) DEFAULT NULL,
  `itemid` varchar(5) DEFAULT NULL,
  KEY `itemid` (`itemid`),
  KEY `orderid` (`orderid`),
  CONSTRAINT `ordered_items_ibfk_1` FOREIGN KEY (`itemid`) REFERENCES `item` (`itemID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ordered_items_ibfk_2` FOREIGN KEY (`orderid`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordered_items`
--

LOCK TABLES `ordered_items` WRITE;
/*!40000 ALTER TABLE `ordered_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordered_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` char(5) NOT NULL,
  `customerid` char(5) DEFAULT NULL,
  `ordereddate` datetime DEFAULT NULL,
  `deliveryaddress` varchar(600) DEFAULT NULL,
  `orderstatus` varchar(20) DEFAULT NULL,
  `employeeid` char(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customerid` (`customerid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`employeeid`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `railway`
--

DROP TABLE IF EXISTS `railway`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `railway` (
  `name` varchar(20) NOT NULL,
  `destination` varchar(20) NOT NULL,
  `arrivaltime` time DEFAULT NULL,
  `depaturetime` time DEFAULT NULL,
  PRIMARY KEY (`name`,`destination`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `railway`
--

LOCK TABLES `railway` WRITE;
/*!40000 ALTER TABLE `railway` DISABLE KEYS */;
INSERT INTO `railway` VALUES ('ACExpress','Galle','11:00:00','16:30:00'),('Sridevi','Negambo','08:15:00','14:15:00'),('Utaradevi','Jaffna','12:15:00','15:15:00'),('Utaradevi','Vavuniya','12:15:00','14:15:00');
/*!40000 ALTER TABLE `railway` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` char(5) NOT NULL,
  `district` varchar(10) DEFAULT NULL,
  `location` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `store_ibfk_1` (`district`,`location`),
  CONSTRAINT `store_ibfk_1` FOREIGN KEY (`district`, `location`) REFERENCES `railway` (`name`, `destination`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 11:13:57
