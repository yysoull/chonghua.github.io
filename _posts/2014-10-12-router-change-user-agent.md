---
id: 2929
title: 升级路由器固件导致的问题
date: 2014-10-12T12:44:04+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=2915
permalink: /router-change-user-agent/
categories:
  - 网络资源
tags:
  - User-Agent
  - 路由器
---
前几日发现访问WordPress后台出现提示：您正在使用过期的浏览器。想想不应该啊，我使用的是最新的FireFox，怎么会是IE呢。后来越来越多的网站出现类似的提示，换了各种浏览器也一样，原本以为是被某个软件修改了，切换到Linux下也一样。查询一下，无一例外地都显示：Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)这是怎么回事呢？

<!--more-->

同时期出现的问题还不止如此，比如说，无法打开BlackBerry World，而使用VPN或者使用Goagent就正常。于是怀疑是不是移动的操蛋的宽带是不是做了什么手脚，因为网上有这种先例。不过这次没有打电话，而是先自己找找原因。查询了一下，说路由器为了破解运行商的限制，有可能会改User-Agent。想想也确实在前几天更新了悲催的老旧TP-link路由器的固件。于是恢复了老版本的固件，问题解决。

遇到此问题的朋友，不妨试试看这个解决方法，看看您是否在近期更新了路由器的固件。