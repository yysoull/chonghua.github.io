---
id: 1110
title: 摩托罗拉ME525归属地数据库升级包
date: 2013-01-02T22:23:37+08:00
author: chonghua
layout: post
guid: http://hechonghua.com/?p=1110
permalink: /the-motorola-me525-attribution-database-upgrade-package/
categories:
  - 软件资源
tags:
  - defy
  - ME525
  - 归属地
---
使用摩托罗拉ME525的同学们可能知道，自带的归属地数据库严重落后，很多新号段根本就无法显示，而摩托官方也一直置之不理，于是有此需求的同学不得不去安装一些第三方的归属地显示工具。但是这些软件你根本就找不到一个纯粹的归属地工具，都是画蛇添足的集成了和其他软件重复的功能，一个归属地软件而已，何必搞得和安全软件一样，而且有一点很重要，只有官方的归属地显示和系统最为整合，最为协调，而且也只有官方的才能在短信中显示。大家可能都有此感，所以我一直在找增加官方数据库数据的方法，可以一直没有找到。

<!--more-->

今天无意中在逛某论坛时看到已经有高人解决了这个问题。原来的有54032个数据，这个包包含了约26万个数据，基本上应该很全了，足以应付日常号码段。

<img style="display: block; float: none; margin-left: auto; margin-right: auto" src="http://chonghua-1251666171.cos.ap-shanghai.myqcloud.com/20130102220649.png"/ alt="摩托罗拉ME525归属地数据库升级包" > 

可以看到一些特殊号码也能识别了。

不过要使用这个数据库，还需要一定的动手能力，并且你的手机需要ROOT。

1.下载所需要的文件

<a title="http://dl.vmall.com/c03w1d5b5f" href="http://dl.vmall.com/c03w1d5b5f" target="_blank">http://dl.vmall.com/c03w1d5b5f</a>

2.解压压缩包里的文件到你的手机的SD卡的根目录；

3.使用root权限的文件管理器将libphoneloc-jni.so 放到 system/lib 改成和其他文件一样的权限；

4.同样将phoneloc.dat放到system/usr/share里面，改权限；

5.将MotoPlaceService.apk放到system/app中替换自带的同名文件，改权限，为安全考虑，可以先将系统自带的文件改名或者备份；

6.重启手机，就可以看到效果了。

<font color="#ff0000">注意</font>：必须将MotoPlaceService.apk放到system/app中替换自带的同名文件，不可以直接安装。

如果你觉得操作有点麻烦，也可以使用网友自制的update升级包，可以在魔趣论坛相关版块查找。