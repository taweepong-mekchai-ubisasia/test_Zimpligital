-- Adminer 4.8.1 MySQL 10.4.32-MariaDB dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `playlists`;
CREATE TABLE `playlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `playlists` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1,	'Top Hits 2024',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(2,	'Chill Vibes',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(3,	'Rock Classics',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16');

DROP TABLE IF EXISTS `playlist_songs`;
CREATE TABLE `playlist_songs` (
  `playlist_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`playlist_id`,`song_id`),
  KEY `song_id` (`song_id`),
  CONSTRAINT `playlist_songs_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `playlists` (`id`) ON DELETE CASCADE,
  CONSTRAINT `playlist_songs_ibfk_2` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `playlist_songs` (`playlist_id`, `song_id`, `createdAt`, `updatedAt`) VALUES
(1,	1,	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(1,	2,	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(2,	3,	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(3,	4,	'2024-09-06 19:13:16',	'2024-09-06 19:13:16');

DROP TABLE IF EXISTS `songs`;
CREATE TABLE `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `songs` (`id`, `title`, `artist`, `createdAt`, `updatedAt`) VALUES
(1,	'Shape of You',	'Ed Sheeran',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(2,	'Blinding Lights',	'The Weeknd',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(3,	'Levitating',	'Dua Lipa',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16'),
(4,	'Watermelon Sugar',	'Harry Styles',	'2024-09-06 19:13:16',	'2024-09-06 19:13:16');

-- 2024-09-06 12:21:12
