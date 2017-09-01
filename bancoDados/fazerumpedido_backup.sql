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
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
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
  `idCliente` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idFecharConta`),
  KEY `FK_identificacaoCliente` (`idCliente`),
  CONSTRAINT `FK_identificacaoCliente` FOREIGN KEY (`idCliente`) REFERENCES `usuario` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fechar_conta`
--

LOCK TABLES `fechar_conta` WRITE;
/*!40000 ALTER TABLE `fechar_conta` DISABLE KEYS */;
INSERT INTO `fechar_conta` VALUES (7,NULL,'2017-08-30 16:58:04',NULL,'1','1','1','0','Teste',1),(8,NULL,'2017-08-30 16:59:02',NULL,'1','0','1','0','Outra',1),(9,NULL,'2017-08-30 16:59:38',NULL,'1','0','0','0','Sem location.',1),(10,NULL,'2017-08-30 17:31:42',NULL,'1','0','1','0','Fechar Tudo!',1),(11,NULL,'2017-08-30 17:40:58',NULL,'0','0','0','0',NULL,1),(12,NULL,'2017-08-30 17:41:59',NULL,'0','0','0','0',NULL,1),(13,NULL,'2017-08-30 20:09:34',NULL,'0','0','0','0',NULL,1),(14,NULL,'2017-08-30 20:13:30',NULL,'0','0','0','0',NULL,1),(15,NULL,'2017-08-30 20:14:58',NULL,'1','0','1','0','fechando',1),(16,NULL,'2017-08-30 22:21:32',NULL,'0','0','0','0',NULL,1);
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
  `idProdutoServico` int(11) DEFAULT NULL,
  `dataHoraChamadoMesa` datetime DEFAULT NULL,
  `dataHoraRespostaMesa` datetime DEFAULT NULL,
  `dataHoraChamadoBalcao` datetime DEFAULT NULL,
  `dataHoraRespostaBalcao` datetime DEFAULT NULL,
  PRIMARY KEY (`idGarconChamado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garcon_chamado`
--

LOCK TABLES `garcon_chamado` WRITE;
/*!40000 ALTER TABLE `garcon_chamado` DISABLE KEYS */;
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
  `idCliente` int(10) unsigned NOT NULL,
  `statusDescricao` varchar(100) NOT NULL,
  `dataHoraPrevisaoEntrega` datetime DEFAULT NULL,
  `pedidoAtrasado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `FK_produtoServico` (`idProdutoServico`),
  KEY `FK_Cliente` (`idCliente`),
  CONSTRAINT `FK_Cliente` FOREIGN KEY (`idCliente`) REFERENCES `usuario` (`idCliente`),
  CONSTRAINT `FK_produtoServico` FOREIGN KEY (`idProdutoServico`) REFERENCES `produto_servico` (`idProdutoServico`)
) ENGINE=InnoDB AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_acompanhamento`
--

LOCK TABLES `pedido_acompanhamento` WRITE;
/*!40000 ALTER TABLE `pedido_acompanhamento` DISABLE KEYS */;
INSERT INTO `pedido_acompanhamento` VALUES (132,NULL,1,1,'2017-08-30 11:40:29',NULL,NULL,NULL,NULL,'1',NULL,2,'Recebido',NULL,NULL),(153,NULL,5,1,'2017-08-30 13:04:25',NULL,NULL,NULL,NULL,'5',NULL,1,'Cozinha','2017-08-30 13:29:25',1),(156,NULL,7,1,'2017-08-30 15:03:12',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 15:03:12',NULL),(157,NULL,7,1,'2017-08-30 17:39:36',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 17:39:36',NULL),(158,NULL,7,1,'2017-08-30 20:09:28',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 20:09:28',NULL),(159,NULL,7,1,'2017-08-30 20:14:45',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 20:14:45',NULL),(160,NULL,7,1,'2017-08-30 22:21:21',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 22:21:21',NULL),(161,NULL,4,1,'2017-08-30 22:21:26',NULL,NULL,NULL,NULL,'5',NULL,1,'Recebido','2017-08-30 22:36:26',NULL);
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

-- Dump completed on 2017-08-31 16:20:43
