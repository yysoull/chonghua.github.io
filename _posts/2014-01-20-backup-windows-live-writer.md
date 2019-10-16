---
id: 2401
title: 备份Windows Live Writer
date: 2014-01-20T22:03:15+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2401
permalink: /backup-windows-live-writer/
categories:
  - 软件资源
tags:
  - Windows Live Writer
---
如果你使用Windows Live Writer来离线发布博客，你会发现一个问题，Windows Live Writer的所有配置，包括发布的文章和草稿都是默认存储在系统盘的。而且并没有提供任何备份和导入导出或者是自定义保存路径的功能。这样的话，一旦系统崩溃或者重装系统，而你又没有备份的话，那么麻烦也就来了。

<!--more-->

虽然说你或许已经成功的将文章发布成功了，网络上已经有了备份，但是保存在本地不是更好么，而且使用类似与dropbox之类的同步盘来同步，你到哪里都可以使用自己的配置。但是，你会说，该程序并没有和其它的Live组件一样提供自定义保存路径的选项啊，该怎么设置呢？注册表？注册表这玩意，还是少动为妙！其实操作很简单。并不需要修改系统的核心配置，因为在Windows7中，早就存在了该功能，只是你没有发现而已。

首先，我们需要知道**Windows Live Writer**保存的文章、配置在哪个位置。

你已经发布的文章或者保存的草稿在：C:UserschonghuaDocumentsMy Weblog Posts

模板、自动链接、关键词在这个位置：C:UserschonghuaAppDataRoamingWindows Live Writer

你也许会说，我直接把这几个文件夹复制一份不就行了，那样你就需要每写一篇文站就复制一次。重华当然不会教你这么做。

定位到你的用户名的目录，然后右键“我的文档”或者“Documents”，进入“属性”，“位置”选项卡。

![备份Windows Live Writer](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/2014-01-20_215501.png) 

你看到了什么？这不就是你想要的么。然后，我就不需要多做解释了！

或者更高级一点，你可以使用“mklink”这个命令，<a href="http://www.ditii.com/2009/01/30/guide-to-move-windows-live-writers-my-weblog-posts-folder-onto-a-seperate-location/" target="_blank">看这里</a>；

或者你也可以使用<a href="http://wlwbackup.codeplex.com/" target="_blank">Windows Live Writer Backup</a>这个软件。