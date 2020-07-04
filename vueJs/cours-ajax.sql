-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  ven. 26 juin 2020 à 16:24
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cours-ajax`
--

-- --------------------------------------------------------

--
-- Structure de la table `todos`
--

DROP TABLE IF EXISTS `todos`;
CREATE TABLE IF NOT EXISTS `todos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `todos`
--

INSERT INTO `todos` (`id`, `nom`) VALUES
(1, 'Liste des élèves'),
(2, 'Liste des langages'),
(4, 'Presentation Genos'),
(5, 'C\'est magique');

-- --------------------------------------------------------

--
-- Structure de la table `todos_ligne`
--

DROP TABLE IF EXISTS `todos_ligne`;
CREATE TABLE IF NOT EXISTS `todos_ligne` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_todos` int(11) NOT NULL,
  `tache` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `todos_ligne`
--

INSERT INTO `todos_ligne` (`id`, `id_todos`, `tache`) VALUES
(1, 5, 'Premiere tache'),
(2, 5, 'deuxieme tache'),
(3, 5, 'Ajout'),
(4, 5, 'En'),
(5, 5, 'Direct');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
