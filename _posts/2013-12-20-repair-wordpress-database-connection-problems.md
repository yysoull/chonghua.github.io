---
id: 2357
title: WordPress无法连接到数据库的常见原因
date: 2013-12-20T13:29:05+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2357
permalink: /repair-wordpress-database-connection-problems/
categories:
  - wordpress技巧
tags:
  - 数据库
---
使用**WordPress**出现无法连接到数据的问题是经常遇到的问题，原因很多，有时候面对这种情形，总有一种骂人的冲动，不过问题还是要解决的。一般来说，如果你可以访问后台，问题应该不大。

<!--more-->

<img style="margin-right: auto; margin-left: auto; float: none; display: block;" src="http://g.hiphotos.bdimg.com/album/s%3D550%3Bq%3D90%3Bc%3Dxiangce%2C100%2C100/sign=35cc0944a38b87d65442ab1a37335905/8601a18b87d6277f18ff894d2a381f30e824fcd2.jpg?referer=a674c8660bf79052b608730e3cb0&x=.jpg" alt="WordPress无法连接到数据库的常见原因" /> 

基本上出现这种数据库问题，不外乎这些原因：

<h2 align="left">
  数据库的配置出错，也就是<strong>wp-config</strong>文件被改动了
</h2>

可能是你自己忘记了，也可能是你的主机商或者黑客，不过这种事发生的几率不是很大。在进行其它项目的排查之前，最好还是看一眼吧。需要注意的是，有的云主机商的数据库连接可能是比较特殊的，一般用的都是变量值。

## 数据库服务器没有启动或者遇到问题

这个也是经常会发生的，怎么确定呢，你可以问一下和你同在一个主机的用户或者你的主机商，问问他们。一般比较负责任的主机商都会在明显的位置发布最新的服务器状态的。

## 数据库**wp_options**出现问题

这个应该是最常见的了，修复也很简单

  1. 使用**phpmyadmin**到后台去直接修复这个表； 
      * wp-config.php中增加一句代码：`define('WP_ALLOW_REPAIR', true);`然后访问后台登陆界面/wp-admin/按照指引进行操作。</ol>