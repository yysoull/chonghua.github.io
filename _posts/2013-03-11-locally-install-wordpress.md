---
id: 1204
title: 本地架设WordPress的几种工具包
date: 2013-03-11T22:23:26+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1204
permalink: /locally-install-wordpress/
categories:
  - 其他资源
tags:
  - lamp
  - mamp
  - wamp
  - xampp
---
不管是对于WordPress的新手还是已经很纯熟的老手来说，在本地架设一个和在线版本同步的本地版本，都是非常有必要的，这将会给后期的维护带来非常大的帮助。

<!--more-->

1.在本地安装、修改、测试主题和插件以及代码都是非常迅速的，完全不依赖网络，节省了FTP上传下载的麻烦和时间；

2.尤其是测试的时候，如果出现错误，可以随时修正，但是发布在网络上的网站就没这么幸运了，重则网站无法访问，给访客造成不好的影响；

3.假如你的WordPress站点出现数据遗失，假使你没有采取相应的备份措施，那么本地的版本就是一个完整的备份，随时可以恢复到线上。

我们知道WordPress运行的最佳环境是：Apache、MySQL、PHP，我们日常所使用的系统大概有3种：Windows、Linux、Mac OS。

我们当然可以大费周章的去一个一个的安装调试环境，但是我么也可以选择更为简单的集成环境包，几乎就是一个点击可执行文件的操作就可以完成环境的搭建。而这3个系统也都可以找到对应的安装包。

### **XAMPP**

XAMPP（Apache+MySQL+PHP+PERL）是一个功能强大的建 XAMPP 软件站集成软件包。这个软件包原来的名字是LAMPP，但是为了避免误解，最新的几个版本就改名为 XAMPP 了。它可以在Windows、Linux、Solaris、Mac OS X四种种操作系统下安装使用，支持多语言：英文、简体中文、繁体中文、韩文、俄文、日文等。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://www.apachefriends.org/images/1902.jpg" width="520" height="427" alt="本地架设WordPress的几种工具包" /> 

官方能够找到各个系统下的安装包的详细操作步骤教程，并且提供全中文的福利哦。

官方网站：<a title="http://www.apachefriends.org/zh_cn/xampp.html" href="http://www.apachefriends.org/zh_cn/xampp.html" target="_blank">http://www.apachefriends.org/zh_cn/xampp.html</a>

### **WAMP**

Windows下的Apache+Mysql+Perl/PHP/Python，一组常用来搭建动态网站或者服务器的开源软件，本身都是各自独立的程序，但是因为常被放在一起使用，拥有了越来越高的兼容度，共同组成了一个强大的Web应用程序平台。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/how-to-install-wamp-11_zps0aceabee.png" width="520" height="333" alt="本地架设WordPress的几种工具包" /> 

这个集成包支持64位和32位系统。

官方网站：<a title="http://www.wampserver.com/" href="http://www.wampserver.com/" target="_blank">http://www.wampserver.com/</a>

### **MAMP**

Mac OS下的Apache, Mysql 、PHP环境。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/de-mamp-erste-schritte_zps04199baa.png" alt="本地架设WordPress的几种工具包" /> 

官方网站：<a title="http://www.mamp.info/en/index.html" href="http://www.mamp.info/en/index.html" target="_blank">http://www.mamp.info/en/index.html</a>

### **LAMP**

顾名思义，Linux下的Apache, Mysql 、PHP环境，这个安装就有点复杂了，以ubuntu系统为例。wamp

可以参照<a href="http://www.yingfengya.com/?post=7" target="_blank">这里</a>的安装方法或者安装一个新立得（Synaptic），搜索LAMP来安装。

或者，你也可以和重华一样，下载一个WordpressPortable，现在流行便携软件么。

下载地址：<a title="http://wordpress-portable.webnode.com" href="http://wordpress-portable.webnode.com" target="_blank">http://wordpress-portable.webnode.com</a>