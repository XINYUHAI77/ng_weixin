<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-cn" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <title></title>
  <link href="/Public/Home/Res/style/main.css" rel="stylesheet">



</head>
<body>
<header class="head"><img src="/Public/Home/Res/images/index_03.jpg" alt=""></header>
<nav class="nav">
  <ul class="clearfix">
    <li><a href="#/hot" class=" overtext">国宝商城</a></li>
    <li><a href="#/hot"  class=" overtext">热销产品</a></li>
    <li><a href=""  class=" overtext">购物车</a></li>
  </ul>
</nav>

<div class="page" ng-view></div>

<footer class="footer">
  <ul class="clearfix">
    <li><a href="#/start">
      <img src="/Public/Home/Res/images/index_31.jpg">
      <span>商城首页</span>
    </a></li>
    <li><a href="">
      <img src="/Public/Home/Res/images/index_34.jpg">
      <span>一键咨询</span>
    </a></li>
  </ul>
</footer>


<script src="/Public/Home/AngularJS/js/angular.js"></script>
<script src="/Public/Home/AngularJS/js/angular-animate.js"></script>
<script src="/Public/Home/AngularJS/js/angular-route.js"></script>
<script src="/Public/Home/AngularJS/js/rout.js"></script>
<script src="/Public/Home/AngularJS/js/app-controller.js"></script>

</body>
</html>