---
id: 467
title: 如何解决Ad-Aware卸载不彻底的问题
date: 2009-12-17T16:37:15+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/how-do-i-uninstall-ad-aware-does-not-solve-the-problem-completely/
permalink: /how-do-i-uninstall-ad-aware-does-not-solve-the-problem-completely/
categories:
  - 其他资源
tags:
  - aaw7boot.log
  - Ad-Aware
  - Lavasoft
---
话说<a href="http://www.lavasoft.com/" target="_blank">Lavasoft</a>公司的<a href="http://www.lavasoft.com/products/ad_aware.php" target="_blank">Ad-Aware</a>是一款很不错的查杀间谍软件的工具.但是如果你什么时候不想用这款软件了,卸载了Ad-Aware后,发现在C盘下还是会有一个开机生成的文件<font color="#ff0000">aaw7boot.log</font>

虽然对系统没有什么影响,但是那么一个多余的东西在那里,总会觉得碍眼!通过卸载程序又卸载的不完全!怎么办呢?

<!--more-->

以下的步骤可以解决:

首先,通过自带的或者系统或者任何第三方卸载程序卸载这个软件.

然后在系统中搜索关键字为Lavasoft,Ad-Aware的文件和文件夹,删除之!

删除C:WindowsSystem32driversLbd.sys这个路径下的Lbd.sys文件!

查看系统服务有无lava的项目,使用sc命令删除之

查看任务计划,有无计划项目,删除之

从[http://www.sysinternals.com/](http://www.sysinternals.com/ "http://www.sysinternals.com/")下载Autoruns小工具,查看所有的启动项,如有lava或者ad-aware,删除之!

最后别忘记删除C盘下的<font color="#ff0000">aaw7boot.log</font>

因为是在解决这个问题后才写的这篇文章,所以只能凭借记忆写,不方便再去安装一个,见谅,如有不解之处,请联系重华!

<div style="padding-bottom: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; float: none; padding-top: 0px" id="scid:0767317B-992E-4b12-91E0-4F059A8CECA8:71bbbf10-4276-4a18-bb65-de0e6aaeb0e4" class="wlWriterEditableSmartContent">
  Technorati 标签: aaw7boot.log,<a href="http://technorati.com/tags/Lavasoft" rel="tag">Lavasoft</a>,Ad-Aware
</div>