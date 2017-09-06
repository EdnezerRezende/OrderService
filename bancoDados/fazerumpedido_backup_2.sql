-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: fazerumpedido
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `idCategoria` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`idCategoria`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='categorias do cardapio';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Petiscos'),(2,'Bebidas'),(3,'Sobremesas'),(4,'Salgados');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fechar_conta`
--

DROP TABLE IF EXISTS `fechar_conta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fechar_conta` (
  `idFecharConta` int(11) NOT NULL AUTO_INCREMENT,
  `idPrincipal` varchar(100) DEFAULT NULL,
  `dataHoraPedidoFechamento` datetime DEFAULT NULL,
  `dataHoraFechamento` datetime DEFAULT NULL,
  `statusPagamentoDinheiro` varchar(5) DEFAULT NULL,
  `statusPagamentoCartao` varchar(5) DEFAULT NULL,
  `statusPagamentoDebito` varchar(5) DEFAULT NULL,
  `statusPagamentoRefeicao` varchar(5) DEFAULT NULL,
  `observacaoPagamento` varchar(3000) DEFAULT NULL,
  `idQrCode` int(11) unsigned NOT NULL,
  PRIMARY KEY (`idFecharConta`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fechar_conta`
--

LOCK TABLES `fechar_conta` WRITE;
/*!40000 ALTER TABLE `fechar_conta` DISABLE KEYS */;
INSERT INTO `fechar_conta` VALUES (7,NULL,'2017-08-30 16:58:04',NULL,'1','1','1','0','Teste',0),(8,NULL,'2017-08-30 16:59:02',NULL,'1','0','1','0','Outra',0),(9,NULL,'2017-08-30 16:59:38',NULL,'1','0','0','0','Sem location.',0),(10,NULL,'2017-08-30 17:31:42',NULL,'1','0','1','0','Fechar Tudo!',0),(11,NULL,'2017-08-30 17:40:58',NULL,'0','0','0','0',NULL,0),(12,NULL,'2017-08-30 17:41:59',NULL,'0','0','0','0',NULL,0),(13,NULL,'2017-08-30 20:09:34',NULL,'0','0','0','0',NULL,0),(14,NULL,'2017-08-30 20:13:30',NULL,'0','0','0','0',NULL,0),(15,NULL,'2017-08-30 20:14:58',NULL,'1','0','1','0','fechando',0),(16,NULL,'2017-08-30 22:21:32',NULL,'0','0','0','0',NULL,0),(17,NULL,'2017-08-31 17:22:55',NULL,'0','0','0','0',NULL,0),(18,NULL,'2017-08-31 17:29:00',NULL,'0','0','0','0',NULL,0),(19,NULL,'2017-08-31 21:12:27',NULL,'1','0','0','0','Testes',0),(20,NULL,'2017-08-31 21:15:25',NULL,'1','0','1','0',NULL,0),(21,NULL,'2017-08-31 21:17:29',NULL,'0','0','0','0',NULL,0),(22,NULL,'2017-09-01 16:35:11',NULL,'1','0','0','0','Tes',0),(23,NULL,'2017-09-01 16:47:42',NULL,'0','0','0','0',NULL,0),(24,NULL,'2017-09-01 17:42:35',NULL,'0','0','0','0',NULL,0),(25,NULL,'2017-09-01 17:49:07',NULL,'0','0','0','0',NULL,0),(26,NULL,'2017-09-06 00:09:05',NULL,'1','0','1','0',NULL,28);
/*!40000 ALTER TABLE `fechar_conta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `garcon`
--

DROP TABLE IF EXISTS `garcon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `garcon` (
  `idGarcon` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `comentario` varchar(300) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idGarcon`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garcon`
--

LOCK TABLES `garcon` WRITE;
/*!40000 ALTER TABLE `garcon` DISABLE KEYS */;
INSERT INTO `garcon` VALUES (1,'Narigodon','Simpático e animado, sempre disposto a atender com alegria.','img/garcons/garcon1.jpg'),(2,'Zoinho','Alegria em pessoa. Nunca deixa de satisfazer o cliente.','img/garcons/garcon2.jpg'),(3,'Honestino','Pessoa honesta, muito tímido porém com grandes sugestões e dicas para suas solicitações.','img/garcons/garcon3.jpg'),(4,'Simpatilda','Alegre e animada. Rápida nos pedidos e sempre atenciosa.','img/garcons/garcon4.jpg');
/*!40000 ALTER TABLE `garcon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `garcon_chamado`
--

DROP TABLE IF EXISTS `garcon_chamado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `garcon_chamado` (
  `idGarconChamado` int(11) NOT NULL AUTO_INCREMENT,
  `idPrincipal` varchar(100) DEFAULT NULL,
  `dataHoraChamadoMesa` datetime DEFAULT NULL,
  `dataHoraRespostaMesa` datetime DEFAULT NULL,
  `dataHoraChamadoBalcao` datetime DEFAULT NULL,
  `dataHoraRespostaBalcao` datetime DEFAULT NULL,
  `idGarcon` int(11) NOT NULL,
  PRIMARY KEY (`idGarconChamado`),
  KEY `FK_garcon_chamado` (`idGarcon`),
  CONSTRAINT `FK_garcon_chamado` FOREIGN KEY (`idGarcon`) REFERENCES `garcon` (`idGarcon`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garcon_chamado`
--

LOCK TABLES `garcon_chamado` WRITE;
/*!40000 ALTER TABLE `garcon_chamado` DISABLE KEYS */;
INSERT INTO `garcon_chamado` VALUES (1,NULL,'2017-08-31 21:02:21',NULL,NULL,NULL,1),(2,NULL,'2017-08-31 21:02:26',NULL,NULL,NULL,1),(3,NULL,'2017-08-31 21:02:28',NULL,NULL,NULL,4),(4,NULL,'2017-08-31 21:02:31',NULL,NULL,NULL,3);
/*!40000 ALTER TABLE `garcon_chamado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_acompanhamento`
--

DROP TABLE IF EXISTS `pedido_acompanhamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido_acompanhamento` (
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `idPrincipal` varchar(100) DEFAULT NULL,
  `idProdutoServico` int(11) NOT NULL,
  `quantidade` float NOT NULL,
  `dataHoraStatusAcompanhamentoPedido` datetime DEFAULT NULL,
  `dataHoraStatusAcompanhamentoConfirmado` datetime DEFAULT NULL,
  `dataHoraStatusAcompanhamentoCozinha` datetime DEFAULT NULL,
  `dataHoraStatusAcompanhamentoEntregue` datetime DEFAULT NULL,
  `statusAcompanhamentoObservacaoDemorou` varchar(300) DEFAULT NULL,
  `statusImpressao` varchar(5) NOT NULL,
  `restricao` varchar(3000) DEFAULT NULL,
  `statusDescricao` varchar(100) DEFAULT NULL,
  `dataHoraPrevisaoEntrega` datetime DEFAULT NULL,
  `pedidoAtrasado` tinyint(1) DEFAULT NULL,
  `idQrCode` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `FK_produtoServico` (`idProdutoServico`),
  CONSTRAINT `FK_produtoServico` FOREIGN KEY (`idProdutoServico`) REFERENCES `produto_servico` (`idProdutoServico`)
) ENGINE=InnoDB AUTO_INCREMENT=347 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_acompanhamento`
--

LOCK TABLES `pedido_acompanhamento` WRITE;
/*!40000 ALTER TABLE `pedido_acompanhamento` DISABLE KEYS */;
INSERT INTO `pedido_acompanhamento` VALUES (245,NULL,4,1,'2017-09-04 21:20:39',NULL,NULL,NULL,NULL,'1','t','Recebido','2017-09-04 21:35:39',NULL,29),(246,NULL,7,1,'2017-09-04 21:22:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 21:22:40',NULL,30),(247,NULL,5,1,'2017-09-04 21:59:53',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:24:53',NULL,NULL),(248,NULL,7,1,'2017-09-04 22:00:38',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:00:38',NULL,NULL),(249,NULL,4,1,'2017-09-04 22:01:29',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:16:29',NULL,NULL),(250,NULL,4,1,'2017-09-04 22:02:21',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:17:21',NULL,NULL),(251,NULL,1,1,'2017-09-04 22:03:33',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:28:33',NULL,NULL),(252,NULL,4,1,'2017-09-04 22:06:13',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:21:13',NULL,NULL),(253,NULL,4,1,'2017-09-04 22:07:06',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:22:06',NULL,NULL),(254,NULL,4,1,'2017-09-04 22:08:39',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:23:39',NULL,NULL),(255,NULL,3,1,'2017-09-04 22:09:41',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:29:41',NULL,NULL),(256,NULL,5,1,'2017-09-04 22:10:47',NULL,NULL,NULL,NULL,'1','rtest','Recebido','2017-09-04 22:35:47',NULL,NULL),(257,NULL,4,1,'2017-09-04 22:13:18',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:28:18',NULL,NULL),(258,NULL,5,1,'2017-09-04 22:13:46',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:38:46',NULL,NULL),(259,NULL,3,1,'2017-09-04 22:16:00',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:36:00',NULL,NULL),(260,NULL,3,1,'2017-09-04 22:16:25',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:36:25',NULL,NULL),(261,NULL,3,1,'2017-09-04 22:19:25',NULL,NULL,NULL,NULL,'1','test','Recebido','2017-09-04 22:39:25',NULL,NULL),(262,NULL,3,1,'2017-09-04 22:24:22',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:44:22',NULL,NULL),(263,NULL,6,1,'2017-09-04 22:52:32',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 22:57:32',NULL,NULL),(264,NULL,5,1,'2017-09-04 22:57:36',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:22:36',NULL,NULL),(265,NULL,5,1,'2017-09-04 22:59:01',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:24:01',NULL,NULL),(266,NULL,4,1,'2017-09-04 23:03:45',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:18:45',NULL,NULL),(267,NULL,5,1,'2017-09-04 23:04:43',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:29:43',NULL,NULL),(268,NULL,4,1,'2017-09-04 23:06:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:21:40',NULL,NULL),(269,NULL,4,1,'2017-09-04 23:07:17',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:22:17',NULL,NULL),(270,NULL,7,1,'2017-09-04 23:10:39',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:10:39',NULL,NULL),(271,NULL,4,1,'2017-09-04 23:10:58',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:25:58',NULL,NULL),(272,NULL,7,1,'2017-09-04 23:13:33',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:13:33',NULL,NULL),(273,NULL,7,1,'2017-09-04 23:15:51',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:15:51',NULL,NULL),(274,NULL,4,1,'2017-09-04 23:17:24',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:32:24',NULL,NULL),(275,NULL,4,1,'2017-09-04 23:21:06',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:36:06',NULL,NULL),(276,NULL,7,1,'2017-09-04 23:22:15',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:22:15',NULL,NULL),(277,NULL,4,1,'2017-09-04 23:23:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:38:40',NULL,NULL),(278,NULL,7,1,'2017-09-04 23:29:26',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:29:26',NULL,NULL),(279,NULL,4,1,'2017-09-04 23:33:05',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:48:05',NULL,NULL),(280,NULL,4,1,'2017-09-04 23:33:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:48:40',NULL,NULL),(281,NULL,4,1,'2017-09-04 23:33:41',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:48:41',NULL,NULL),(282,NULL,4,1,'2017-09-04 23:35:16',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:50:16',NULL,NULL),(283,NULL,4,1,'2017-09-04 23:35:16',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:50:16',NULL,NULL),(284,NULL,4,1,'2017-09-04 23:37:35',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:52:35',NULL,NULL),(285,NULL,4,1,'2017-09-04 23:37:35',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:52:35',NULL,NULL),(286,NULL,4,1,'2017-09-04 23:38:45',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:53:45',NULL,NULL),(287,NULL,4,1,'2017-09-04 23:38:45',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:53:45',NULL,NULL),(288,NULL,7,1,'2017-09-04 23:45:25',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:45:25',NULL,NULL),(289,NULL,7,1,'2017-09-04 23:45:25',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:45:25',NULL,39),(290,NULL,7,1,'2017-09-04 23:47:41',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:47:41',NULL,NULL),(291,NULL,7,1,'2017-09-04 23:47:41',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-04 23:47:41',NULL,40),(292,NULL,4,1,'2017-09-04 23:48:59',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:03:59',NULL,NULL),(293,NULL,4,1,'2017-09-04 23:49:00',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:04:00',NULL,41),(294,NULL,4,1,'2017-09-04 23:50:39',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:05:39',NULL,NULL),(295,NULL,4,1,'2017-09-04 23:50:39',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:05:39',NULL,42),(296,NULL,4,1,'2017-09-04 23:51:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:06:40',NULL,NULL),(297,NULL,4,1,'2017-09-04 23:51:40',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:06:40',NULL,43),(298,NULL,4,1,'2017-09-04 23:52:54',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:07:54',NULL,NULL),(299,NULL,4,1,'2017-09-04 23:52:54',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:07:54',NULL,44),(300,NULL,4,1,'2017-09-04 23:53:59',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:08:59',NULL,NULL),(301,NULL,4,1,'2017-09-04 23:53:59',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:08:59',NULL,45),(302,NULL,4,1,'2017-09-04 23:58:35',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:13:35',NULL,NULL),(303,NULL,7,1,'2017-09-05 00:01:11',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:01:11',NULL,NULL),(304,NULL,4,1,'2017-09-05 00:06:08',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 00:21:08',NULL,NULL),(305,NULL,7,1,'2017-09-05 08:42:26',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 08:42:26',NULL,NULL),(314,NULL,4,1,'2017-09-05 09:22:25',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 09:37:25',NULL,53),(324,NULL,1,1,'2017-09-05 13:19:38',NULL,NULL,NULL,NULL,'1','test','Recebido','2017-09-05 13:44:38',NULL,65),(326,NULL,4,1,'2017-09-05 17:29:03',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-05 17:44:03',NULL,66),(342,NULL,7,1,'2017-09-05 23:44:09',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-05 23:44:09',NULL,28),(344,NULL,7,1,'2017-09-05 23:46:06',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-05 23:46:06',NULL,28),(345,NULL,4,1,'2017-09-05 23:51:53',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 00:06:53',NULL,28),(346,NULL,2,1,'2017-09-05 23:52:19',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 00:22:19',NULL,28);
/*!40000 ALTER TABLE `pedido_acompanhamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto_servico`
--

DROP TABLE IF EXISTS `produto_servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produto_servico` (
  `idProdutoServico` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` varchar(300) NOT NULL,
  `observacao` varchar(100) DEFAULT NULL,
  `tempoPreparo` time DEFAULT NULL,
  `valorUnitario` float DEFAULT NULL,
  `statusServico` varchar(5) DEFAULT NULL,
  `statusGarconEntrega` varchar(5) DEFAULT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idProdutoServico`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_servico`
--

LOCK TABLES `produto_servico` WRITE;
/*!40000 ALTER TABLE `produto_servico` DISABLE KEYS */;
INSERT INTO `produto_servico` VALUES (1,'Found de Chocolote','Found de Chocolate com guarnições de Banana, morango e abacaxi','Serve 3 Pessoas','00:25:00',35,NULL,NULL,'img/cardapio/found.jpg','Sobremesas'),(2,'Petiscos Variados','Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão','Serve 3 Pessoas','00:30:00',30,NULL,NULL,'img/cardapio/petiscos_Variados.jpg','Petiscos'),(3,'Pão recheado','Contém uma porção de 12 unidades de pão recheado com carne','Serve 3 Pessoas','00:20:00',15,NULL,NULL,'img/cardapio/pao_carne.jpg','Petiscos'),(4,'Pastel de Carne 2','Contém uma porção de 6 unidades de Pastel tamanho médio, sabor carne','Serve 3 Pessoas','00:15:00',15,NULL,NULL,'img/cardapio/pastelzinho.jpg','Petiscos'),(5,'Petiscos Variados 2','Petisco que serve 3 pessoas. Contém linguiça (com e sem pimenta), bolinhos de queijo e molho parmesão','Serve 3 Pessoas','00:25:00',30,NULL,NULL,'img/cardapio/petiscos_Variados.jpg','Petiscos'),(6,'Coxinha de Frango','Coxinha de Frango com catupiry','Serve 1 Pessoa','00:05:00',4.5,NULL,NULL,'img/cardapio/coxinha.jpg','Salgados'),(7,'Coca-Cola','Regrigerante sabor Coca-Cola','600 ml','00:00:00',4,NULL,NULL,'img/cardapio/coxinha.jpg','Bebidas');
/*!40000 ALTER TABLE `produto_servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qrcode`
--

DROP TABLE IF EXISTS `qrcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qrcode` (
  `idQrCode` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ident_empresa` int(11) NOT NULL,
  `ident_cliente` varchar(15) NOT NULL,
  PRIMARY KEY (`idQrCode`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qrcode`
--

LOCK TABLES `qrcode` WRITE;
/*!40000 ALTER TABLE `qrcode` DISABLE KEYS */;
INSERT INTO `qrcode` VALUES (28,1,'123'),(59,1,'12399'),(60,1,'158'),(61,1,'19000'),(62,1,'1887766'),(63,1,'156'),(64,1,'15'),(65,1,'789987'),(66,1,'159753');
/*!40000 ALTER TABLE `qrcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idCliente` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `senha` varchar(10) NOT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Ednezer','123'),(2,'Regis','12');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-06  0:13:00
