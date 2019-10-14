---
id: 1221
title: 修改PHP Memory Limit
date: 2013-04-13T21:08:57+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1221
permalink: /ways-increasing-php-memory-limit/
categories:
  - wordpress技巧
tags:
  - 内存限制
---
WordPress 在使用过程中有时候会遇到内存溢出的问题，可能是你的主机默认分配的内存不够，通常情况下，我们可以修改 **php.ini**这个文件，但是你的主机不一定会有权限让你修改，如果你使用的是 <a href="http://www.wordpress.com/" target="_blank">WordPress</a> 那么其实还有其它的几种方法，以备不时只需。

<!--more-->

### wp-config.php

在你安装 WordPress 的根目录，打开wp-config.php文件，添加下面的代码：

<pre class="prettyprint">define(‘WP_MEMORY_LIMIT’, ’64M’);</pre>

### install.php

在你的 WordPress 的 wp-admin 目录下找到此文件，添加下面的代码：

<pre class="prettyprint">ini_set(‘memory_limit’,’64M’);</pre>

### .htaccess

在你的站点根目录的.htaccess文件中添加下面一行：

<pre class="prettyprint">php_value memory_limit 64M</pre>

&nbsp;

原文：<a title="http://sangkrit.net/2013/04/13/different-ways-of-increasing-php-memory-limit-when-using-wordpress/" href="http://sangkrit.net/2013/04/13/different-ways-of-increasing-php-memory-limit-when-using-wordpress/" target="_blank">http://sangkrit.net/2013/04/13/different-ways-of-increasing-php-memory-limit-when-using-wordpress/</a>