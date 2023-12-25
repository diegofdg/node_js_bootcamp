-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-12-2023 a las 12:07:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bienesraices_node_mvc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, 'Casa', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(2, 'Departamento', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(3, 'Bodega', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(4, 'Terreno', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(5, 'Cabaña', '2023-11-20 22:30:57', '2023-11-20 22:30:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `mensaje` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `propiedadId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `mensaje`, `createdAt`, `updatedAt`, `propiedadId`, `usuarioId`) VALUES
(1, 'Hola, me interesa la propiedad', '2023-12-24 10:00:18', '2023-12-24 10:00:18', '3a6c4b5c-16c6-4b76-ba24-46ed30a1de42', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios`
--

CREATE TABLE `precios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `precios`
--

INSERT INTO `precios` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(1, '0 - $10,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(2, '$10,000 - $30,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(3, '$30,000 - $50,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(4, '$50,000 - $75,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(5, '$75,000 - $100,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(6, '$100,000 - $150,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(7, '$150,000 - $200,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(8, '$200,000 - $300,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(9, '$300,000 - $500,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(10, '+ $500,000 USD', '2023-11-20 22:30:57', '2023-11-20 22:30:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `habitaciones` int(11) NOT NULL,
  `estacionamiento` int(11) NOT NULL,
  `wc` int(11) NOT NULL,
  `calle` varchar(60) NOT NULL,
  `lat` varchar(255) NOT NULL,
  `lng` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `publicado` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `precioId` int(11) DEFAULT NULL,
  `categoriaId` int(11) DEFAULT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `propiedades`
--

INSERT INTO `propiedades` (`id`, `titulo`, `descripcion`, `habitaciones`, `estacionamiento`, `wc`, `calle`, `lat`, `lng`, `imagen`, `publicado`, `createdAt`, `updatedAt`, `precioId`, `categoriaId`, `usuarioId`) VALUES
('0cee41e1-f50c-4cdc-a180-2c5f7fd35854', 'Departamento con alberca', 'Departamento en el lago con excelente vista, acabados de lujo a un excelente precio', 3, 1, 3, '3031 E Cesar E Chavez Ave', '34.043263990452', '-118.19939103825', 'af21rjjgp1hib4i5ca.jpg', 1, '2023-12-23 10:46:52', '2023-12-24 22:19:37', 6, 2, 1),
('0fe2696a-a4ce-4a36-b7f7-cdfbbc895deb', 'Casa de Lujo en el Lago con alberca', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 4, 3, 3, '1140 S Atlantic Blvd', '34.047521335309', '-118.139888255659', 'd9o39o1hibpolkiujhyg.jpg', 0, '2023-11-21 08:18:00', '2023-12-24 22:19:39', 7, 1, 1),
('3350ce4c-2b03-4f46-a99e-cc92992f8e44', 'Departamento terminados de lujo', 'Departamento en el lago con excelente vista, acabados de lujo a un excelente precio', 3, 4, 3, 'CA-60 E', '34.03604913054', '-118.152550506103', 'pqasdc5tgeeing1hib4l.jpg', 0, '2023-11-21 08:09:30', '2023-12-23 11:10:17', 7, 2, 1),
('3a6c4b5c-16c6-4b76-ba24-46ed30a1de42', 'Casa de Lujo en el Lago', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 1, 1, 1, '414 Casuda Canyon Dr', '34.058829864416', '-118.154336560463', 'iv51vk51jcg1hib4s67v.jpg', 1, '2023-12-23 10:52:24', '2023-12-23 10:52:29', 5, 1, 1),
('4dae951f-c5bf-43a4-a468-e5c1c2a9e918', 'Departamento de Lujo en el Lago', 'Departamento en el lago con excelente vista, acabados de lujo a un excelente precio', 1, 1, 1, '4825 E Civic Center Way', '34.034738329108', '-118.160144756367', 'it5vs7c7vg1hib4e0aq.jpg', 1, '2023-12-23 10:44:17', '2023-12-23 11:10:48', 3, 2, 1),
('614424a6-cd2e-4120-9831-653fab763029', 'Casa con alberca', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 4, 4, 4, '243 N Soto St', '34.046142957472', '-118.208297918442', '92rdvqojfoo1hib4qk5l.jpg', 1, '2023-12-23 10:51:30', '2023-12-23 10:51:38', 10, 1, 1),
('6465cc36-d1e1-490b-9ea5-622137d1d16e', 'Casa con alberca de lujo', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 3, 3, 4, '1024 Ridgecrest St', '34.050229980634', '-118.152733006586', 'sf4rd1q02s81hfogsc20.jpg', 1, '2023-11-22 10:13:42', '2023-12-14 09:55:37', 3, 1, 1),
('657238bf-66a6-4d8c-8c24-0f2af271b91c', 'Bodega terminados de lujo', 'Bodega en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 1, 1, 'Avenida Cesar Chavez', '34.040659984593', '-118.153839111328', 'k45qr5qdof81hib4gdro.jpg', 1, '2023-12-23 10:45:52', '2023-12-23 11:11:12', 4, 3, 1),
('9274fbdd-d149-45b4-aab3-635e8c80f96d', 'Departamento de Lujo en el Lago con alberca', 'Departamento en el lago con excelente vista, acabados de lujo a un excelente precio', 3, 4, 3, '823 S Atlantic Blvd', '34.052372', '-118.137555', '81hib4p5ug7r7o0ypxcd.jpg', 0, '2023-11-20 22:56:22', '2023-12-23 11:11:33', 1, 2, 1),
('a29b8921-3ee4-44ca-8e7f-ff3c30a7daae', 'Cabaña con alberca', 'Cabaña en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 1, 2, '5127 Whittier Blvd', '34.021006', '-118.158933', 'a3fukki1bdo1hib4tmm4.jpg', 1, '2023-12-23 11:06:40', '2023-12-23 11:06:46', 7, 5, 1),
('b19fc247-b13e-4bb8-8f6b-c593e9e9995f', 'Casa terminados de lujo', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 3, 3, 4, 'I-710 N', '34.03630274897', '-118.169922750399', 'por5tdgbcpdvqoo1hik5.jpg', 0, '2023-11-20 23:19:56', '2023-12-14 09:57:04', 9, 1, 1),
('b6d55b51-af24-44e5-a26d-54bb90f0ceeb', 'Departamento con alberca de lujo', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 4, 3, 3, '4413 Floral Dr', '34.044513983673', '-118.170942020682', 'dpol9osaasd39o1hibw4.jpg', 0, '2023-11-22 10:06:21', '2023-12-14 09:58:39', 4, 2, 1),
('b84faefc-0e95-4358-8ebb-f0913ae250d9', 'Bodega en el lago con terminados de lujo', 'Bodega en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 2, 2, 'CA-60 E', '34.033032462787', '-118.132381460262', 'fna5rd9o39o1hib4p6qj.jpg', 1, '2023-12-23 10:50:13', '2023-12-23 11:11:53', 7, 3, 1),
('d1b3b603-b3ca-4c41-b4ae-ebfe0c1576cc', 'Cabaña de Lujo en el Lago', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 2, 2, 'Mile 4 CA-60 W', '34.036689979973', '-118.157900030798', 'pkhgfcvty745plo1hib4.jpg', 0, '2023-11-20 23:33:38', '2023-12-14 09:59:25', 9, 5, 1),
('d734dcde-91b4-4cb1-8669-bd3924c593c4', 'Departamento terminados de lujo con alberca', 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 2, 2, '', '34.051094927024', '-118.119506835938', 't5n59qe0qt1hib5mabf.jpg', 1, '2023-12-23 10:53:13', '2023-12-23 10:53:19', 5, 2, 1),
('e0a5f40b-440a-458a-8c35-057f6341ca69', 'Cabaña terminados de lujo', 'Cabaña en el lago con excelente vista, acabados de lujo a un excelente precio', 2, 1, 3, '1111 Corporate Center Dr', '34.050203', '-118.16415', 'heitgreeing1hib4lq6k.jpg', 1, '2023-12-23 10:48:52', '2023-12-23 11:12:14', 8, 5, 1),
('f819b3d3-75ff-4a5d-97bf-35cc316105f1', 'Departamento de Lujo en el Lago', 'Departamento en el lago con excelente vista, acabados de lujo a un excelente precio', 4, 4, 4, '5849 Via Corona St', '34.025017', '-118.143103', 'mtdkod1q6r81hib4k896.jpg', 1, '2023-12-23 10:47:58', '2023-12-23 10:48:09', 9, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `confirmado` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `token`, `confirmado`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan', 'juan@juan.com', '$2b$10$RpTUGF5tp9h2XHG7Bcgn1.3sNRDIbls6OQBrrVqHqxkYkj5Bk5MZu', NULL, 1, '2023-11-20 22:30:57', '2023-11-20 22:30:57'),
(2, 'Diego', 'diego@diego.com', '$2b$10$DyYV2Le81z5gEEEQENOtfe.Tw151hp5ho.2nMSU3ekX2B1/kzuy0.', NULL, 1, '2023-12-21 02:49:01', '2023-12-21 02:52:08');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `propiedadId` (`propiedadId`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `precios`
--
ALTER TABLE `precios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `precioId` (`precioId`),
  ADD KEY `categoriaId` (`categoriaId`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `precios`
--
ALTER TABLE `precios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `mensajes_ibfk_1` FOREIGN KEY (`propiedadId`) REFERENCES `propiedades` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `mensajes_ibfk_2` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD CONSTRAINT `propiedades_ibfk_1` FOREIGN KEY (`precioId`) REFERENCES `precios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `propiedades_ibfk_2` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `propiedades_ibfk_3` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
