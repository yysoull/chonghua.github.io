---
id: 2952
title: 使用Navicat远程管理OpenShift的数据库
date: 2015-01-14T09:25:59+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2949
permalink: /openshift-mysql-navicat-remote-management/
categories:
  - 软件资源
tags:
  - MYSQL
  - Navicat
  - OpenShift
---
其实 phpMyAdmin 这个 web 端的 MySQL 数据库管理工具还是很好的，要不然也不会成为 MySQL 数据库的绝配。但是我想，很多人应该和重华一样，不太喜欢使用 web 端的工具，总觉得还是本地软件来的实在，Navicat 这个软件就非常的好使，虽然不是免费的。当然你用其它的 GUI 管理工具也可以，这里以 Navicat 来说明一下 OpenShift 中的 MySQL 数据库的远程管理。

<!--more-->

#### 获取 MySQL 数据库的连接信息

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat1.png) 

首先需要准备好数据库的地址、用户名、密码等信息。这个可以在你的应用界面可以获得。地址则可以登录phpMyAdmin 后获得。

#### 确定开启远程管理权限

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat2.png) 

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat3.png) 

登录 phpMyAdmin 后，依次打开 _mysql 数据库_-_user表_，查看是否开启了远程管理的权限，如下图所示，第二行就表示已经开启了远程管理权限。

#### Navicat 建立 MySQL 连接

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat4.png) 

在 Navicat 的工具栏或者文件菜单中新建一个 MySQL 数据库连接，填入相应的信息。但是，此时并不能成功连接远程数据库，会出现错误提示。

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat5.png) 

我们还需要设置一下 SSH 选项卡。填入你的 SSH 的登录信息。主机名：您的应用的网址，类似于*.rhcloud.com。用户名：给你的那一长串的用户名，而不是 OpnenShift 的登录用户名。至于如何获取公匙，这里就不再讲了。

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat6.png) 

点击连接测试，可以看到成功连接了！

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat7.png) 

然后就可以进行连接了，但是还会弹出一个密码输入的对话框。这里的密码就是 OpenShift 的登陆密码。

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat8.png) 

点击确定，现在就可以在 Navicat 中管理您的 MySQL 数据库了。

![使用Navicat远程管理OpenShift的数据库](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/navicat9.png) 

其它 GUI 管理工具

##### Workbench、Sequel Pro、HeidiSQL、dbForge Studio、DBTools Manager、MyDB Studio、SQLyog