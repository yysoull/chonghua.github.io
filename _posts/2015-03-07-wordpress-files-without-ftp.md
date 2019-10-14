---
id: 2960
title: 无需登录FTP创建文件
date: 2015-03-07T12:16:01+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2960
permalink: /wordpress-files-without-ftp/
categories:
  - wordpress技巧
tags:
  - ftp
---
一般情况下，如果我们要在 WordPress 中创建一个文件，比如说实现自定义页面的模板。可以使用 FTP 或者主机管理系统的文件管理器。不过，每次都要登录，未免太麻烦。这里有一个简单的方法，可以让你直接在WordPress 后台创建文件。

<!--more-->

PHP 有个叫做“touch”的函数就能实现。假如我们要在主题目录中创建一个名为“hello.php”的文件。

登录 WordPress 后台，进入“外观”-“编辑”界面，打开右侧“模板”列的“header.php”文件，输入下列代码：

`<?php touch('wp-content/themes/wordpress-bootstrap-master/hello.php); ?>`

请注意路径和文件名。

![无需登录FTP创建文件](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/touch.png) 

然后更新此文件，访问一下您的博客。然后，“hello.php”这个文件就出现在右侧了，您就可以编辑了。

![无需登录FTP创建文件](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/touch1.png) 

**<font color="#ff0000">注意</font>**：用后请及时删除代码。您也可以将此代码插入到其它的文件中执行，但需要注意的是，这个页面能够被你访问到，比如：“index.php”、“footer.php”等。

PHP 另外一个函数“file\_put\_contents”也能实现此功能，并且还能生成文件的内容，感兴趣的可以尝试一下。