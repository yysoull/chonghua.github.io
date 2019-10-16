---
id: 2934
title: 手动去除QQ广告
date: 2014-11-13T09:22:11+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2929
permalink: /remove-qq-ad/
categories:
  - 软件资源
tags:
  - QQ
  - 去广告
---
虽然QQ现在变成了巨无霸，某些人还是离不开它，抛开那么多的功能不说，最令人厌恶的就是那无所不在的广告了。增加功能可以理解，毕竟多少还是能够带来一些方便的，但是那广告，还是去掉的好，眼不见为净。平常我们一般都是使用第三方修改的优化版本，虽然没有广告，精简了组件，不过问题就是稳定性不够，最好的方法就是不修改源程序，仅仅去除广告即可。

<!--more-->

本来以为，QQ利用hosts屏蔽广告网址会没有效果，不过看到<a href="http://www.5v13.com/" target="_blank">歧路亡羊</a>的文章，发现原来是有效果的。广告全部消失的无影无踪了。将下面的内容添加到`C:WindowsSystem32driversetchosts`文件。

127.0.0.1 fodder.qq.com  
127.0.0.1 adshmct.qq.com  
127.0.0.1 hm.l.qq.com  
127.0.0.1 q.i.gdt.qq.com  
127.0.0.1 v.gdt.qq.com

对于一些弹窗、宠物等等信息窗口，我们只需要找设置面板中设置一下即可。

如果你安装了一些杀毒软件或者其它的网络防护软件，也可以将这几个网址添加到站点拦截的项目中，效果一样。

![手动去除QQ广告](http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/qqnoad.png)