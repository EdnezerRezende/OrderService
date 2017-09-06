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
  PRIMARY KEY (`idFecharConta`),
  KEY `FK_FecharContaIdqrCode` (`idQrCode`),
  CONSTRAINT `FK_FecharContaIdqrCode` FOREIGN KEY (`idQrCode`) REFERENCES `qrcode` (`idQrCode`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fechar_conta`
--

LOCK TABLES `fechar_conta` WRITE;
/*!40000 ALTER TABLE `fechar_conta` DISABLE KEYS */;
INSERT INTO `fechar_conta` VALUES (27,NULL,'2017-09-06 12:29:38',NULL,'0','0','0','0',NULL,28),(28,NULL,'2017-09-06 12:50:44',NULL,'0','0','0','0',NULL,28);
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
-- Table structure for table `localizacao`
--

DROP TABLE IF EXISTS `localizacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localizacao` (
  `idLocalizacao` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nomeLocalizacao` varchar(50) NOT NULL,
  PRIMARY KEY (`idLocalizacao`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localizacao`
--

LOCK TABLES `localizacao` WRITE;
/*!40000 ALTER TABLE `localizacao` DISABLE KEYS */;
INSERT INTO `localizacao` VALUES (1,'Piscina Adulto'),(2,'Piscina Próximo'),(3,'Churrasqueira 01'),(4,'Churrasqueira 02'),(5,'Churrasqueira 03'),(6,'Churrasqueira 04'),(7,'Churrasqueira 05'),(8,'Churrasqueira 06'),(9,'Restaurante'),(10,'Lanchonete'),(11,'Balcão'),(12,'Quadra de Futebol'),(13,'Quadra de Tênis'),(14,'Piscina Infantil');
/*!40000 ALTER TABLE `localizacao` ENABLE KEYS */;
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
  `idQrCode` int(11) unsigned NOT NULL,
  `idLocalizacao` int(11) unsigned NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `FK_produtoServico` (`idProdutoServico`),
  KEY `FK_IDQrCode` (`idQrCode`),
  KEY `FK_Localizacao` (`idLocalizacao`),
  CONSTRAINT `FK_IDQrCode` FOREIGN KEY (`idQrCode`) REFERENCES `qrcode` (`idQrCode`),
  CONSTRAINT `FK_Localizacao` FOREIGN KEY (`idLocalizacao`) REFERENCES `localizacao` (`idLocalizacao`),
  CONSTRAINT `FK_produtoServico` FOREIGN KEY (`idProdutoServico`) REFERENCES `produto_servico` (`idProdutoServico`)
) ENGINE=InnoDB AUTO_INCREMENT=364 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_acompanhamento`
--

LOCK TABLES `pedido_acompanhamento` WRITE;
/*!40000 ALTER TABLE `pedido_acompanhamento` DISABLE KEYS */;
INSERT INTO `pedido_acompanhamento` VALUES (347,NULL,7,1,'2017-09-06 12:16:19',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 12:16:19',NULL,28,11),(348,NULL,4,2,'2017-09-06 12:16:58',NULL,NULL,NULL,NULL,'5','Pedido com localizacao','Recebido','2017-09-06 12:31:58',NULL,28,3),(349,NULL,7,1,'2017-09-06 12:19:12',NULL,NULL,NULL,NULL,'5','test','Recebido','2017-09-06 12:19:12',NULL,28,3),(350,NULL,7,2,'2017-09-06 12:23:49',NULL,NULL,NULL,NULL,'5','teste','Recebido','2017-09-06 12:23:49',NULL,28,11),(351,NULL,4,1,'2017-09-06 12:28:35',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 12:43:35',NULL,28,7),(352,NULL,3,1,'2017-09-06 12:29:11',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 12:49:11',NULL,28,8),(353,NULL,7,1,'2017-09-06 12:29:28',NULL,NULL,NULL,NULL,'5',NULL,'Recebido','2017-09-06 12:29:28',NULL,28,11),(361,NULL,7,1,'2017-09-06 12:50:20',NULL,NULL,NULL,NULL,'5','teste','Recebido','2017-09-06 12:50:20',NULL,28,11),(362,NULL,7,1,'2017-09-06 12:51:02',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-06 12:51:02',NULL,28,11),(363,NULL,7,1,'2017-09-06 13:08:04',NULL,NULL,NULL,NULL,'1',NULL,'Recebido','2017-09-06 13:08:04',NULL,28,11);
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
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qrcode`
--

LOCK TABLES `qrcode` WRITE;
/*!40000 ALTER TABLE `qrcode` DISABLE KEYS */;
INSERT INTO `qrcode` VALUES (28,1,'123'),(59,1,'12399'),(60,1,'158'),(61,1,'19000'),(62,1,'1887766'),(63,1,'156'),(64,1,'15'),(65,1,'789987'),(66,1,'159753'),(67,1,'124');
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

-- Dump completed on 2017-09-06 13:14:33
