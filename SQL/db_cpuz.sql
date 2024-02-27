-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour db_cpuz
CREATE DATABASE IF NOT EXISTS `db_cpuz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_cpuz`;

-- Listage de la structure de table db_cpuz. doctrine_migration_versions
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Listage des données de la table db_cpuz.doctrine_migration_versions : ~5 rows (environ)
DELETE FROM `doctrine_migration_versions`;
INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
	('DoctrineMigrations\\Version20240219083731', '2024-02-19 08:38:01', 30),
	('DoctrineMigrations\\Version20240219090413', '2024-02-19 09:04:20', 42),
	('DoctrineMigrations\\Version20240222093617', '2024-02-22 09:36:27', 63),
	('DoctrineMigrations\\Version20240222113620', '2024-02-22 11:36:33', 76),
	('DoctrineMigrations\\Version20240226100839', '2024-02-26 10:09:12', 70);

-- Listage de la structure de table db_cpuz. microprocesseur
CREATE TABLE IF NOT EXISTS `microprocesseur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marque` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `famille` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `frequence` decimal(2,1) NOT NULL,
  `prix` decimal(3,0) NOT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Listage des données de la table db_cpuz.microprocesseur : ~9 rows (environ)
DELETE FROM `microprocesseur`;
INSERT INTO `microprocesseur` (`id`, `marque`, `famille`, `model`, `frequence`, `prix`, `stock`) VALUES
	(101, 'AMD', 'Ryzen 3', '3200G', 3.6, 99, NULL),
	(102, 'AMD', 'Ryzen 5', '3600', 3.6, 129, NULL),
	(103, 'AMD', 'Ryzen 5', '5600G', 3.9, 149, NULL),
	(104, 'AMD', 'Ryzen 7', '5800X', 3.8, 249, NULL),
	(105, 'AMD', 'Ryzen 7', '7800X3D', 4.2, 499, NULL),
	(106, 'INTEL', 'Core i5', '13500', 2.5, 139, NULL),
	(107, 'INTEL', 'Core i5', '13600K', 3.5, 159, NULL),
	(108, 'INTEL', 'Core i7', '13700K', 3.4, 169, NULL),
	(109, 'INTEL', 'Core i7', '4790', 3.6, 79, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
