-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 01 月 02 日 07:59
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `ng_shop`
--

-- --------------------------------------------------------

--
-- 表的结构 `php34_admin`
--

CREATE TABLE IF NOT EXISTS `php34_admin` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL COMMENT '账号',
  `password` char(32) NOT NULL COMMENT '密码',
  `is_use` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '是否启用 1：启用0：禁用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `php34_admin`
--

INSERT INTO `php34_admin` (`id`, `username`, `password`, `is_use`) VALUES
(1, 'root', 'bafcbdc80e0ca50e92abe420f506456b', 1);

-- --------------------------------------------------------

--
-- 表的结构 `php34_goods`
--

CREATE TABLE IF NOT EXISTS `php34_goods` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(45) NOT NULL COMMENT '商品名称',
  `logo` varchar(150) NOT NULL DEFAULT '' COMMENT '商品logo',
  `sm_logo` varchar(150) NOT NULL DEFAULT '' COMMENT '商品缩略图logo',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品价格',
  `goods_desc` longtext COMMENT '商品描述',
  `is_on_sale` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '是否上架：1：上架，0：下架',
  `is_delete` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否已经删除，1：已经删除 0：未删除',
  `addtime` int(10) unsigned NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `price` (`price`),
  KEY `is_on_sale` (`is_on_sale`),
  KEY `is_delete` (`is_delete`),
  KEY `addtime` (`addtime`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `php34_goods`
--

INSERT INTO `php34_goods` (`id`, `goods_name`, `logo`, `sm_logo`, `price`, `goods_desc`, `is_on_sale`, `is_delete`, `addtime`) VALUES
(1, '珠宝1', 'Goods/2015-12-13/566d1a49689d3.jpg', 'Goods/2015-12-13/thumb_566d1a49689d3.jpg', '12398.00', '不错啊', 1, 0, 1449990729),
(2, '珠宝2', 'Goods/2015-12-13/566d1a73960b1.jpg', 'Goods/2015-12-13/thumb_566d1a73960b1.jpg', '99999999.99', '还行吧', 1, 0, 1449990771),
(3, '珠宝3', 'Goods/2015-12-13/566d1a96eebf2.jpg', 'Goods/2015-12-13/thumb_566d1a96eebf2.jpg', '78945.00', '还行吧', 1, 0, 1449990806),
(4, '珠宝5', 'Goods/2015-12-13/566d1ac038133.jpg', 'Goods/2015-12-13/thumb_566d1ac038133.jpg', '123456.00', '不错', 1, 0, 1449990848),
(5, '珠宝6', 'Goods/2015-12-13/566d1ae1e7ef0.jpg', 'Goods/2015-12-13/thumb_566d1ae1e7ef0.jpg', '123.00', '还行', 1, 0, 1449990881),
(6, '珠宝6', 'Goods/2015-12-13/566d35071c26b.jpg', 'Goods/2015-12-13/thumb_566d35071c26b.jpg', '569.00', '不错', 1, 0, 1449997575),
(7, '珠宝7', 'Goods/2015-12-13/566d3524a11ba.jpg', 'Goods/2015-12-13/thumb_566d3524a11ba.jpg', '8956.00', '不错啊', 1, 0, 1449997604),
(8, '珠宝8', 'Goods/2015-12-13/566d353b22889.jpg', 'Goods/2015-12-13/thumb_566d353b22889.jpg', '569.00', '还行', 1, 0, 1449997627);

-- --------------------------------------------------------

--
-- 表的结构 `php34_order`
--

CREATE TABLE IF NOT EXISTS `php34_order` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL COMMENT '下单用户名',
  `addr` longtext COMMENT '商品描述',
  `phone` varchar(45) NOT NULL COMMENT '电话',
  `sex` tinyint(3) unsigned DEFAULT NULL COMMENT '性别：1：男，2：女',
  `addtime` int(10) unsigned NOT NULL COMMENT '添加时间',
  `goodid` varchar(50) DEFAULT NULL,
  `goodnum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=61 ;

--
-- 转存表中的数据 `php34_order`
--

INSERT INTO `php34_order` (`id`, `user_name`, `addr`, `phone`, `sex`, `addtime`, `goodid`, `goodnum`) VALUES
(34, '发光飞碟', '法国法国', '法国', NULL, 0, '2', 2),
(33, '炎热', '大幅度', '代付', NULL, 0, '2', 2),
(19, 'xinyuhai77', '北海合浦', '10086', NULL, 0, '2', 1),
(20, 'xinyuhai77', '合浦常乐', '10086', NULL, 0, '2', 4),
(21, '叶向晚77', '北海市', '18607888537', NULL, 0, '2', 4),
(22, 'xinyuhai77', '南宁', '10086', NULL, 0, '2', 4),
(23, 'xinyuhai77', '南宁', '10086', NULL, 0, '2', 3),
(24, '叶向晚77', '南宁', '18607885', NULL, 0, '2', 3),
(25, '叶向晚77', '南宁', '10086', NULL, 0, '2', 1),
(26, '叶向晚77', '南宁', '10086', NULL, 0, '2', 1),
(27, '叶向晚', '南宁', '10086', NULL, 0, '2', 3),
(28, '叶向晚', '南宁', '10086', NULL, 0, '2', 3),
(60, '', '', '', NULL, 0, '2', 1),
(59, '个梵蒂冈', '法国', '法国', NULL, 0, '2', 2),
(58, '飞代付', '的辅导费', '代付', NULL, 0, '2', 2),
(49, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(50, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(51, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(52, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(53, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(54, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(55, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(56, '法国风格', '法国法国', '法国', NULL, 0, '2', 2),
(57, '法国风格', '法国法国', '法国', NULL, 0, '2', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
